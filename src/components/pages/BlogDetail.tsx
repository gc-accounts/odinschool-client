'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { Share2, ChevronLeft, Calendar, User, Tag, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/components/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/components/Footer'), { ssr: true });
const MetaTags = dynamic(() => import('@/components/components/MetaTags'), { ssr: true });
const Button = dynamic(() => import('@/components/components/ui/button').then(mod => ({ default: mod.Button })), { ssr: true });
const Card = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.Card })), { ssr: true });
const CardContent = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardContent })), { ssr: true });
const CardHeader = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardHeader })), { ssr: true });
const CardTitle = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardTitle })), { ssr: true });
const Badge = dynamic(() => import('@/components/components/ui/badge').then(mod => ({ default: mod.Badge })), { ssr: true });

// ADDED: This interface defines the shape of the 'post' prop
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
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loadingRelated, setLoadingRelated] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchRelatedPosts = async () => {
      if (!post.category) {
        setLoadingRelated(false);
        return;
      }
      try {
        setLoadingRelated(true);
        const res = await axios.get('https://strapi.odinschool.com/api/odinschool-blogs', {
          params: {
            filters: {
              postLanguage: { $eq: post.category },
              id: { $ne: post.id },
            },
            pagination: { limit: 3 },
          },
        });
        setRelatedPosts(res.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch related posts:", err);
      } finally {
        setLoadingRelated(false);
      }
    };

    fetchRelatedPosts();
  }, [post.id, post.category]);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Invalid Date';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <MetaTags
        title={post.title}
        description={post.excerpt || ''}
        image={post.coverImage}
        url={`/blog/${post.id}`} // You might want to use the actual slug here later
        type="article"
        author={post.author.name}
        publishedAt={post.publishedAt}
        keywords={post.tags || []}
      />
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="relative bg-gradient-to-br from-primary-800 to-primary-700 text-white py-20">
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
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-white/5 border-white/20 text-white">
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

        <div className="relative -mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="w-full h-fit rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={post.coverImage || '/fallback.jpg'}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={630}
                  priority
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto rounded-b-lg">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            {loadingRelated ? (
              <div className="grid place-items-center h-full py-10">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : relatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={relatedPost.featuredImageUrl || '/fallback.jpg'}
                        alt={relatedPost.postTitle}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        width={500}
                        height={281}
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg line-clamp-2">{relatedPost.postTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-600 line-clamp-2 mb-4">{relatedPost.metaDescription}</p>
                      <Button asChild>
                        <Link href={`/blog/${relatedPost.postUrl.split('/blog/')[1]}`}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No related articles found.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;