
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, Calendar, Clock, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { blogPosts } from '@/data/blog';
import { getBlogs } from '@/utils/api/blog';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await getBlogs(page, searchTerm);
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
        <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Stay current with the latest insights on our Blog!</h1>
            <p className="text-xl text-center max-w-2xl mx-auto mb-8">
            From the latest trends to best practices, read everything about Data Science, Web Development, Digital Marketing, and Power BI here.            
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
        </div>
        
        <div className="container mx-auto px-4 py-12">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full">
                <div className="flex justify-center items-center h-full">
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
                <Link to={`/blog/${post.id}`}>Read More</Link>
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
          
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage(page - 1)} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => setPage(page)} isActive>{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setPage(page + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
