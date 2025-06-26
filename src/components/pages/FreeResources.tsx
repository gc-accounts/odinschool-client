'use client';

import React, { useState, useEffect } from 'react';
import { Download, Search, Loader2 } from 'lucide-react';
import axios from 'axios';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import PaginationComponent from '@/components/components/PaginationComponent';
import ResourceCard from '@/components/components/ResourceCard';

const API_ENDPOINT = 'https://strapi.odinschool.com/api/projects';

interface Project {
  id: string;
  attributes?: {
    title: string;
    description: string;
    category: string | null;
    tags: string;
    downloads: number | null;
    publishedAt: string;
    poster_url: string | null;
    video_url: string | null;
    file: {
      data: {
        attributes: {
          url: string;
          name: string;
          ext: string;
          size: number;
        } | null;
      } | null;
    };
    documentId: string;
  };
  title?: string;
  description?: string;
  category?: string | null;
  tags?: string;
  downloads?: number | null;
  publishedAt?: string;
  poster_url?: string | null;
  video_url?: string | null;
  file?: {
    url: string;
    name: string;
    ext: string;
    size: number;
  };
  file_url?: string | null;
  documentId?: string;
}

const FreeResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [data, setData] = useState({
    projects: [] as Project[],
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 1,
      total: 0
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const filters: Record<string, any> = {};
        if (searchTerm) {
          filters.$or = [
            { title: { $containsi: searchTerm } },
            { description: { $containsi: searchTerm } }
          ];
        }
        if (selectedCategory) {
          filters.category = { $eq: selectedCategory };
        }

        const response = await axios.get(API_ENDPOINT, {
          params: {
            'populate[0]': 'poster',
            'populate[1]': 'video',
            'populate[2]': 'file',
            'pagination[page]': pageNumber,
            'pagination[pageSize]': pageSize,
            'filters': filters
          }
        });

        console.log('API Response:', response.data);

        setData({
          projects: response.data.data,
          pagination: response.data.meta?.pagination || {
            page: 1,
            pageSize: 10,
            pageCount: 1,
            total: 0
          }
        });
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [selectedCategory, searchTerm, pageNumber, pageSize]);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date available';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const transformProject = (project: Project) => {
    // Extract file URL from both possible locations in the response
    const fileUrl = project.file?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'https://strapi.odinschool.com'}${project.file.url}`
      : project.attributes?.file?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'https://strapi.odinschool.com'}${project.attributes.file.data.attributes.url}`
        : null;

    // Extract file size and format it
    const fileSize = project.file?.size
      ? `${(project.file.size / 1024).toFixed(2)} KB`
      : project.attributes?.file?.data?.attributes?.size
        ? `${(project.attributes.file.data.attributes.size / 1024).toFixed(2)} KB`
        : 'N/A';

    return {
      id: project.id,
      documentId: project.documentId || project.attributes?.documentId,
      title: project.title || project.attributes?.title || '',
      description: project.description || project.attributes?.description || '',
      category: project.category || project.attributes?.category || 'Uncategorized',
      tags: (project.tags || project.attributes?.tags || '').split(',').map(tag => tag.trim()) || [],
      downloads: project.downloads || project.attributes?.downloads || 0,
      createdAt: project.publishedAt || project.attributes?.publishedAt || '',
      poster: isImageUrl(project.poster_url || project.attributes?.poster_url)
        ? project.poster_url || project.attributes?.poster_url
        : null,
      video: isVideoUrl(project.video_url || project.attributes?.video_url)
        ? project.video_url || project.attributes?.video_url
        : null,
      downloadUrl: fileUrl,
      fileFormat: getFileFormat(fileUrl),
      fileSize: fileSize,
      popularity: project.downloads || project.attributes?.downloads || 0
    };
  };

  // Helper function to check if URL is an image
  const isImageUrl = (url: string | null) => {
    if (!url) return false;
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(url);
  };

  // Helper function to check if URL is a video
  const isVideoUrl = (url: string | null) => {
    if (!url) return false;
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  // Helper function to extract file format from URL
  const getFileFormat = (url: string | null) => {
    if (!url) return 'Unknown';
    const extension = url.split('.').pop()?.toUpperCase();
    return extension || 'Unknown';
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 mb-4">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <Download className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2 text-center">Project Page</h1>
            <p className="text-md text-center max-w-2xl mx-auto mb-4">
              Beginner to advanced level projects with detailed explanation, for practicing and strengthening your skills in Data Science and Generative AI.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10 py-6 text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </section>

        <section className='px-[20px] pt-[50px] md:px-[30px] md:pt-[70px]'>
          <div className="container">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.projects.map(project => (
                    <ResourceCard
                      key={project.id}
                      resource={transformProject(project)}
                      formatDate={formatDate}
                    />
                  ))}
                </div>

                {data.pagination.pageCount > 1 && (
                  <div className='mt-12'>
                    <PaginationComponent
                      currentPage={pageNumber}
                      setCurrentPage={setPageNumber}
                      totalPages={data.pagination.pageCount}
                    />
                  </div>
                )}
              </>
            )}

            {!loading && data.projects.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-2">No resources found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FreeResources;