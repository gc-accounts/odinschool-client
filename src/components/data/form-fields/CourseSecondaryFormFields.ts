import { FieldConfig } from "@/components/components/form/DynamicForm";
import { CountryCodeData } from "@/components/data/form-fields/CountryCodeData";

// Format the country code data for the select options
const formattedCountryOptions = CountryCodeData.map(country => `+${country.code} (${country.country})`);
const CourseSecondaryFormFields: FieldConfig[] = [
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
    options: ['Data Science Course', 'Certification Program in Applied Generative AI', 'Generative AI Course', 'Data Science Elite Course', 'Investment Banking Course'],
    rules: { required: 'Please select a program' },
  },
  {
    name: 'experience',
    label: 'Work Experience Level',
    type: 'select',
    options: ['No Experience', '0-1 Years', '1-3 Years', '3+ Years'],
    rules: { required: 'Please select your experience level' },
  },
  { name: 'ga_client_id', type: 'hidden' },
  { name: 'business_unit', type: 'hidden' },
]

export default CourseSecondaryFormFields