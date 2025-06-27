import { AnyARecord } from 'dns';
import { NextResponse } from 'next/server';

interface ContactData {
    First_Name?: any;
    Last_Name?: any;
    Email?: any;
    Phone?: any;
    Program?: any;
    Description?:any
    Ga_client_id?: any;
    Business_Unit?: any;
    Source_Domain?: any;
    first_page_seen1?: any;
    Original_Traffic_Source?: string;
    Original_Traffic_Source_Drill_Down_1?: any;
    Original_Traffic_Source_Drill_Down_2?: any;
    UTM_Term_First_Page_Seen?: any;
    UTM_Content_First_Page_Seen?: any;
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

        // Helper function to get field values
        const getField = (name: string) => formData.get(name) as string || null;

        // Prepare base contact data
        const contactData = {
            data: [{
                First_Name: getField('First Name'),
                Last_Name: getField('Last Name'),
                Email: getField('Email'),
                Phone: getField('Phone'),
                Program: getField('Program'),
                Description:getField('Description'),
                Ga_client_id: getField('Ga_client_id'),
                Business_Unit: getField('Business Unit'),
                Source_Domain: getField('Source_Domain'),
                duplicate_check_fields: ['Email']
            }],
            trigger: ['workflow']
        };

        // First check if contact exists
        const email = getField('Email');
        let isUpdate = false;
        let existingRecord: any = null;
        let shouldUpdateProtectedFields = false;

        try {
            const checkResponse = await fetch(
                `https://www.zohoapis.in/crm/v2/Contacts/search?email=${encodeURIComponent(email || '')}`,
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
            contact.first_page_seen1 = getField('First Page Seen');
            contact.Original_Traffic_Source = getField('Original Traffic Source');
            contact.Original_Traffic_Source_Drill_Down_1 = getField('Original Traffic Source Drill-Down 1');
            contact.Original_Traffic_Source_Drill_Down_2 = getField('Original Traffic Source Drill-Down 2');
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
                contact.first_page_seen1 = getField('First Page Seen');
                contact.Original_Traffic_Source = getField('Original Traffic Source');
                contact.Original_Traffic_Source_Drill_Down_1 = getField('Original Traffic Source Drill-Down 1');
                contact.Original_Traffic_Source_Drill_Down_2 = getField('Original Traffic Source Drill-Down 2');
            } else {
                // Preserve existing values for all protected fields
                PROTECTED_FIELDS.forEach(field => {
                    contact[field as keyof ContactData] = existingRecord[field] || null;
                });
            }
        }
        
        // Always add UTM fields (whether new or existing record)
        contact.UTM_Term_First_Page_Seen = getField('UTM Term-First Page Seen');
        contact.UTM_Content_First_Page_Seen = getField('UTM Content-First Page Seen');

        console.log('Sending to Zoho:', JSON.stringify(contactData, null, 2));

        const response = await fetch('https://www.zohoapis.in/crm/v2/Contacts/upsert', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        const responseData = await response.json();
        console.log('Zoho Response:', responseData);

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to create or update contact');
        }

        return NextResponse.json({
            ...responseData,
            action: isUpdate ? (shouldUpdateProtectedFields ? 'full_update' : 'limited_update') : 'create',
            protected_fields_preserved: isUpdate && !shouldUpdateProtectedFields ? PROTECTED_FIELDS : []
        });
    } catch (error) {
        console.error('Error creating/updating contact:', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to create or update contact',
                details: error instanceof Error ? error.stack : null
            },
            { status: 500 }
        );
    }
}