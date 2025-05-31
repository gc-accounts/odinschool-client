
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Share2, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/data/blog';
import { getBlog } from '@/utils/api/blog';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const post = await getBlog("", id);
      setPost(post);
      setLoading(false);
    }
    fetchPost();
  }, [id])


  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== id)
    .slice(0, 3);
  
  // Format date string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Button variant="outline" className="mb-6 text-primary" asChild>
                <Link to="/blog" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex justify-between items-center gap-4 mb-6">
                <div className="flex items-center">
                  {/* <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  /> */}
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm ">{post.author.title}</div>
                      <div className="flex items-center text-sm">
                        <span className="mr-4">{formatDate(post.publishedAt)}</span>
                      </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-3 text-sm text-gray-600">Share:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="relative -mt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video w-full rounded-t-lg overflow-hidden shadow-xl">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-contain"
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
                        <Link to={`/blog/${relatedPost.id}`}>Read Article</Link>
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
