import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Card } from '@/components/components/ui/card';
import { Webinar } from '@/components/data/webinars'; // Assuming Webinar type is defined here
import PaginationComponent from '@/components/components/PaginationComponent';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios'; // Import Axios

// You might want to move this `getWebinars` function to a separate utility file (e.g., `src/utils/api.ts`)
// for better organization in a larger project.
const getWebinars = async ({ pageNumber, pageSize, isOdintalk }: { pageNumber: number; pageSize: number; isOdintalk: boolean; }) => {
  try {
    const response = await axios.get('https://strapi.odinschool.com/api/webinars', {
      params: {
        'pagination[page]': pageNumber,
        'pagination[pageSize]': pageSize,
        'filters[is_odin_talk][$eq]': isOdintalk,
      },
    });

    const webinarsData = response.data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.description,
      about_instructor: item.about_instructor,
      instructor: item.Instructor, // Note the capitalization from your API response
      date: item.date,
      time: item.time,
      price: item.price,
      duration: item.duration,
      tags: item.tags,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
      image: item.image_url, // Assuming image_url from API maps to 'image' in Webinar type
      is_featured: item.is_featured,
      is_odin_talk: item.is_odin_talk,
      is_html: item.is_html,
      url_slug: item.slug, // Using 'slug' for 'url_slug' for navigation
    })) as Webinar[];

    const totalPages = response.data.meta.pagination.pageCount; // Extract total pages from meta

    return { webinars: webinarsData, totalPages }; // Return an object with both
  } catch (error) {
    console.error('Error fetching webinars:', error);
    return { webinars: [], totalPages: 0 }; // Return empty data and 0 total pages on error
  }
};

const OdinTalks = () => {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // New state to store total pages

  useEffect(() => {
    const fetchWebinarData = async () => {
      setLoading(true);
      const { webinars: fetchedWebinars, totalPages: fetchedTotalPages } = await getWebinars({
        pageNumber: pageNumber,
        pageSize: 10,
        isOdintalk: true,
      });
      setWebinars(fetchedWebinars);
      setTotalPages(fetchedTotalPages); // Update totalPages state
      setLoading(false);
    };
    fetchWebinarData();
  }, [pageNumber]); // Re-fetch when pageNumber changes

  useEffect(() => {
    // Scroll to top and set document title on initial load
    window.scrollTo(0, 0);
    document.title = "OdinTalks - Learn from Experts"; // Updated title to be more relevant
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-primary-500" /> {/* Added color */}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pb-16">
        <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">OdinTalks: Learn for free from experts!</h1>
            <p className="text-xl text-center max-w-2xl mx-auto mb-8">
              Listen to subject matter experts, industry practitioners, and thought leaders talk about the latest trends, technologies, hiring processes, and more in our free OdinTalks sessions.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 md:px-6">
          {webinars.length === 0 ? (
            <p className="text-center text-xl text-gray-600">No OdinTalks found at the moment. Please check back later!</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {webinars.map((webinar) => (
                  <Link key={webinar.id} href={`/odintalks/${webinar.url_slug}`} passHref>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"> {/* Added cursor-pointer */}
                      <div className="aspect-[4/3] relative rounded overflow-hidden shadow">
                        <Image
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-auto"
                          loading="lazy"
                          width={500}
                          height={500}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-black">{webinar.title}</h3>
                            <h3 className="text-gray-700">{webinar.instructor}</h3>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              {/* Only show pagination if there are webinars and more than 1 page */}
              {totalPages > 1 && (
                <PaginationComponent
                  currentPage={pageNumber}
                  setCurrentPage={setPageNumber}
                  totalPages={totalPages}
                />
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OdinTalks;