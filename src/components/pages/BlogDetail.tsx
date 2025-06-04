'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Share2, ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import MetaTags from '@/components/components/MetaTags';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { blogPosts } from '@/components/data/blog';
import { Badge } from '@/components/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  category: string;
  author: {
    name: string;
    title: string;
    about: string;
  };
  tags?: string[];
  excerpt?: string;
}

interface BlogDetailProps {
  post: BlogPost;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== post.id)
    .slice(0, 3);

  // Format date string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <MetaTags
        title={post.title}
        description={post.excerpt || post.content.substring(0, 160)}
        image={post.coverImage}
        url={`/blog/${post.id}`}
        type="article"
        author={post.author.name}
        publishedAt={post.publishedAt}
        keywords={post.tags || []}
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-800 to-primary-700 text-white py-20">
          {/* <div className="absolute inset-0 bg-black/50 z-0" /> */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Button variant="outline" className="mb-6 bg-primary-600 border-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/blog" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author.name}
                  </div>
                  {post.category && (
                    <Badge variant="secondary" className="bg-white/10 hover:bg-white/20">
                      {post.category}
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>

                {post.tags && post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-white/5 border-white/20 text-white">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative -mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto rounded-b-lg ">
            <div className="prose-lg max-w-none">
              <div
                className="reset-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flext-start">
                {/* <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-16 h-16 rounded-full mr-4"
                /> */}
                <div>
                  <h3 className="font-bold text-lg">{post.author.name}</h3>
                  <p className="text-gray-600">{post.author.title}</p>
                  <p className="text-gray-600">{post.author.about}</p>
                </div>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16" >
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-600 line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                      <Button asChild>
                        <Link href={`/blog/${relatedPost.id}`}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;
