// src/data/callbackFormFields.ts
import { FieldConfig } from '@/components/components/form/DynamicForm';
import { CountryCodeData } from '@/components/data/form-fields/CountryCodeData';

// Format the country code data for the select options
const formattedCountryOptions = CountryCodeData.map(country => `+${country.code} (${country.country})`);
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
    name: 'countryCode',
    label: 'Country Code',
    type: 'select',
    required: true,
    options: formattedCountryOptions, // Use the dynamically mapped options
    defaultValue: '+91 (India)', // Set default to India
    rules: { required: 'Country Code is required' },
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    required: true,
    rules: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Phone number must contain only digits',
      },
      minLength: {
        value: 10,
        message: 'Phone number must be at least 8 digits long',
      },
      maxLength: {
        value: 12,
        message: 'Phone number cannot exceed 12 digits',
      },
    },
  },
];

export default ReferrerFormFields;