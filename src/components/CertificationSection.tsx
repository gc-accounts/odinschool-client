
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookCheck, BadgeCheck } from 'lucide-react';

const CertificationSection = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary-600" />,
      title: "Industry Recognition",
      description: "Microsoft's PL-300 certification is globally recognized and validates your expertise in Power BI data analysis."
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: "Career Advancement",
      description: "Stand out to employers and unlock new job opportunities with higher salary potential in the growing field of data analytics."
    },
    {
      icon: <BookCheck className="h-10 w-10 text-primary-600" />,
      title: "Practical Skills",
      description: "Master real-world data analysis techniques, visualization best practices, and data modeling used by industry professionals."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />,
      title: "Comprehensive Learning",
      description: "Our structured curriculum covers all exam objectives while focusing on practical applications you can use immediately."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll opacity-0">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200 px-3 py-1 text-sm">
              Microsoft Certification
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
              Why Get <span className="text-primary-600">PL-300 Certified</span> with CodeMaster?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              The Microsoft PL-300 certification validates your ability to analyze data with Power BI. Our specialized training program prepares you for success on the exam while building practical skills employers demand.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                View PL-300 Course
                <GraduationCap className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Certification
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-primary-100 bg-white hover:shadow-lg transition-shadow duration-300 animate-on-scroll opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm animate-on-scroll opacity-0">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">PL-300 Certification Journey</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured learning path takes you from beginner to certified professional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Foundations", description: "Learn Power BI basics and data concepts" },
              { step: "2", title: "Data Modeling", description: "Master relationships and DAX formulas" },
              { step: "3", title: "Visualization", description: "Create impactful reports and dashboards" },
              { step: "4", title: "Certification", description: "Pass your exam with confidence" }
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
                </div>
                {index < 3 && (
                  <div className="absolute top-6 left-[50%] w-full h-0.5 bg-primary-200 hidden md:block"></div>
                )}
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
