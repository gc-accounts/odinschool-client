
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRight, Code, Cpu, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Modal from './component-template/Modal';
import DynamicForm from './form/DynamicForm';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { FieldConfig } from './form/DynamicForm';


const formFields: FieldConfig[] = [
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
      minLength: {
        value: 10,
        message: 'Phone number must be at least 10 digits',
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
    rules: { required: 'Please select your experience level' },
  },
  { name: 'ga_client_id', type: 'hidden' },
];


const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  const {toast} = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };


  // Handle Form SUbmit
    // Handle Form Submit
  const handleFormSubmit = async (data: any) => {
    console.log('data------------------------', data);
  
    const zohoEndpoint = "https://crm.zoho.in/crm/WebToContactForm";
  
    const hiddenFields = {
      xnQsjsdp: "b3f43adc4710a41efc03cab70d04a5eee598f225642df4a1f565782c83a02d3a",
      xmIwtLD: "a2deb9be306e58e854a1535496bd061b69e1d5dd0efc44a28ae5ee26dfe42b099e51cbb9f06e7317ab708b49c270667a",
      actionType: "Q29udGFjdHM=",
      returnURL: "null",
    };
  
    const formData = new FormData();
  
    // Append hidden fields
    Object.entries(hiddenFields).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    // Append visible form data
    formData.append("First Name", data.firstName || '');
    formData.append("Last Name", data.lastName || '');
    formData.append("Email", data.email || '');
    formData.append("Phone", data.phone || '');
    formData.append("Year of Graduation", data.year || '');
    formData.append("Program", data.program);
    formData.append("ga_client_id", '');
    formData.append("Business Unit", 'OdinSchool');
  
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
  
    setFormOpen(false);
  };
  
  return (
    <section className="pt-24 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-8 md:pr-8">
            <div ref={addToRefs} className="opacity-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 mb-6">
                <span className="text-xs font-medium">Master Coding Skills</span>
              </div>
              <h1 className="heading-xl text-balance">
                Upskill Now! Accelerate Your Career
                <span className="text-primary-600"> Online Courses</span>
              </h1>
            </div>

            <p ref={addToRefs} className="body-lg text-gray-600 opacity-0 delay-100 max-w-xl">
              Gain practical, job-ready skills through industry-aligned courses with hands-on learning. Learn from top experts to stay current with the latest trends. Receive holistic career support and personalized guidance to achieve your goals.
            </p>

            <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 opacity-0 delay-200">
              <Button
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                onClick={() => setFormOpen(true)}
              >
                Talk to an Expert
              </Button>
            </div>
            <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
              <DynamicForm
                fields={formFields}
                initialValues={{
                  ga_client_id: 'auto-fetch-or-from-cookie',
                  business_unit: 'Odinschool'
                }}

                onSubmit={(data)=>{
                  handleFormSubmit(data)
                  
                }}

              />

            </Modal>

            <div ref={addToRefs} className="grid grid-cols-3 gap-4 pt-4 opacity-0 delay-300">
              {[
                {
                  icon: <Code size={20} className="text-primary-600" />,
                  label: '100+ Courses',
                  description: 'Wide variety of topics'
                },
                {
                  icon: <Trophy size={20} className="text-primary-600" />,
                  label: 'Expert Instructors',
                  description: 'Learn from the best'
                },
                {
                  icon: <Cpu size={20} className="text-primary-600" />,
                  label: 'Hands-on Projects',
                  description: 'Build your portfolio'
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-3">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={addToRefs} className="wrap opacity-0 delay-200">
            <div>
              <div className="flex gap-8 items-end justify-center flex-row ">
                <img
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79 "
                  alt="Student 1"
                  className="rounded-full w-80 h-80 object-cover"
                />

                <img
                  src="https://strapi.odinschool.com/uploads/image2_7ce09bafd6.webp"
                  alt="Student 2"
                  className="rounded-3xl w-40 h-40 object-cover"
                />
              </div>
              <div className="flex gap-10 items-top justify-center flex-direction:row mt-8">
                <img

                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                  alt="Student 3"
                  className="rounded-3xl w-40 h-40 object-cover"
                />

                <img
                  src="https://strapi.odinschool.com/uploads/image4_451d402ddc.webp"
                  alt="Student 4"
                  className="rounded-full w-80 h-80 object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-0 -right-6 w-28 h-28 rounded-full bg-primary-100 z-0"></div>
            <div className="absolute -top-0 -left-0 w-20 h-20 rounded-full bg-primary-100 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
