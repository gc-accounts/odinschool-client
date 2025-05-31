
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRight, Code, Cpu, Trophy,LaptopMinimalCheck, BookOpenText, BriefcaseBusiness } from 'lucide-react';
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
  pattern: {
    value: /^[0-9]{10}$/, // exactly 10 digits
    message: 'Phone number must be exactly 10 digits (numbers only)',
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
    <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-8">
            <div ref={addToRefs} className="opacity-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 mb-6">
                <span className="text-xs font-medium">Master In-Demand Tech Skills. Get Job-Ready.</span>
              </div>
              <h1 className="heading-xl text-balance">
                Upskill Now! 
                <span className="text-primary-600">Accelerate Your Career</span>
              </h1>
            </div>

            <p ref={addToRefs} className="text-gray-600 opacity-0 delay-100 max-w-xl">
              Learn job-ready tech skills through expert-led online bootcamps. OdinSchool empowers you to upskill, build projects, and unlock top career opportunities.
            </p>

            <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 opacity-0 delay-200">
              <Button
                size="lg"
                icon={<ArrowRight className='ml-1' size={18} />}
                iconPosition="right"
                onClick={() => setFormOpen(true)}
              >
                Talk to an Expert
              </Button>
            </div>
            <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
              <DynamicForm
                buttonText={'Request Callback'}
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
                  icon: <LaptopMinimalCheck size={20} className="text-primary-600" />,
                  label: 'In-Demand Bootcamps',
                  description: 'Curated programs built for tech careers'
                },
                {
                  icon: <BookOpenText size={20} className="text-primary-600" />,
                  label: 'Elite Programs',
                  description: 'Focused learning paths with high career ROI'
                },
                {
                  icon: <BriefcaseBusiness size={20} className="text-primary-600" />,
                  label: 'Job-Ready Curriculum',
                  description: 'Learn what the industry actually needs'
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
                  src="https://strapi.odinschool.com/uploads/image1_5d9dce47c3.webp"
                  alt="Student 1"
                  className="rounded-full w-60 h-60 object-cover"
                />

                <img
                  src="https://strapi.odinschool.com/uploads/image2_7ce09bafd6.webp"
                  alt="Student 2"
                  className="rounded-3xl w-40 h-40 object-cover"
                />
              </div>
              <div className="flex gap-10 items-top justify-center flex-direction:row mt-8">
                <img

                  src="https://strapi.odinschool.com/uploads/image3_03b46926bd.webp"
                  alt="Student 3"
                  className="rounded-3xl w-40 h-40 object-cover"
                />

                <img
                  src="https://strapi.odinschool.com/uploads/image4_451d402ddc.webp"
                  alt="Student 4"
                  className="rounded-full w-60 h-60 object-cover"
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
