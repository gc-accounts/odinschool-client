
import React, { useEffect, useState } from 'react';
import { Calculator } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import SalaryForm, { SalaryFormValues } from '@/components/components/salary/SalaryForm';
import SalaryResult from '@/components/components/salary/SalaryResult';
import { calculateSalary } from '@/components/utils/salaryUtils';
import { toast } from '@/components/hooks/use-toast';
import FeaturedCourses from '@/components/components/FeaturedCourses';
import Testimonials from '@/components/components/Testimonials';

const SalaryCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState<SalaryFormValues | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = (values: SalaryFormValues) => {
    setIsCalculating(true);
    setFormData(values);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      try {
        const calculatedResult = calculateSalary(
          values.jobRole,
          values.experienceLevel,
          values.educationLevel,
          values.location
        );
        
        setResult(calculatedResult);
        setShowResults(true);
        toast({
          title: "Calculation Complete",
          description: "Your estimated salary has been calculated successfully.",
        });
      } catch (error) {
        toast({
          title: "Calculation Error",
          description: "There was an error calculating your salary. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsCalculating(false);
      }
    }, 1200); // Simulate calculation time
  };

  const handleRecalculate = () => {
    setShowResults(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Calculator className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              Salary Calculator
            </h1>
            <p className="text-lg text-center max-w-2xl mx-auto text-slate-300">
              Estimate your market value based on your job role, experience, education and location.
            </p>

          </div>
        </section>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            {!showResults ? (
              <>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold mb-2">Enter Your Details</h2>
                  <p className="text-gray-600">
                    Fill in the form below to get an estimated salary range for your profile.
                  </p>
                </div>
                <SalaryForm onSubmit={handleCalculate} isLoading={isCalculating} />
              </>
            ) : (
              formData && result && (
                <SalaryResult 
                  formData={formData} 
                  result={result}
                  onRecalculate={handleRecalculate}
                />
              )
            )}
          </div>
        </div>
      </main>
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </>
  );
};

export default SalaryCalculator;
