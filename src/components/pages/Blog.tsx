'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Search, Calendar, BookOpenText, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = dynamic(() => import('@/components/components/Navbar'), { loading: () => <div>Loading...</div>, ssr: true });
const Footer = dynamic(() => import('@/components/components/Footer'), { loading: () => <div>Loading...</div>, ssr: true });
const Button = dynamic(() => import('@/components/components/ui/button').then(mod => ({ default: mod.Button })), { ssr: true });
const Input = dynamic(() => import('@/components/components/ui/input').then(mod => ({ default: mod.Input })), { ssr: true });
const Card = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.Card })), { ssr: true });
const CardContent = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardContent })), { ssr: true });
const CardFooter = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardFooter })), { ssr: true });
const PaginationComponent = dynamic(() => import('@/components/components/PaginationComponent'), { loading: () => <div>Loading...</div>, ssr: true });

const BlogPage = () => {
  const [searchTerm, setSearchTerm1] = useState('');
  const [page, setPage1] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [activeTag, setActiveTag] = useState('All'); // New state for active tab

  const tags = ['All', 'Data Science', 'Web Development', 'Success Story', 'Programming', 'Power BI', 'Digital Marketing'];

  const setPage = (page: number) => {
    setLoading(true);
    setPage1(page);
  };

  const setSearchTerm = (term: string) => {
    setLoading(true);
    setSearchTerm1(term);
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setPage1(1); // Reset to first page when changing tags
    setLoading(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const params: any = {
          pagination: { page, pageSize: 9 },
          sort: ['publishDate:desc'],
          filters: {
            postTitle: { $containsi: searchTerm }
          }
        };

        // Add tag filter if a specific tag is selected
        if (activeTag !== 'All') {
          params.filters.tags = {
            $containsi: activeTag // Assuming 'tags' field in Strapi is a string or array of strings where $containsi works for filtering
          };
        }

        const res = await axios.get('https://strapi.odinschool.com/api/odinschool-blogs', { params });

        const blogs = res.data?.data || [];
        const totalPagesFromStrapi = res.data?.meta?.pagination?.pageCount || 1;

        setPosts(blogs);
        setTotalPages(totalPagesFromStrapi);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setPosts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page, searchTerm, activeTag]); // Add activeTag to dependency array

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Invalid Date';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const extractSlugFromUrl = (url: string): string => {
    if (!url) return '#';
    const parts = url.split('/blog/');
    return parts[1] ? `/${parts[1]}` : '#';
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:mb-6 mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <BookOpenText className="md:h-8 md:w-8 h-6 w-6" />
              </div>
            </div>

            <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">
              Stay current with the latest insights on our Blog!
            </h1>
            <p className="md:text-lg text-md text-center max-w-2xl mx-auto mb-4">
              Explore insights on Data Science, Generative AI, career growth, and in-demand tech skills — all curated to help you stay ahead.
            </p>

            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-6 text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Tabs for categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tags.map((tag) => (
              <Button
                key={tag}
                onClick={() => handleTagClick(tag)}
                variant={activeTag === tag ? 'default' : 'outline'}
                className={activeTag === tag ? 'bg-primary-600 text-white' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full grid place-items-center h-full min-h-[300px]"> {/* Added min-h for better loading state */}
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : posts.length > 0 ? (
              posts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.featuredImageUrl || '/fallback.jpg'}
                      alt={post.postTitle || 'Blog Image'}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.postTitle}</h3>
                    <p className="text-gray-600 line-clamp-3">{post.metaDescription}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between w-full">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium text-gray-900 mr-2">{post.author || 'Odin Author'}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog${extractSlugFromUrl(post.postUrl)}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          {/* Only show pagination if there are posts */}
          {!loading && posts.length > 0 && (
            <PaginationComponent
              currentPage={page}
              setCurrentPage={setPage}
              totalPages={totalPages}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;