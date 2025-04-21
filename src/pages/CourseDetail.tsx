import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseById } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobOpportunities from '@/components/JobOpportunities';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || '');

  if (!course) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Course not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{course.title}</h1>
              <p className="mt-4 text-lg text-gray-600">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div>
                  <span className="text-sm text-gray-500">Instructor</span>
                  <p className="font-medium">{course.instructor}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Level</span>
                  <p className="font-medium">{course.level}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Duration</span>
                  <p className="font-medium">{course.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Lessons</span>
                  <p className="font-medium">{course.lessons} lessons</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">Enroll Now</Button>
                <Button variant="outline" size="lg">Watch Preview</Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <div className="prose max-w-none">
                  <p>{course.fullDescription || course.description}</p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {course.learningObjectives?.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{objective}</span>
                      </li>
                    )) || (
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Master {course.title} concepts and techniques</span>
                      </li>
                    )}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites?.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{prerequisite}</span>
                      </li>
                    )) || (
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Basic understanding of the subject</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Price</h4>
                    <div className="flex items-baseline mt-1">
                      {course.sale ? (
                        <>
                          <span className="text-2xl font-bold text-gray-900">${course.salePrice}</span>
                          <span className="ml-2 text-lg text-gray-500 line-through">${course.price}</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <p className="mt-1">{course.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Skills You'll Gain</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {course.skills?.map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {skill}
                        </span>
                      )) || course.tags?.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Certificate</h4>
                    <p className="mt-1">{course.certificate ? 'Yes, upon completion' : 'Not included'}</p>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">Enroll Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <div className="space-y-4">
              {course.curriculum?.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                    <h3 className="font-medium">{section.title}</h3>
                    <div className="text-sm text-gray-500">
                      {section.lessons} lessons • {section.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">
                      This section covers key concepts and practical applications related to {section.title.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )) || (
                <div className="text-gray-600">
                  <p>This course includes {course.lessons} comprehensive lessons covering all aspects of {course.title}.</p>
                  <p className="mt-4">Total course duration: {course.duration}</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="instructor">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">{course.instructor.charAt(0)}</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4">{course.instructor}</h2>
                <p className="text-gray-600 mb-4">
                  Expert instructor with years of experience in {course.category}
                </p>
                <p className="text-gray-600">
                  {course.instructor} is a passionate educator and industry professional who specializes in {course.category}. 
                  With extensive experience and a talent for making complex concepts accessible, 
                  they have helped thousands of students master {course.title.toLowerCase()}.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="text-5xl font-bold">{course.rating.toFixed(1)}</div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{course.students.toLocaleString()} students</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(star => (
                      <div key={star} className="flex items-center">
                        <div className="w-16 text-sm text-gray-600">{star} stars</div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mx-2">
                          <div 
                            className="h-2 bg-yellow-400 rounded-full" 
                            style={{ 
                              width: `${star === Math.round(course.rating) ? '70%' : 
                                      star === Math.round(course.rating) + 1 || star === Math.round(course.rating) - 1 ? '20%' : '5%'}` 
                            }}
                          ></div>
                        </div>
                        <div className="w-10 text-sm text-gray-600">
                          {star === Math.round(course.rating) ? '70%' : 
                           star === Math.round(course.rating) + 1 || star === Math.round(course.rating) - 1 ? '20%' : '5%'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4">Student Feedback</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map(index => (
                    <div key={index} className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          <span className="font-medium text-gray-600">
                            {['J', 'S', 'M'][index - 1]}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">
                            {['John D.', 'Sarah M.', 'Michael K.'][index - 1]}
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {[
                          `This course exceeded my expectations. The instructor explains complex topics in a way that's easy to understand, and the practical exercises really helped solidify my knowledge.`,
                          `Great content and well-structured curriculum. I've already started applying what I learned in my current job. Highly recommended!`,
                          `Comprehensive coverage of the subject matter. The instructor is clearly knowledgeable and passionate about teaching. Worth every penny.`
                        ][index - 1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Add the JobOpportunities component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <JobOpportunities 
          courseCategory={course.category} 
          courseTitle={course.title}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
