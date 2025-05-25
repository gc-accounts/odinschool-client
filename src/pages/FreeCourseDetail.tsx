
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getLearningHubCourse } from '@/utils/api/learning_hub';
import Markdown from '@/components/Markdown';
// Sample lessons content 
const courseData = {
  'free-html-basics': {
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web development with this introductory HTML course.',
    level: 'Beginner',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to HTML',
        content: `
          <h2>Introduction to HTML</h2>
          <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of web content.</p>
          
          <h3>What is HTML?</h3>
          <p>HTML consists of a series of elements that you use to enclose or wrap different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink, italicize words, make the font bigger or smaller, and so on.</p>
          
          <h3>HTML Document Structure</h3>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          
          <p>This structure includes:</p>
          <ul>
            <li><strong>&lt;!DOCTYPE html&gt;</strong> - Defines the document type</li>
            <li><strong>&lt;html&gt;</strong> - The root element of an HTML page</li>
            <li><strong>&lt;head&gt;</strong> - Contains meta-information about the document</li>
            <li><strong>&lt;title&gt;</strong> - Specifies a title for the document</li>
            <li><strong>&lt;body&gt;</strong> - Contains the visible page content</li>
          </ul>
        `
      },
      {
        id: 'lesson-2',
        title: 'HTML Elements',
        content: `
          <h2>HTML Elements</h2>
          <p>HTML elements are represented by tags, which label pieces of content such as "heading", "paragraph", "table", and so on.</p>
          
          <h3>HTML Tags</h3>
          <p>HTML tags are element names surrounded by angle brackets:</p>
          <pre><code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code></pre>
          
          <h3>Common HTML Tags</h3>
          <ul>
            <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong> - Headings, with h1 being the most important</li>
            <li><strong>&lt;p&gt;</strong> - Paragraph</li>
            <li><strong>&lt;a&gt;</strong> - Anchor (hyperlink)</li>
            <li><strong>&lt;img&gt;</strong> - Image</li>
            <li><strong>&lt;ul&gt; and &lt;ol&gt;</strong> - Unordered and ordered lists</li>
            <li><strong>&lt;li&gt;</strong> - List item</li>
            <li><strong>&lt;div&gt;</strong> - Division or section</li>
            <li><strong>&lt;span&gt;</strong> - Inline container</li>
          </ul>
          
          <h3>Example: Creating a simple page</h3>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Web Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to My Page&lt;/h1&gt;
    &lt;p&gt;This is a paragraph of text.&lt;/p&gt;
    &lt;p&gt;This is &lt;strong&gt;bold text&lt;/strong&gt; and this is &lt;em&gt;italicized text&lt;/em&gt;.&lt;/p&gt;
    
    &lt;h2&gt;My Favorite Foods&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li&gt;Pizza&lt;/li&gt;
      &lt;li&gt;Ice Cream&lt;/li&gt;
      &lt;li&gt;Pasta&lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;h2&gt;Contact Me&lt;/h2&gt;
    &lt;p&gt;Visit my &lt;a href="https://example.com"&gt;website&lt;/a&gt; for more information.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        `
      },
      {
        id: 'lesson-3',
        title: 'HTML Attributes',
        content: `
          <h2>HTML Attributes</h2>
          <p>HTML attributes provide additional information about HTML elements.</p>
          
          <h3>Attributes Basics</h3>
          <ul>
            <li>All HTML elements can have attributes</li>
            <li>Attributes provide additional information about an element</li>
            <li>Attributes are always specified in the start tag</li>
            <li>Attributes usually come in name/value pairs like: name="value"</li>
          </ul>
          
          <h3>Common HTML Attributes</h3>
          <ul>
            <li><strong>href</strong> - Specifies the URL of the page the link goes to</li>
            <li><strong>src</strong> - Specifies the path to the image to be displayed</li>
            <li><strong>width, height</strong> - Specifies the width and height of an element</li>
            <li><strong>alt</strong> - Specifies an alternate text for an image</li>
            <li><strong>style</strong> - Specifies an inline CSS style for an element</li>
            <li><strong>class</strong> - Specifies a classname for an element (used for CSS)</li>
            <li><strong>id</strong> - Specifies a unique id for an element</li>
          </ul>
          
          <h3>Examples:</h3>
          <pre><code>&lt;!-- A link with the href attribute --&gt;
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;

&lt;!-- An image with attributes --&gt;
&lt;img src="image.jpg" alt="Description of image" width="500" height="300"&gt;

&lt;!-- A paragraph with style and class attributes --&gt;
&lt;p style="color:red;" class="important-text"&gt;This is a red paragraph with a class.&lt;/p&gt;

&lt;!-- A div with an id attribute --&gt;
&lt;div id="unique-section"&gt;This section has a unique ID.&lt;/div&gt;</code></pre>
        `
      },
      {
        id: 'lesson-4',
        title: 'HTML Forms',
        content: `
          <h2>HTML Forms</h2>
          <p>HTML forms are used to collect user input, typically sent to a server for processing.</p>
          
          <h3>Basic Form Structure</h3>
          <pre><code>&lt;form action="/submit-form" method="post"&gt;
  &lt;!-- Form elements go here --&gt;
&lt;/form&gt;</code></pre>
          
          <p>The <strong>action</strong> attribute defines where the form data is sent when submitted.</p>
          <p>The <strong>method</strong> attribute specifies the HTTP method (GET or POST) used to send the data.</p>
          
          <h3>Common Form Elements</h3>
          <ul>
            <li><strong>&lt;input&gt;</strong> - The most used form element with various types</li>
            <li><strong>&lt;label&gt;</strong> - Defines a label for an input element</li>
            <li><strong>&lt;select&gt;</strong> - Defines a dropdown list</li>
            <li><strong>&lt;textarea&gt;</strong> - Defines a multi-line input field</li>
            <li><strong>&lt;button&gt;</strong> - Defines a clickable button</li>
            <li><strong>&lt;fieldset&gt;</strong> - Groups related elements in a form</li>
            <li><strong>&lt;legend&gt;</strong> - Defines a caption for a fieldset element</li>
          </ul>
          
          <h3>Example: Contact Form</h3>
          <pre><code>&lt;form action="/submit-contact" method="post"&gt;
  &lt;div&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
  &lt;/div&gt;
  
  &lt;div&gt;
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
  &lt;/div&gt;
  
  &lt;div&gt;
    &lt;label for="subject"&gt;Subject:&lt;/label&gt;
    &lt;select id="subject" name="subject"&gt;
      &lt;option value="general"&gt;General Inquiry&lt;/option&gt;
      &lt;option value="support"&gt;Technical Support&lt;/option&gt;
      &lt;option value="billing"&gt;Billing Question&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  
  &lt;div&gt;
    &lt;label for="message"&gt;Message:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  
  &lt;div&gt;
    &lt;button type="submit"&gt;Send Message&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</code></pre>
        `
      },
      {
        id: 'lesson-5',
        title: 'HTML Semantic Elements',
        content: `
          <h2>HTML Semantic Elements</h2>
          <p>Semantic elements clearly describe their meaning to both the browser and the developer.</p>
          
          <h3>What are Semantic Elements?</h3>
          <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. They clearly define the content that they contain.</p>
          
          <h3>Common Semantic Elements</h3>
          <ul>
            <li><strong>&lt;header&gt;</strong> - Represents a container for introductory content or a set of navigational links</li>
            <li><strong>&lt;nav&gt;</strong> - Defines a section of navigation links</li>
            <li><strong>&lt;main&gt;</strong> - Specifies the main content of a document</li>
            <li><strong>&lt;article&gt;</strong> - Defines independent, self-contained content</li>
            <li><strong>&lt;section&gt;</strong> - Defines a section in a document</li>
            <li><strong>&lt;aside&gt;</strong> - Defines content aside from the main content (like a sidebar)</li>
            <li><strong>&lt;footer&gt;</strong> - Defines a footer for a document or section</li>
            <li><strong>&lt;figure&gt;</strong> - Specifies self-contained content, like illustrations, diagrams, photos, etc.</li>
            <li><strong>&lt;figcaption&gt;</strong> - Defines a caption for a &lt;figure&gt; element</li>
          </ul>
          
          <h3>Example: Semantic HTML Page Structure</h3>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Semantic HTML Example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
      &lt;h1&gt;My Website&lt;/h1&gt;
      &lt;nav&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Services&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
      &lt;section&gt;
        &lt;h2&gt;Welcome to Our Site&lt;/h2&gt;
        &lt;p&gt;This is the main content area of our website.&lt;/p&gt;
      &lt;/section&gt;
      
      &lt;article&gt;
        &lt;h2&gt;Article Title&lt;/h2&gt;
        &lt;p&gt;This is a standalone article with independent, self-contained content.&lt;/p&gt;
        
        &lt;figure&gt;
          &lt;img src="image.jpg" alt="Description"&gt;
          &lt;figcaption&gt;Figure 1: An example image&lt;/figcaption&gt;
        &lt;/figure&gt;
      &lt;/article&gt;
      
      &lt;aside&gt;
        &lt;h3&gt;Related Links&lt;/h3&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;Related Article 1&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Related Article 2&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
      &lt;p&gt;&copy; 2023 My Website. All rights reserved.&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          
          <h3>Benefits of Semantic HTML</h3>
          <ul>
            <li>Improved accessibility for screen readers and other assistive technologies</li>
            <li>Better SEO (Search Engine Optimization)</li>
            <li>More maintainable code that's easier to understand</li>
            <li>Clearer structure to your HTML document</li>
          </ul>
        `
      }
    ],
    resources: [
      { name: "HTML Cheat Sheet", type: "PDF", size: "1.2 MB" },
      { name: "HTML Exercise Files", type: "ZIP", size: "0.8 MB" }
    ]
  },
  // Additional courses would be defined here in the same format
};

const FreeCourseDetail = () => {
  const { courseId } = useParams();
  const [activeLesson, setActiveLesson] = useState('');
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      const res: any = await getLearningHubCourse(courseId as string);
      setCourse(res);
      setActiveLesson(res.curriculum[0].id);
      setLoading(false);
    }
    fetchCourse();
  }, [courseId]);


  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }



  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Course not found</h1>
            <p className="mt-2 mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/learning-hub">Return to Learning Hub</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentLessonIndex = course.curriculum.findIndex((lesson: any) => lesson.id === activeLesson);
  const currentLesson = course.curriculum[currentLessonIndex];
  const hasPrevious = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < course.curriculum.length - 1;

  const handlePreviousLesson = () => {
    if (hasPrevious) {
      setActiveLesson(course.curriculum[currentLessonIndex - 1].id);
      window.scrollTo(0, 0);
    }
  };

  const handleNextLesson = () => {
    if (hasNext) {
      setActiveLesson(course.curriculum[currentLessonIndex + 1].id);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-gradient-to-b from-primary-50 to-white pt-12 pb-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-2 flex items-center text-sm">
                <a href="/learning-hub" className="text-primary-600 hover:underline">Learning Hub</a>
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                <span className="text-gray-600">{course.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gray-900">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                {course.description}
              </p>
              <div className="mt-4 flex items-center">
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
                  {course.level}
                </span>
                <span className="ml-4 flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.curriculum.length} lessons
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="content" className="space-y-4">


                <TabsContent value="content" className="space-y-6">
                  {/* Lesson Selection */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Lessons</h3>
                        <span className="text-sm text-gray-500">
                          {currentLessonIndex + 1} of {course.curriculum.length}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {course.curriculum.map((lesson: any, index: number) => (
                          <button
                            key={lesson.id}
                            onClick={() => setActiveLesson(lesson.id)}
                            className={`w-full text-left p-3 rounded-md flex items-center ${activeLesson === lesson.id
                                ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600'
                                : 'hover:bg-gray-50'
                              }`}
                          >
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-800 text-sm mr-3">
                              {index + 1}
                            </span>
                            <span className="font-medium">{lesson.heading}</span>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Lesson Content */}
                  {currentLesson && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">{currentLesson.heading}</h2>
                      <div className="prose prose-sm" style={{

                      }}>
                        <Markdown markdown={currentLesson.description} />
                      </div>

                      <div className="mt-8 pt-6 border-t flex justify-between">
                        <Button
                          variant="outline"
                          onClick={handlePreviousLesson}
                          disabled={!hasPrevious}
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous Lesson
                        </Button>

                        <Button
                          onClick={handleNextLesson}
                          disabled={!hasNext}
                        >
                          Next Lesson
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>


              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeCourseDetail;
