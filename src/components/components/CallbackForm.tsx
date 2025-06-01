import React from 'react';
import { useToast } from "@/components/hooks/use-toast";
import DynamicForm, { FieldConfig } from './form/DynamicForm';
import { submitToZoho } from '@/components/utils/api/submitToZoho'; // make sure path is correct
import callbackFormFields from '@/components/data/callbackFormFields';

const CallbackForm = () => {
  const { toast } = useToast();


  // Zoho hidden fields
 const hiddenFields = {
      xnQsjsdp: "b3f43adc4710a41efc03cab70d04a5eee598f225642df4a1f565782c83a02d3a",
      xmIwtLD: "a2deb9be306e58e854a1535496bd061b69e1d5dd0efc44a28ae5ee26dfe42b099e51cbb9f06e7317ab708b49c270667a",
      actionType: "Q29udGFjdHM=",
      returnURL: "null",
    };
  

  const fieldMap = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    program: 'Program',
    year:'Year of Graduation',
    ga_client_id: 'ga_client_id',
    business_unit: 'Business Unit',
  };
  
const handleFormSubmit = async (data: any, reset: () => void) => {
 

  await submitToZoho({
    data: { ...data },
    fieldMap,
    hiddenFields,
    toast,
    onSuccess: reset, // ✅ Reset form after success
  });
};


  return (
    <div className="w-full max-w-lg mx-auto my-12 glass-card rounded-xl p-6 md:p-8 shadow-lg">
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Request a Callback</h3>
      <p className="text-gray-600 mb-6">Fill in your details and our team will get back to you</p>
      <DynamicForm
        fields={callbackFormFields}
        buttonText="Submit"
        initialValues={{ ga_client_id: '', business_unit: 'Odinschool' }}
        onSubmit={(data, reset) => {
          handleFormSubmit(data, reset);
        }}
      />
    </div>
  );
};

export default CallbackForm;
