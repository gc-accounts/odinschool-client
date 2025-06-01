import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const accessToken = formData.get('accessToken') as string;

    // Format data according to Zoho CRM API requirements
    const contactData = {
      data: [{
        First_Name: formData.get('First Name'),
        Last_Name: formData.get('Last Name'),
        Email: formData.get('Email'),
        Phone: formData.get('Phone'),
        Program: formData.get('Program'),
        Year_of_Graduation: formData.get('Year of Graduation'),
        Coupon_Code: formData.get('Coupon Code') || '',
        Ga_client_id: formData.get('Ga_client_id') || '',
        Business_Unit: formData.get('Business Unit') || 'Odinschool'
      }]
    };

    const zohoEndpoint = "https://crm.zoho.in/crm/v2/Contacts";

    const response = await fetch(zohoEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Zoho API Error:', errorData);
      throw new Error(errorData.message || 'Failed to create contact');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error in Zoho Contact API:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create contact' },
      { status: 500 }
    );
  }
} 