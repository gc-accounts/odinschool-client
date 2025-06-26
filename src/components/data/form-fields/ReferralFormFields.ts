// src/data/callbackFormFields.ts
import { FieldConfig } from '@/components/components/form/DynamicForm';

const ReferralFormFields: FieldConfig[] = [
  {
    name: 'first_name',
    label: 'Referral First Name*',
    type: 'text',
    required: true,
    rules: { required: 'Referral First Name is required' },
  },
  {
    name: 'last_name',
    label: 'Referral Last Name*',
    type: 'text',
    required: true,
    rules: { required: 'Referral Last Name is required' },
  },
  {
    name: 'email',
    label: 'Referral Email*',
    type: 'text',
    required: true,
    rules: {
      required: 'Referral Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
      validate: (value: string) => 
        !value.includes('+') && !value.includes('-') || 'Email cannot contain + or - signs',
    },
  },
  {
    name: 'phone',
    label: 'Referral Phone Number*',
    type: 'text',
    required: true,
    rules: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]{10,12}$/,
        message: 'Phone number must be between 10 and 12 digits (numbers only)',
      },
    },
    
  },
  {
    name: 'program',
    label: 'Program',
    type: 'select',
    options: ['Data Science Course', 'Certification Program in Applied Generative AI', 'Generative AI Course', 'Data Science Elite Course', 'Investment Banking Course'],
    rules: { required: 'Please select a program' },
  },

  // Hidden fields
  { name: 'url', type: 'hidden' },
];

export default ReferralFormFields;