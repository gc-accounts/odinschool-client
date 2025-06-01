
import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import { Textarea } from '@/components/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/components/ui/accordion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/components/ui/card';
import { ResumeData } from '@/types/resume';

interface ResumeFormProps {
  resumeData: ResumeData;
  updateResume: (data: Partial<ResumeData>) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ resumeData, updateResume }) => {
  // Personal Information Handlers
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateResume({
      personal: {
        ...resumeData.personal,
        [name]: value
      }
    });
  };

  // Education Handlers
  const handleAddEducation = () => {
    updateResume({
      education: [
        ...resumeData.education,
        {
          id: uuidv4(),
          institution: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          location: '',
          description: ''
        }
      ]
    });
  };

  const handleEducationChange = (id: string, field: string, value: string) => {
    updateResume({
      education: resumeData.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const handleRemoveEducation = (id: string) => {
    updateResume({
      education: resumeData.education.filter(edu => edu.id !== id)
    });
  };

  // Experience Handlers
  const handleAddExperience = () => {
    updateResume({
      experience: [
        ...resumeData.experience,
        {
          id: uuidv4(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
          location: ''
        }
      ]
    });
  };

  const handleExperienceChange = (id: string, field: string, value: any) => {
    updateResume({
      experience: resumeData.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: field === 'current' ? value : value } : exp
      )
    });
  };

  const handleRemoveExperience = (id: string) => {
    updateResume({
      experience: resumeData.experience.filter(exp => exp.id !== id)
    });
  };

  // Skills Handlers
  const handleAddSkill = () => {
    updateResume({
      skills: [
        ...resumeData.skills,
        {
          id: uuidv4(),
          name: '',
          level: 'Intermediate'
        }
      ]
    });
  };

  const handleSkillChange = (id: string, field: string, value: any) => {
    updateResume({
      skills: resumeData.skills.map(skill => 
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    });
  };

  const handleRemoveSkill = (id: string) => {
    updateResume({
      skills: resumeData.skills.filter(skill => skill.id !== id)
    });
  };

  // Projects Handlers
  const handleAddProject = () => {
    updateResume({
      projects: [
        ...resumeData.projects,
        {
          id: uuidv4(),
          name: '',
          description: '',
          url: '',
          startDate: '',
          endDate: ''
        }
      ]
    });
  };

  const handleProjectChange = (id: string, field: string, value: string) => {
    updateResume({
      projects: resumeData.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    });
  };

  const handleRemoveProject = (id: string) => {
    updateResume({
      projects: resumeData.projects.filter(project => project.id !== id)
    });
  };

  // Certifications Handlers
  const handleAddCertification = () => {
    updateResume({
      certifications: [
        ...resumeData.certifications,
        {
          id: uuidv4(),
          name: '',
          issuer: '',
          date: '',
          url: ''
        }
      ]
    });
  };

  const handleCertificationChange = (id: string, field: string, value: string) => {
    updateResume({
      certifications: resumeData.certifications.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    });
  };

  const handleRemoveCertification = (id: string) => {
    updateResume({
      certifications: resumeData.certifications.filter(cert => cert.id !== id)
    });
  };

  return (
    <div className="p-6">
      <Accordion type="single" collapsible defaultValue="personal" className="space-y-4">
        {/* Personal Information */}
        <AccordionItem value="personal" className="border rounded-md">
          <AccordionTrigger className="px-4">Personal Information</AccordionTrigger>
          <AccordionContent className="p-4 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <Input
                  name="firstName"
                  value={resumeData.personal.firstName}
                  onChange={handlePersonalChange}
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <Input
                  name="lastName"
                  value={resumeData.personal.lastName}
                  onChange={handlePersonalChange}
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={resumeData.personal.email}
                  onChange={handlePersonalChange}
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input
                  name="phone"
                  value={resumeData.personal.phone}
                  onChange={handlePersonalChange}
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <Input
                  name="address"
                  value={resumeData.personal.address}
                  onChange={handlePersonalChange}
                  placeholder="123 Main St, City, State, Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (optional)</label>
                <Input
                  name="linkedin"
                  value={resumeData.personal.linkedin || ''}
                  onChange={handlePersonalChange}
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GitHub (optional)</label>
                <Input
                  name="github"
                  value={resumeData.personal.github || ''}
                  onChange={handlePersonalChange}
                  placeholder="github.com/johndoe"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                <Textarea
                  name="objective"
                  value={resumeData.personal.objective || ''}
                  onChange={handlePersonalChange}
                  placeholder="A brief overview of your professional background and career goals"
                  rows={4}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education */}
        <AccordionItem value="education" className="border rounded-md">
          <AccordionTrigger className="px-4">Education</AccordionTrigger>
          <AccordionContent className="p-4 pt-2">
            {resumeData.education.map((edu, index) => (
              <Card key={edu.id} className="mb-4">
                <CardHeader className="flex flex-row items-center justify-between py-3">
                  <CardTitle className="text-md">Education #{index + 1}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveEducation(edu.id)}
                    disabled={resumeData.education.length <= 1}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                        placeholder="University of Example"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                        placeholder="Bachelor of Science"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                      <Input
                        value={edu.field}
                        onChange={(e) => handleEducationChange(edu.id, 'field', e.target.value)}
                        placeholder="Computer Science"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <Input
                        value={edu.location || ''}
                        onChange={(e) => handleEducationChange(edu.id, 'location', e.target.value)}
                        placeholder="City, Country"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <Input
                        type="date"
                        value={edu.startDate}
                        onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <Input
                        type="date"
                        value={edu.endDate}
                        onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description (optional)</label>
                      <Textarea
                        value={edu.description || ''}
                        onChange={(e) => handleEducationChange(edu.id, 'description', e.target.value)}
                        placeholder="Relevant coursework, achievements, etc."
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              onClick={handleAddEducation} 
              className="w-full mt-2"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Experience */}
        <AccordionItem value="experience" className="border rounded-md">
          <AccordionTrigger className="px-4">Experience</AccordionTrigger>
          <AccordionContent className="p-4 pt-2">
            {resumeData.experience.map((exp, index) => (
              <Card key={exp.id} className="mb-4">
                <CardHeader className="flex flex-row items-center justify-between py-3">
                  <CardTitle className="text-md">Experience #{index + 1}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveExperience(exp.id)}
                    disabled={resumeData.experience.length <= 1}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <Input
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                        placeholder="Example Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <Input
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <Input
                        type="date"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <Input
                        type="date"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                        disabled={exp.current}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <Input
                        value={exp.location || ''}
                        onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                        placeholder="City, Country"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                        placeholder="Describe your responsibilities and achievements"
                        rows={4}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              onClick={handleAddExperience} 
              className="w-full mt-2"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Experience
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem value="skills" className="border rounded-md">
          <AccordionTrigger className="px-4">Skills</AccordionTrigger>
          <AccordionContent className="p-4 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center space-x-2">
                  <Input
                    value={skill.name}
                    onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
                    placeholder="Skill name"
                    className="flex-grow"
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveSkill(skill.id)}
                    disabled={resumeData.skills.length <= 1}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={handleAddSkill} 
              className="w-full mt-4"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Projects */}
        <AccordionItem value="projects" className="border rounded-md">
          <AccordionTrigger className="px-4">Projects</AccordionTrigger>
          <AccordionContent className="p-4 pt-2">
            {resumeData.projects.map((project, index) => (
              <Card key={project.id} className="mb-4">
                <CardHeader className="flex flex-row items-center justify-between py-3">
                  <CardTitle className="text-md">Project #{index + 1}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveProject(project.id)}
                    disabled={resumeData.projects.length <= 1}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                      <Input
                        value={project.name}
                        onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)}
                        placeholder="Project Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">URL (optional)</label>
                      <Input
                        value={project.url || ''}
                        onChange={(e) => handleProjectChange(project.id, 'url', e.target.value)}
                        placeholder="https://example.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                        placeholder="Describe your project, technologies used, and your role"
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              onClick={handleAddProject} 
              className="w-full mt-2"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </AccordionContent>
        </AccordionItem>

        {/* Certifications */}
        <AccordionItem value="certifications" className="border rounded-md">
          <AccordionTrigger className="px-4">Certifications</AccordionTrigger>
          <AccordionContent className="p-4 pt-2">
            {resumeData.certifications.map((cert, index) => (
              <Card key={cert.id} className="mb-4">
                <CardHeader className="flex flex-row items-center justify-between py-3">
                  <CardTitle className="text-md">Certification #{index + 1}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveCertification(cert.id)}
                    disabled={resumeData.certifications.length <= 1}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Name</label>
                      <Input
                        value={cert.name}
                        onChange={(e) => handleCertificationChange(cert.id, 'name', e.target.value)}
                        placeholder="AWS Certified Solutions Architect"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
                      <Input
                        value={cert.issuer}
                        onChange={(e) => handleCertificationChange(cert.id, 'issuer', e.target.value)}
                        placeholder="Amazon Web Services"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                      <Input
                        type="date"
                        value={cert.date}
                        onChange={(e) => handleCertificationChange(cert.id, 'date', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">URL (optional)</label>
                      <Input
                        value={cert.url || ''}
                        onChange={(e) => handleCertificationChange(cert.id, 'url', e.target.value)}
                        placeholder="https://example.com/verify"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              onClick={handleAddCertification} 
              className="w-full mt-2"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Certification
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeForm;
