// src/data/callbackFormFields.ts
import { FieldConfig } from '@/components/components/form/DynamicForm';

const callbackFormFields: FieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    rules: { required: 'First Name is required' },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    rules: { required: 'Last Name is required' },
  },
  {
    name: 'email',
    label: 'Email',
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
    label: 'Phone',
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
    name: 'year',
    label: 'Year of Graduation',
    type: 'select',
    options: ['Before 2018', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', 'After 2025'],
    rules: { required: 'Please select your graduation year' },
  },
  {
    name: 'program',
    label: 'Program',
    type: 'select',
    options: ['Data Science Course', 'Certification Program in Applied Generative AI', 'Generative AI Course', 'Data Science Elite Course'],
    rules: { required: 'Please select a program' },
  },
  { name: 'ga_client_id', type: 'hidden' },
  { name: 'business_unit', type: 'hidden' },
  // hidden fields for url tracking
  { name: 'First_Page_Seen', type: 'hidden' },
  { name: 'Original_Traffic_Source', type: 'hidden' },
  { name: 'Original_Traffic_Source_Drill_Down_1', type: 'hidden' },
  { name: 'Original_Traffic_Source_Drill_Down_2', type: 'hidden' },
  { name: 'UTM_Term_First_Page_Seen', type: 'hidden' },
  { name: 'UTM_Content_First_Page_Seen', type: 'hidden' },
];

export default callbackFormFields;