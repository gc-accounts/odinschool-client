import FreeCourseDetail from '@/components/pages/FreeCourseDetail';
import { getLearningHubCourse } from '@/components/utils/api/learning_hub';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: {
    courseId: string
  }
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const course = await getLearningHubCourse("", params.courseId);
    if (!course) {
      console.log('Course not found for metadata');
      return {
        title: 'Course Not Found',
        description: 'The requested course could not be found.'
      };
    }

    if (!course.title || !course.description) {
      return {
        title: 'Course Details',
        description: 'Course information'
      };
    }

    // Get the parent metadata (if any)
    const previousMetadata = await parent;

    // Construct the metadata
    const metadata: Metadata = {
      title: course.title, // This will be combined with the layout's template
      description: course.description,
      openGraph: {
        title: course.title,
        description: course.description,
        type: 'website',
        url: `/learning-hub/${params.courseId}`,
        images: course.image ? [course.image] : undefined,
        siteName: previousMetadata.openGraph?.siteName || 'Learning Hub',
      },
      twitter: {
        card: 'summary_large_image',
        title: course.title,
        description: course.description,
        images: course.image ? [course.image] : undefined,
      },
      alternates: {
        canonical: `/learning-hub/${params.courseId}`,
      }
    };

    return metadata;
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'An error occurred while loading the course.'
    };
  }
}

export default async function FreeCourseDetailPage({ params }: Props) {
  try {
    const { courseId } = params;
    console.log('Fetching course data for:', courseId);

    // Fetch course data on the server
    const course = await getLearningHubCourse("", courseId);
    console.log('Course data fetched:', course);

    if (!course) {
      console.log('Course not found, redirecting to 404');
      notFound();
    }

    return <FreeCourseDetail courseId={courseId} initialCourse={course} />;
  } catch (error) {
    console.error('Error in FreeCourseDetailPage:', error);
    throw error; // This will trigger Next.js error boundary
  }
} 