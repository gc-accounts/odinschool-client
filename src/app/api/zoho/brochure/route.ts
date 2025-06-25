import { NextResponse } from 'next/server';

interface ContactData {
    First_Name: any | null;
    Last_Name: any | null;
    Email: any | null;
    Phone: any | null;
    Program: any | null;
    Year_Of_Graduation: any | null;
    Ga_client_id: any | null;
    Business_Unit: any | null;
    Source_Domain: any | null;
    first_page_seen1?: any | null;
    Original_Traffic_Source?: any | null;
    Original_Traffic_Source_Drill_Down_1?: any | null;
    Original_Traffic_Source_Drill_Down_2?: any | null;
    UTM_Term_First_Page_Seen?: any | null;
    UTM_Content_First_Page_Seen?: any | null;
}

interface ZohoResponse {
    data: Array<{
        code: any;
        details: {
            Modified_Time?: any;
            Created_Time?: any;
            id?: any;
        };
        message: any;
        status: any;
    }>;
}

const PROTECTED_FIELDS = [
    'first_page_seen1',
    'Original_Traffic_Source',
    'Original_Traffic_Source_Drill_Down_1',
    'Original_Traffic_Source_Drill_Down_2'
];

const ORGANIC_SEARCH_VALUE = 'Organic Search';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const accessToken = formData.get('accessToken') as string;

        if (!accessToken) {
            return NextResponse.json(
                { error: 'Access token is required' },
                { status: 400 }
            );
        }

        // Prepare base contact data
        const contactData = {
            data: [{
                First_Name: formData.get('First Name'),
                Last_Name: formData.get('Last Name'),
                Email: formData.get('Email'),
                Phone: formData.get('Phone'),
                Program: formData.get('Program'),
                Year_Of_Graduation: formData.get('Year of Graduation'),
                Ga_client_id: formData.get('ga_client_id'),
                Business_Unit: formData.get('Business Unit'),
                Source_Domain: formData.get('Source_Domain'),
                duplicate_check_fields: ['Email']
            }],
            trigger: ['workflow']
        };

        // First check if contact exists
        const email = formData.get('Email') as string;
        let isUpdate = false;
        let existingRecord: any = null;
        let shouldUpdateProtectedFields = false;

        try {
            const checkResponse = await fetch(
                `https://www.zohoapis.in/crm/v2/Contacts/search?email=${encodeURIComponent(email)}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );

            if (checkResponse.ok) {
                const checkData = await checkResponse.json();
                if (checkData.data && checkData.data.length > 0) {
                    existingRecord = checkData.data[0];
                    isUpdate = true;
                }
            } else {
                console.error('Search API error:', checkResponse.status, checkResponse.statusText);
            }
        } catch (searchError) {
            console.error('Error checking contact existence:', searchError);
            // Continue with creation even if search fails
        }

        // Type assertion for contact data
        const contact = contactData.data[0] as ContactData;

        // For new records, add all tracking fields
        if (!isUpdate) {
            contact.first_page_seen1 = formData.get('First Page Seen') as string;
            contact.Original_Traffic_Source = formData.get('Original Traffic Source') as string;
            contact.Original_Traffic_Source_Drill_Down_1 = formData.get('Original Traffic Source Drill-Down 1') as string;
            contact.Original_Traffic_Source_Drill_Down_2 = formData.get('Original Traffic Source Drill-Down 2') as string;
            shouldUpdateProtectedFields = true;
        } else if (existingRecord) {
            // Check if ALL protected fields are empty OR if Original_Traffic_Source is "Organic Search"
            const allProtectedFieldsEmpty = PROTECTED_FIELDS.every(
                field => !existingRecord[field] || existingRecord[field] === ''
            );
            
            const hasOrganicSearch = existingRecord.Original_Traffic_Source === ORGANIC_SEARCH_VALUE;
            
            shouldUpdateProtectedFields = allProtectedFieldsEmpty || hasOrganicSearch;

            if (shouldUpdateProtectedFields) {
                // Update all protected fields if all were empty OR if Original_Traffic_Source is "Organic Search"
                contact.first_page_seen1 = formData.get('First Page Seen') as string;
                contact.Original_Traffic_Source = formData.get('Original Traffic Source') as string;
                contact.Original_Traffic_Source_Drill_Down_1 = formData.get('Original Traffic Source Drill-Down 1') as string;
                contact.Original_Traffic_Source_Drill_Down_2 = formData.get('Original Traffic Source Drill-Down 2') as string;
            } else {
                // Preserve existing values for all protected fields
                PROTECTED_FIELDS.forEach(field => {
                    contact[field as keyof ContactData] = existingRecord[field] || null;
                });
            }
        }
        
        // Always add UTM fields (whether new or existing record)
        contact.UTM_Term_First_Page_Seen = formData.get('UTM Term-First Page Seen') as string;
        contact.UTM_Content_First_Page_Seen = formData.get('UTM Content-First Page Seen') as string;

        const response = await fetch('https://www.zohoapis.in/crm/v2/Contacts/upsert', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch (e) {
                errorData = { message: await response.text() };
            }
            throw new Error(errorData.message || `Failed to upsert contact: ${response.statusText}`);
        }

        let data: ZohoResponse;
        try {
            data = await response.json();
        } catch (e) {
            throw new Error('Invalid JSON response from Zoho');
        }
        
        return NextResponse.json({
            ...data,
            action: isUpdate ? (shouldUpdateProtectedFields ? 'full_update' : 'limited_update') : 'create',
            protected_fields_preserved: isUpdate && !shouldUpdateProtectedFields ? PROTECTED_FIELDS : []
        });
        
    } catch (error) {
        console.error('Brochure API Error:', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Internal Server Error',
                details: error instanceof Error ? error.stack : null
            },
            { status: 500 }
        );
    }
}