// PrimaryForm.tsx
'use client';

import React, { useEffect } from 'react';
import { useToast } from '@/components/hooks/use-toast';
import DynamicForm, { FieldConfig } from '@/components/components/form/DynamicForm';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import CoursePrimaryFormFields from '@/components/data/form-fields/CoursePrimaryFormFields';
import { useRouter } from 'next/navigation';

interface PrimaryFormProps {
  slug: string;
  isModal: Boolean;
    buttonText?: string
  isCoupon?: Boolean;

}


const PrimaryForm: React.FC<PrimaryFormProps> = ({ slug, isModal, buttonText, isCoupon }) => {
  const { toast } = useToast();
  const [utm, setUtm] = React.useState<Record<string, string>>({});
  const router = useRouter();

  const getSlug = (slug: string) => {
    switch (slug) {
      case 'data-science-course':
        return 'Data Science Course';
      case 'data-science-elite-course':
        return 'Data Science Elite Course';
      case 'generative-ai-bootcamp':
        return 'Generative AI Course';
      case 'generative-ai-course-iitg':
        return 'Certification Program in Applied Generative AI';
      default:
        return '';
    }
  };

  const getAccessToken = async () => {
    const res = await fetch('/api/auth/course-form-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Failed to get access token');
    const data = await res.json();
    return data.access_token;
  };

  useEffect(() => {
    const data = getUTMTrackingData();
    setUtm(data);
    sessionStorage.setItem('utmTracking', JSON.stringify(data));
  }, []);

  const handleFormSubmit = async (data: any, reset: () => void) => {
    try {
      const token = await getAccessToken();
      const formData = new FormData();
      formData.append('accessToken', token);
      formData.append('First Name', data.firstName);
      formData.append('Last Name', data.lastName);
      formData.append('Email', data.email);
      formData.append('Phone', data.phone);
      formData.append('Program', getSlug(slug));
      formData.append('Year of Graduation', data.year);
      formData.append('Ga_client_id', '');
      formData.append('Business Unit', 'Odinschool');
      isCoupon && formData.append('Coupon Code', 'EBO2025');

      formData.append('First Page Seen', utm['First Page Seen'] || '');
      formData.append('Original Traffic Source', utm['Original Traffic Source'] || '');
      formData.append(
        'Original Traffic Source Drill-Down 1',
        utm['Original Traffic Source Drill-Down 1'] || ''
      );
      formData.append(
        'Original Traffic Source Drill-Down 2',
        utm['Original Traffic Source Drill-Down 2'] || ''
      );
      formData.append('UTM Term-First Page Seen', utm['UTM Term-First Page Seen'] || '');
      formData.append('UTM Content-First Page Seen', utm['UTM Content-First Page Seen'] || '');

      const res = await fetch('/api/zoho/course-form', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Form submission failed');
      }

      toast({
        title: 'Success!',
        description: "Your information has been submitted successfully. We'll contact you soon.",
      });
      sessionStorage.setItem('submittedEmail', data.email);
      reset();
      setTimeout(() => router.push(`/thank-you?title=${slug}`), 1000);
    } catch (error: any) {
      console.error(error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  if (!Object.keys(utm).length) return null;

  return (
    <div className={`${isModal ? '' : 'w-full max-w-lg mx-auto bg-white text-black rounded-xl p-6 md:p-8 shadow-lg'}`}>
      <DynamicForm
        fields={CoursePrimaryFormFields as FieldConfig[]}
        buttonText={buttonText? buttonText : 'Submit' }
        initialValues={{
          program: getSlug(slug),
          ga_client_id: '',
          business_unit: 'Odinschool',
        }}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default PrimaryForm;
