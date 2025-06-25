import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const accessToken = formData.get('accessToken');

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Access token is required' },
        { status: 400 }
      );
    }

    // Helper function to get field values
    const getField = (name: string) => formData.get(name) || '';

    const contactData = {
      data: [{
        First_Name: getField('First Name'),
        Last_Name: getField('Last Name'),
        Email: getField('Email'),
        Phone: getField('Phone'),
        Program: getField('Program'),
        Year_Of_Graduation: getField('Year of Graduation'),
        Work_Experience_Level: getField('Work Experience Level'),

        Ga_client_id: getField('Ga_client_id'),
        Business_Unit: getField('Business Unit'),
        Source_Domain: getField('Source_Domain'),
        Coupon_Code: formData.get('Coupon Code'),


        // utm tracking details
        first_page_seen1: getField('First Page Seen'),
        Original_Traffic_Source: getField('Original Traffic Source'),
        Original_Traffic_Source_Drill_Down_1: getField('Original Traffic Source Drill-Down 1'),
        Original_Traffic_Source_Drill_Down_2: getField('Original Traffic Source Drill-Down 2'),
        UTM_Term_First_Page_Seen: getField('UTM Term-First Page Seen'),
        UTM_Content_First_Page_Seen: getField('UTM Content-First Page Seen'),

        duplicate_check_fields: ['Email']
      }],
      trigger: ['workflow']
    };

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

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error creating/updating contact:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create or update contact' },
      { status: 500 }
    );
  }
}