import { NextResponse } from 'next/server';

interface ReferralData {
    First_Name: string;
    Last_Name:string;
    Email: string;
    Phone: string;
    Business_Unit: string;
    Referral_Name: string;
    Referral_Email: string;
    Referral_Phone: string;
    Program: string;
    Referral_URL: string;
    Source_Domain: string;
}

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

        // Validate and format Referral_URL
        let referralUrl = formData.get('Referral_URL') as string;
        if (!referralUrl) {
            referralUrl = 'https://odinschool.com'; // Default URL if none provided
        } else if (!isValidUrl(referralUrl)) {
            // If URL is invalid but contains text, make it a valid URL
            referralUrl = `https://${referralUrl.replace(/(^\w+:|^)\/\//, '')}`;
        }

        const referralData = {
            data: [{
                First_Name: formData.get('Referral_First_Name') as string,
                Last_Name:formData.get('Referral_Last_Name') as string,
                Email: formData.get('Referral_Email') as string,
                Phone: formData.get('Referral_Phone') as string,
                Business_Unit: formData.get('Business_Unit') as string,
                Referral_Name: formData.get('First_Name') as string,
                Referral_Email: formData.get('Email') as string,
                Referral_Phone: formData.get('Phone') as string,
                Program: formData.get('Program') as string,
                Referral_URL: referralUrl, // Use the validated URL
                Source_Domain: 'Referral Form'
            }],
            trigger: ['workflow']
        };

        const response = await fetch('https://www.zohoapis.in/crm/v2/Contacts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(referralData),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to create referral');
        }

        return NextResponse.json(responseData);
    } catch (error) {
        console.error('Error creating referral:', error);
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to create referral',
                details: error instanceof Error ? error.stack : null
            },
            { status: 500 }
        );
    }
}

// Helper function to validate URLs
function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}