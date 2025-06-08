'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Tag, Calendar, Clock, BookOpenText, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { getBlogs } from '@/components/utils/api/blog';

const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Button = dynamic(() => import('@/components/components/ui/button').then(mod => ({ default: mod.Button })), {
  ssr: true
});

const Input = dynamic(() => import('@/components/components/ui/input').then(mod => ({ default: mod.Input })), {
  ssr: true
});

const Card = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.Card })), {
  ssr: true
});

const CardContent = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardContent })), {
  ssr: true
});

const CardFooter = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardFooter })), {
  ssr: true
});



const PaginationComponent = dynamic(() => import('@/components/components/PaginationComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const BlogPage = () => {
  const [searchTerm, setSearchTerm1] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [page, setPage1] = useState(1);

  const setPage = (page: number) => {
    setLoading(true);
    setPage1(page);
  }

  const setSearchTerm = (searchTerm: string) => {
    setLoading(true);
    setSearchTerm1(searchTerm);
  }

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await getBlogs({ page, search: searchTerm });
      setPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, [page, searchTerm]);


  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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

            <h1 className="md:text-4xl text-2xl font-bold text-center md:mb-4 mb-2">Stay current with the latest insights on our Blog!</h1>
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


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full">
                <div className="grid place-items-center h-full">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
              </div>
            ) : posts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between w-full">
                  <div className="flex items-flexend text-sm text-gray-500">
                    <span className="font-medium text-gray-900 mr-2">{post.author.name}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${post.url_slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {!loading && posts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          <PaginationComponent currentPage={page} setCurrentPage={setPage} totalPages={undefined} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
