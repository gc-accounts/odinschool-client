'use client'
import React, { useState } from 'react'
import Button from '@/components/components/Button'
import Modal from '@/components/components/component-template/Modal'
import PrimaryForm from '@/components/components/course-details/PrimaryForm'
import DynamicForm from '@/components/components/form/DynamicForm'
import brochureFormField from '@/components/data/brochureFormField'
import { useToast } from '@/components/hooks/use-toast';
import { pushToDataLayer } from '@/lib/gtm'; // <--- IMPORT THE GTM HELPER

interface BrochureButtonProps {
  slug: string;
  isPrimaryButton: boolean;
  isBrochureButton: boolean;
  primaryButtonText: string;
  parentClass: string;
  primaryFormSourceDomain?: string;
}

const BrochureButton = ({ slug, isPrimaryButton, isBrochureButton, primaryButtonText, parentClass, primaryFormSourceDomain }: BrochureButtonProps) => {
  const [formOpen, setFormOpen] = useState(false)
  const [brochureFormOpen, setBrochureFormOpen] = useState(false)
  const { toast } = useToast()

  // ✅ Handle Brochure Form Submission
  const handleBrochureFormSubmit = async (data: any, reset: () => void) => {
    try {
      const accessTokenRes = await fetch('/api/auth/token-brochure', { method: 'POST' })
      if (!accessTokenRes.ok) throw new Error('Token refresh failed')
      const { access_token } = await accessTokenRes.json()

      const brochureFormData = new FormData()
      brochureFormData.append('accessToken', access_token)
      brochureFormData.append('First Name', data.firstName)
      brochureFormData.append('Last Name', data.lastName)
      brochureFormData.append('Email', data.email)
      brochureFormData.append('Phone', data.phone)

      // Determine program name based on slug (existing logic)
      let programName = '';
      switch (slug) {
        case 'data-science-course':
          programName = 'Data Science Course';
          break;
        case 'data-science-elite-course':
          programName = 'Data Science Elite Course';
          break;
        case 'generative-ai-bootcamp':
          programName = 'Generative AI Course';
          break;
        case 'generative-ai-course-iitg':
          programName = 'Certification Program in Applied Generative AI';
          break;
        case 'investment-banking-course':
          programName = 'Investment Banking Course';
          break;
        default:
          programName = slug; // Fallback to slug if no match
      }

      brochureFormData.append('Program', programName)
      brochureFormData.append('Year of Graduation', data.year)
      brochureFormData.append('ga_client_id', '') // Assuming this is handled elsewhere or populated later
      brochureFormData.append('Business Unit', 'Odinschool')
      brochureFormData.append('Source_Domain', 'Brochure Form')

      const response = await fetch('/api/zoho/brochure', {
        method: 'POST',
        body: brochureFormData
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit brochure form')
      }

      toast({
        title: 'Brochure requested successfully!',
        description: 'Check your email shortly for the brochure.'
      })

      // --- START: Add GTM Data Layer Push Here ---
      pushToDataLayer('brochure_download_success', {
        eventName: 'brochure_download_modal',
        program_name: programName, 
        user_email: data.email,
      });
      // --- END: Add GTM Data Layer Push Here ---

      reset() // ✅ Clear form fields
      setBrochureFormOpen(false)
    } catch (err) {
      console.error('Error submitting brochure form:', err)
      toast({
        title: 'Error!',
        description:
          err instanceof Error ? err.message : 'Submission failed. Try again later.',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className={parentClass}>
      {
        isPrimaryButton &&
        <Button
          className='bg-[#FFD600] border border-transparent hover:bg-[#FFD600] rounded-sm text-black md:text-lg text-sm md:px-4 px-2 md:py-3 py-1 outline-none focus:outline-none'
          onClick={() => setFormOpen(true)}
        >
          {primaryButtonText}
        </Button>
      }
      <Modal header_text={'Request a callback'} open={formOpen} onOpenChange={setFormOpen}>
        <PrimaryForm buttonText='Request a Callback' slug={slug} isModal={true} sourceDomain={primaryFormSourceDomain ? primaryFormSourceDomain : 'Course form'} />
      </Modal>

      {
        isBrochureButton &&
        <Button
          className='downloadBtn bg-transparent border border-white rounded-sm text-white md:text-lg text-sm md:px-4 px-2 md:py-3 py-1 hover:bg-[#FFD600] hover:text-black hover:border-transparent outline-none focus:outline-none'
          onClick={() => setBrochureFormOpen(true)}
        >
          Download Brochure
        </Button>
      }


      <Modal
        header_text={'Download Brochure'}
        open={brochureFormOpen}
        onOpenChange={setBrochureFormOpen}
      >
        <DynamicForm
          buttonText={'Download Brochure'}
          fields={brochureFormField}
          initialValues={{
            program: slug,
            ga_client_id: '',
            business_unit: 'Odinschool',
            Source_Domain: 'Brochure Form'
          }}
          onSubmit={async (data, reset) => {
            await handleBrochureFormSubmit(data, reset)
          }}
        />
      </Modal>
    </div>
  )
}

export default BrochureButton