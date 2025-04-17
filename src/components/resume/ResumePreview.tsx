
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
    <div className="p-8 bg-white shadow-inner min-h-[900px]">
      {!hasPersonalData ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <p className="text-xl mb-4">Resume Preview</p>
          <p className="text-center">Start filling out your information in the Edit tab to see your resume preview here</p>
        </div>
      ) : (
        <div className="max-w-[850px] mx-auto font-sans text-gray-800">
          {/* Header with name and contact info */}
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold mb-2">
              {`${personal.firstName} ${personal.lastName}`}
            </h1>
            
            <div className="text-sm flex flex-wrap justify-center gap-x-4 gap-y-1">
              {personal.email && (
                <span>{personal.email}</span>
              )}
              {personal.phone && (
                <span>{personal.phone}</span>
              )}
              {personal.address && (
                <span>{personal.address}</span>
              )}
              {personal.linkedin && (
                <span>{personal.linkedin}</span>
              )}
              {personal.github && (
                <span>{personal.github}</span>
              )}
            </div>
          </header>

          {/* Professional Summary */}
          {personal.objective && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">Professional Summary</h2>
              <p className="text-sm">{personal.objective}</p>
            </section>
          )}
          
          {/* Education */}
          {education.some(edu => edu.institution) && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">Education</h2>
              {education.filter(edu => edu.institution).map((edu, index) => (
                <div key={edu.id} className={`${index > 0 ? 'mt-4' : ''}`}>
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
                    <p className="text-sm mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}
          
          {/* Experience */}
          {experience.some(exp => exp.company) && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">Experience</h2>
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
                    <p className="text-sm mt-1">{exp.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}
          
          {/* Skills */}
          {skills.some(skill => skill.name) && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => skill.name).map(skill => (
                  <span 
                    key={skill.id} 
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
          
          {/* Projects */}
          {projects.some(project => project.name) && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h2>
              {projects.filter(project => project.name).map((project, index) => (
                <div key={project.id} className={`${index > 0 ? 'mt-4' : ''}`}>
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
                  <p className="text-sm mt-1">{project.description}</p>
                </div>
              ))}
            </section>
          )}
          
          {/* Certifications */}
          {certifications.some(cert => cert.name) && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">Certifications</h2>
              {certifications.filter(cert => cert.name).map((cert, index) => (
                <div key={cert.id} className={`${index > 0 ? 'mt-3' : ''} flex justify-between`}>
                  <div>
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm">{cert.issuer}</p>
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
