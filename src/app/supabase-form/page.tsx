'use client'

import React, { useState } from 'react'
import DynamicForm, { FieldConfig } from '@/components/components/form/DynamicForm'
import supabaseFormField from '@/components/data/supabaseFormField'
import { createClient } from '@/components/utils/supabase/client' // Ensure this path is correct

const Page = () => {
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleFormSubmit = async (data: any, reset: () => void) => {
    console.log('Raw form data:', data); // Log the raw data from your form

    setSubmissionStatus({ type: null, message: '' }); // Reset status on new submission
    const supabase = createClient(); // Initialize the Supabase client

    // Map your form data keys to Supabase column names
    const dataToInsert = {
      // Use the exact Supabase column names as keys
      "Prior Experience": data.experience, // Matches 'name: experience' from form
      "Known Languages": data.language,   // Matches 'name: language' from form
      "Graduation Degree": data.graduation_degree, // Matches 'name: graduation_degree' from form
      "Bachelor Degree Specialization": data.specialization, // Matches 'name: specialization' from form
      // Add other fields as necessary if your form collected them
    };

    console.log('Data being sent to Supabase:', dataToInsert);

    try {
      // The table name is 'test' as per your screenshot
      const { error } = await supabase
        .from('test') // <<< IMPORTANT: Using 'test' as your table name
        .insert([
          dataToInsert // Insert the mapped data object
        ]);

      if (error) {
        console.error('Error inserting data:', error);
        setSubmissionStatus({ type: 'error', message: `Submission failed: ${error.message}` });
      } else {
        console.log('Data submitted successfully!');
        setSubmissionStatus({ type: 'success', message: 'Form submitted successfully!' });
        reset(); // Call the reset function provided by DynamicForm
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
      setSubmissionStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    }
  };

  return (
    <div className='container mt-10'>
      <div className='p-10'>
        <DynamicForm
          fields={supabaseFormField as FieldConfig[]}
          buttonText={'Submit'}
          onSubmit={handleFormSubmit}
        />
        {submissionStatus.type === 'success' && (
          <p className="text-green-600 mt-4">{submissionStatus.message}</p>
        )}
        {submissionStatus.type === 'error' && (
          <p className="text-red-600 mt-4">{submissionStatus.message}</p>
        )}
      </div>
    </div>
  )
}

export default Page;