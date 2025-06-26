// src/data/callbackFormFields.ts
import { FieldConfig } from '@/components/components/form/DynamicForm';

const ReferrerFormFields: FieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    rules: { required: 'Name is required' },
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
      validate: (value: string) => 
        !value.includes('+') && !value.includes('-') || 'Email cannot contain + or - signs',
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
];

export default ReferrerFormFields;