
import React from 'react';
import { ArrowRight, DollarSign, TrendingUp, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { jobRoles, experienceLevels, educationLevels, locations, formatCurrency } from '@/utils/salaryUtils';
import { Button } from '@/components/ui/button';
import { type SalaryFormValues } from './SalaryForm';

interface SalaryResultProps {
  formData: SalaryFormValues;
  result: {
    base: number;
    adjusted: number;
    breakdown: {
      baseSalary: number;
      experienceAdjustment: number;
      educationAdjustment: number;
      locationAdjustment: number;
    };
  };
  onRecalculate: () => void;
}

const SalaryResult = ({ formData, result, onRecalculate }: SalaryResultProps) => {
  // Get the title values based on the selected IDs
  const jobRole = jobRoles.find(role => role.id === formData.jobRole)?.title || '';
  const experienceLevel = experienceLevels.find(level => level.id === formData.experienceLevel)?.title || '';
  const educationLevel = educationLevels.find(level => level.id === formData.educationLevel)?.title || '';
  const location = locations.find(loc => loc.id === formData.location)?.title || '';
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="heading-lg mb-2">Your Estimated Salary</h2>
        <p className="text-gray-600">Based on your professional profile and market data</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-primary-50 rounded-lg p-6 text-center">
          <p className="text-gray-500 mb-2">Estimated Annual Salary</p>
          <div className="flex items-center justify-center">
            <DollarSign className="h-8 w-8 text-primary-600 mr-1" />
            <span className="text-4xl font-bold text-primary-700">{formatCurrency(result.adjusted)}</span>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Salary Breakdown</CardTitle>
          <CardDescription>How we calculated your estimated salary</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Base Salary for {jobRole}</span>
            <span className="font-medium">{formatCurrency(result.breakdown.baseSalary)}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-gray-600">Experience ({experienceLevel})</span>
            </div>
            <span className={result.breakdown.experienceAdjustment >= 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
              {result.breakdown.experienceAdjustment >= 0 ? "+" : ""}{formatCurrency(result.breakdown.experienceAdjustment)}
            </span>
          </div>
          
          <div className="flex justify-between py-2 border-b">
            <div className="flex items-center">
              <GraduationCap className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-600">Education ({educationLevel})</span>
            </div>
            <span className={result.breakdown.educationAdjustment >= 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
              {result.breakdown.educationAdjustment >= 0 ? "+" : ""}{formatCurrency(result.breakdown.educationAdjustment)}
            </span>
          </div>
          
          <div className="flex justify-between py-2 border-b">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-gray-600">Location ({location})</span>
            </div>
            <span className={result.breakdown.locationAdjustment >= 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
              {result.breakdown.locationAdjustment >= 0 ? "+" : ""}{formatCurrency(result.breakdown.locationAdjustment)}
            </span>
          </div>
          
          <div className="flex justify-between pt-4 font-semibold">
            <span>Total Estimated Salary</span>
            <span>{formatCurrency(result.adjusted)}</span>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Button variant="outline" onClick={onRecalculate}>
          Recalculate with Different Inputs
        </Button>
      </div>

      <div className="text-gray-500 text-sm text-center mt-6">
        <p>This calculation is an estimate based on industry averages and may vary by company, skills, and other factors.</p>
      </div>
    </div>
  );
};

export default SalaryResult;
