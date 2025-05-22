import React from 'react';
import { ResumeData } from '@/types/resume';

/* ------------------------------------------------------------------ *
 *  Central style map – every Tailwind class from the original file
 *  has been translated to a plain-CSS-in-JS object here.
 * ------------------------------------------------------------------ */
const styles = {
  /* layout & wrappers */
  container: {
    padding: '2rem',                         // p-8
    backgroundColor: '#ffffff',              // bg-white
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,.06)', // shadow-inner
    minHeight: '900px',
    position: 'relative',
  },
  emptyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',                          // h-full
    color: '#9ca3af',                        // text-gray-400
  },
  emptyTitle: { fontSize: '1.25rem', marginBottom: '1rem' }, // text-xl mb-4
  emptyText: { textAlign: 'center' },

  content: {
    maxWidth: '850px',
    margin: '0 auto',                        // mx-auto
    fontFamily:
      'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif',
    color: '#1f2937',                        // text-gray-800
    position: 'relative',
  },
  previewLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: '0.75rem',                     // text-xs
    color: '#9ca3af',                        // text-gray-400
    fontStyle: 'italic',
  },

  /* header */
  header: {
    marginBottom: '1.5rem',                  // mb-6
    borderBottom: '1px solid #e5e7eb',       // border-b
    paddingBottom: '1rem',                   // pb-4
  },
  name: {
    fontSize: '1.875rem',                    // text-3xl
    lineHeight: '2.25rem',
    fontWeight: 700,                         // font-bold
    marginBottom: '0.75rem',                 // mb-3
    color: '#1d4ed8',                        // text-primary-700 (blue-700)
  },
  contactWrapper: {
    display: 'flex',
    flexWrap: 'wrap',                        // flex flex-wrap
    columnGap: '1rem',                       // gap-x-4
    rowGap: '0.25rem',                       // gap-y-1
    fontSize: '0.875rem',                    // text-sm
    color: '#4b5563',                        // text-gray-600
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: '14px',                          // h-3.5
    width: '14px',                           // w-3.5
    marginRight: '0.25rem',                  // mr-1
  },

  /* repeated section block */
  section: { marginBottom: '1.25rem' },      // mb-5
  sectionHeading: {
    fontSize: '1.125rem',                    // text-lg
    fontWeight: 600,                         // font-semibold
    color: '#1d4ed8',                        // text-primary-700
    borderBottom: '1px solid #e5e7eb',       // border-b
    paddingBottom: '0.25rem',                // pb-1
    marginBottom: '0.5rem',                  // mb-2
  },

  /* text helpers */
  textSm: { fontSize: '0.875rem' },          // text-sm
  textSmGray: { fontSize: '0.875rem', color: '#4b5563' },
  leadRelaxed: { lineHeight: 1.625 },        // leading-relaxed
  fontMedium: { fontWeight: 500 },
  marginTop1: { marginTop: '0.25rem' },      // mt-1
  marginTop3: { marginTop: '0.75rem' },      // mt-3
  marginTop4: { marginTop: '1rem' },         // mt-4

  flexBetweenStart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  /* skills chip */
  skillsWrapper: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }, // gap-2
  skillChip: {
    backgroundColor: '#f3f4f6',              // bg-gray-100
    color: '#1f2937',                        // text-gray-800
    padding: '0.25rem 0.75rem',              // py-1 px-3
    borderRadius: '9999px',                  // rounded-full
    fontSize: '0.875rem',
  },

  /* link */
  link: { color: '#2563eb', fontSize: '0.875rem', textDecoration: 'none' }, // text-primary-600
  linkHover: { textDecoration: 'underline' }, // hover:underline (handled inline onMouseOver)

} as const;

/* ------------------------------------------------------------------ *
 *  Component
 * ------------------------------------------------------------------ */
interface ResumePreviewProps {
  resumeData: ResumeData;
  resumePreviewRef: React.RefObject<HTMLDivElement>;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  resumeData,
  resumePreviewRef,
}) => {
  const { personal, education, experience, skills, projects, certifications } =
    resumeData;

  const hasPersonalData = personal.firstName || personal.lastName;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  /* helper to merge base + conditional margin-top */
  const maybeMt = (idx: number, styleObj: React.CSSProperties) =>
    idx > 0 ? { ...styleObj } : undefined;

  return (
    <div style={styles.container} ref={resumePreviewRef}>
      {!hasPersonalData ? (
        <div style={styles.emptyWrapper}>
          <p style={styles.emptyTitle}>Resume Preview</p>
          <p style={styles.emptyText}>
            Start filling out your information in the Edit form to see your
            resume preview
          </p>
        </div>
      ) : (
        <div style={styles.content}>
          <div style={styles.previewLabel}>Preview Mode</div>

          {/* ------------------------------------------------- Header */}
          <header style={styles.header}>
            <h1 style={styles.name}>
              {`${personal.firstName} ${personal.lastName}`}
            </h1>

            <div style={styles.contactWrapper}>
              {personal.email && (
                <span style={styles.contactItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.icon}
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {personal.email}
                </span>
              )}

              {personal.phone && (
                <span style={styles.contactItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.icon}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {personal.phone}
                </span>
              )}

              {personal.address && (
                <span style={styles.contactItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.icon}
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {personal.address}
                </span>
              )}

              {personal.linkedin && (
                <span style={styles.contactItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.icon}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {personal.linkedin}
                </span>
              )}

              {personal.github && (
                <span style={styles.contactItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={styles.icon}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  {personal.github}
                </span>
              )}
            </div>
          </header>

          {/* ------------------------------------------------- Summary */}
          {personal.objective && (
            <section style={styles.section}>
              <h2 style={styles.sectionHeading}>Professional Summary</h2>
              <p style={{ ...styles.textSm, ...styles.leadRelaxed }}>
                {personal.objective}
              </p>
            </section>
          )}

          {/* ------------------------------------------------- Education */}
          {education.some((e) => e.institution) && (
            <section style={styles.section}>
              <h2 style={styles.sectionHeading}>Education</h2>

              {education
                .filter((e) => e.institution)
                .map((edu, idx) => (
                  <div key={edu.id} style={maybeMt(idx, styles.marginTop3)}>
                    <div style={styles.flexBetweenStart}>
                      <div>
                        <h3 style={styles.fontMedium}>{edu.institution}</h3>
                        <p style={styles.textSm}>
                          {edu.degree}
                          {edu.field ? `, ${edu.field}` : ''}
                        </p>
                      </div>
                      <div style={{ ...styles.textSm, textAlign: 'right' }}>
                        {edu.location && <div>{edu.location}</div>}
                        <div>
                          {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                        </div>
                      </div>
                    </div>
                    {edu.description && (
                      <p
                        style={{
                          ...styles.textSmGray,
                          ...styles.marginTop1,
                        }}
                      >
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
            </section>
          )}

          {/* ------------------------------------------------- Experience */}
          {experience.some((e) => e.company) && (
            <section style={styles.section}>
              <h2 style={styles.sectionHeading}>Experience</h2>

              {experience
                .filter((e) => e.company)
                .map((exp, idx) => (
                  <div key={exp.id} style={maybeMt(idx, styles.marginTop4)}>
                    <div style={styles.flexBetweenStart}>
                      <div>
                        <h3 style={styles.fontMedium}>{exp.company}</h3>
                        <p style={{ ...styles.textSm, ...styles.fontMedium }}>
                          {exp.position}
                        </p>
                      </div>
                      <div style={{ ...styles.textSm, textAlign: 'right' }}>
                        {exp.location && <div>{exp.location}</div>}
                        <div>
                          {formatDate(exp.startDate)} –{' '}
                          {exp.current
                            ? 'Present'
                            : formatDate(exp.endDate)}
                        </div>
                      </div>
                    </div>
                    {exp.description && (
                      <p
                        style={{
                          ...styles.textSmGray,
                          ...styles.marginTop1,
                        }}
                      >
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
            </section>
          )}

          {/* ------------------------------------------------- Skills */}
          {skills.some((s) => s.name) && (
            <section style={styles.section}>
              <h2 style={styles.sectionHeading}>Skills</h2>
              <div style={styles.skillsWrapper}>
                {skills
                  .filter((s) => s.name)
                  .map((skill) => (
                    <span key={skill.id} style={styles.skillChip}>
                      {skill.name}
                    </span>
                  ))}
              </div>
            </section>
          )}

          {/* ------------------------------------------------- Projects */}
          {projects.some((p) => p.name) && (
            <section style={styles.section}>
              <h2 style={styles.sectionHeading}>Projects</h2>

              {projects
                .filter((p) => p.name)
                .map((project, idx) => (
                  <div key={project.id} style={maybeMt(idx, styles.marginTop3)}>
                    <div style={styles.flexBetweenStart}>
                      <h3 style={styles.fontMedium}>{project.name}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.link}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.textDecoration =
                              styles.linkHover.textDecoration)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.textDecoration = 'none')
                          }
                        >
                          View Project
                        </a>
                      )}
                    </div>
                    <p
                      style={{
                        ...styles.textSmGray,
                        ...styles.marginTop1,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                ))}
            </section>
          )}

          {/* ------------------------------------------------- Certifications */}
          {certifications.some((c) => c.name) && (
            <section style={styles.section}>
              <h2 style={styles.sectionHeading}>Certifications</h2>

              {certifications
                .filter((c) => c.name)
                .map((cert, idx) => (
                  <div
                    key={cert.id}
                    style={{
                      ...styles.flexBetweenStart,
                      ...maybeMt(idx, styles.marginTop3),
                    }}
                  >
                    <div>
                      <h3 style={styles.fontMedium}>{cert.name}</h3>
                      <p style={styles.textSmGray}>{cert.issuer}</p>
                    </div>
                    <div style={{ ...styles.textSm, textAlign: 'right' }}>
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
