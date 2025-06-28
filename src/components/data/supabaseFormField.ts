// src/data/callbackFormFields.ts
import { FieldConfig } from '@/components/components/form/DynamicForm';

const supabaseFormField: FieldConfig[] = [
 {
    name: 'experience',
    label: 'Prior Experience',
    type: 'text',
    required: true,
    rules: { required: 'Please Enter your experience' },
  },
  {
    name: 'language',
    label: 'Known Language',
    type: 'text',
    required: true,
    rules: { required: 'Language is required' },
  },
  {
    name: 'graduation_degree',
    label: 'Graduation Degree',
    type: 'select',
    options: ['BBA','Btech','Mtech'],
    rules: { required: 'Please select your graduation degree' },
  },
    {
    name: 'specialization',
    label: 'Bachelor Degree Specialization',
    type: 'select',
    options: ['CSE','IT','ETC'],
    rules: { required: 'Please select your specialization' },
  },

];

export default supabaseFormField;