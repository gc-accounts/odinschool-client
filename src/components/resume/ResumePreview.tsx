
import React from 'react';
import { ResumeData } from '@/types/resume';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  const { personal, education, experience, skills, projects, certifications } = resumeData;
  
  // Check if we have actual data to display
  const hasPersonalData = personal.firstName || personal.lastName;
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="p-8 bg-white shadow-inner min-h-[900px] relative">
      {!hasPersonalData ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <p className="text-xl mb-4">Resume Preview</p>
          <p className="text-center">Start filling out your information in the Edit form to see your resume preview</p>
        </div>
      ) : (
        <div className="max-w-[850px] mx-auto font-sans text-gray-800 relative">
          <div className="absolute top-0 right-0 text-xs text-gray-400 italic">
            Preview Mode
          </div>
          
          {/* Header with name and contact info */}
          <header className="mb-6 border-b pb-4">
            <h1 className="text-3xl font-bold mb-3 text-primary-700">
              {`${personal.firstName} ${personal.lastName}`}
            </h1>
            
            <div className="text-sm flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
              {personal.email && (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {personal.email}
                </span>
              )}
              {personal.phone && (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {personal.phone}
                </span>
              )}
              {personal.address && (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  {personal.address}
                </span>
              )}
              {personal.linkedin && (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  {personal.linkedin}
                </span>
              )}
              {personal.github && (
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  {personal.github}
                </span>
              )}
            </div>
          </header>

          {/* Professional Summary */}
          {personal.objective && (
            <section className="mb-5">
              <h2 className="text-lg font-semibold text-primary-700 border-b pb-1 mb-2">Professional Summary</h2>
              <p className="text-sm leading-relaxed">{personal.objective}</p>
            </section>
          )}
          
          {/* Education */}
          {education.some(edu => edu.institution) && (
            <section className="mb-5">
              <h2 className="text-lg font-semibold text-primary-700 border-b pb-1 mb-2">Education</h2>
              {education.filter(edu => edu.institution).map((edu, index) => (
                <div key={edu.id} className={`${index > 0 ? 'mt-3' : ''}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{edu.institution}</h3>
                      <p className="text-sm">
                        {edu.degree}{edu.field ? `, ${edu.field}` : ''}
                      </p>
                    </div>
                    <div className="text-sm text-right">
                      {edu.location && <div>{edu.location}</div>}
                      <div>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-sm mt-1 text-gray-600">{edu.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}
          
          {/* Experience */}
          {experience.some(exp => exp.company) && (
            <section className="mb-5">
              <h2 className="text-lg font-semibold text-primary-700 border-b pb-1 mb-2">Experience</h2>
              {experience.filter(exp => exp.company).map((exp, index) => (
                <div key={exp.id} className={`${index > 0 ? 'mt-4' : ''}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{exp.company}</h3>
                      <p className="text-sm font-medium">{exp.position}</p>
                    </div>
                    <div className="text-sm text-right">
                      {exp.location && <div>{exp.location}</div>}
                      <div>
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </div>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm mt-1 text-gray-600">{exp.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}
          
          {/* Skills */}
          {skills.some(skill => skill.name) && (
            <section className="mb-5">
              <h2 className="text-lg font-semibold text-primary-700 border-b pb-1 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => skill.name).map(skill => (
                  <span 
                    key={skill.id} 
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.some(project => project.name) && (
            <section className="mb-5">
              <h2 className="text-lg font-semibold text-primary-700 border-b pb-1 mb-2">Projects</h2>
              {projects.filter(project => project.name).map((project, index) => (
                <div key={project.id} className={`${index > 0 ? 'mt-3' : ''}`}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{project.name}</h3>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-600 text-sm hover:underline"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  <p className="text-sm mt-1 text-gray-600">{project.description}</p>
                </div>
              ))}
            </section>
          )}
          
          {/* Certifications */}
          {certifications.some(cert => cert.name) && (
            <section className="mb-5">
              <h2 className="text-lg font-semibold text-primary-700 border-b pb-1 mb-2">Certifications</h2>
              {certifications.filter(cert => cert.name).map((cert, index) => (
                <div key={cert.id} className={`${index > 0 ? 'mt-3' : ''} flex justify-between`}>
                  <div>
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <div className="text-sm text-right">
                    {formatDate(cert.date)}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
