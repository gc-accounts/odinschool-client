
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import DynamicForm, { FieldConfig } from './form/DynamicForm';
import axios from 'axios';


const formFields: FieldConfig[] = [
  {
    name: 'name',
    label: 'Name*',
    type: 'text',
    required: true,
    rules: { required: 'Name is required' },
  },
  {
    name: 'email',
    label: 'Email*',
    type: 'text',
    required: true,
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'phone',
    label: 'Phone*',
    type: 'text',
    required: true,
    rules: {
      required: 'Phone number is required',
      minLength: {
        value: 10,
        message: 'Phone number must be at least 10 digits',
      },
    },
  },
  {
    name: 'program',
    label: 'Program*',
    type: 'select',
    options: ['Data Science Course', 'Certification Program in Applied Generative AI', 'Generative AI Course', 'Data Science Elite Course'],
    rules: { required: 'Please select a program' },
  },

{
  name: 'description',
  label: 'Description',
  type: 'textarea',    
  required: false,  

},
  { name: 'ga_client_id', type: 'hidden' },
  { name: 'business_unit', type: 'hidden' }
];



const CallbackForm = () => {
  const { toast } = useToast();

  // Handle Form Submit
  const handleFormSubmit = async (data: any) => {
    console.log('data------------------------', data);

    const zohoEndpoint = "https://crm.zoho.in/crm/WebToContactForm";

    const hiddenFields = {
      xnQsjsdp: '0ee5fe53d8fdab0c50e05b6711b8646e52af804ecad070c5c2048cd027b0ef61',
      xmIwtLD: "43b71e08f2fd49b38ef635e57723ad06c199ca8b29ea5fa48b314181e575842418b919d303f74b11878d665b6cb5c787",
      actionType: "Q29udGFjdHM=",
      returnURL: "null",
    };

    const formData = new FormData();

    // Append hidden fields
    Object.entries(hiddenFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append visible form data
    formData.append('First Name', data.name?.split(' ')[0] || '');
    formData.append('Last Name', data.name?.split(' ').slice(1).join(' ') || 'NA');
    formData.append("Email", data.email || '');
    formData.append("Phone", data.phone || '');
    formData.append("Program", data.program || '');
    formData.append("Description", data.description || '')
    formData.append("ga_client_id", data.ga_client_id);
    formData.append("Business Unit", data.business_unit);

    try {
      const response = await axios.post(zohoEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });

    } catch (err) {
      console.error('Error submitting form:', err);

      toast({
        title: "Form submission failed!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }

  };

  return (
    <div className=" w-full max-w-lg mx-auto my-12 glass-card rounded-xl p-6 md:p-8 shadow-lg">
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Request a Callback</h3>
      <p className="text-gray-600 mb-6">Fill in your details and our team will get back to you</p>

      <DynamicForm
        fields={formFields}
        buttonText={'Submit'}
        initialValues={{
          ga_client_id: '',
          business_unit: 'Odinschool'
        }}

        onSubmit={(data) => {
          handleFormSubmit(data)

        }}
      />


    </div>
  );
};

export default CallbackForm;
