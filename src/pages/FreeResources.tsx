import React, { useState, useMemo, useEffect } from 'react';
import { Download, Search, FileText, File, Clock, Tag, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { getProjects } from '@/utils/api/project';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import PaginationComponent from '@/components/PaginationComponent';

const categoriesObjs = [
  { key: '', value: 'All' },
  { key: 'Project_Template', value: 'Project Template' },
  { key: 'Cheat_Sheet', value: 'Cheat Sheet' },
  { key: 'Design_Asset', value: 'Design Asset' },
  { key: 'Code_Snippet', value: 'Code Snippet' },
  { key: 'Starter_Kit', value: 'Starter Kit' },
  { key: 'Tutorial', value: 'Tutorial' }
];

const categories = categoriesObjs.map((category) => category.value);

const FreeResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Project_Template');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects({
          pageNumber: 1,
          pageSize: 10,
          category: selectedCategory,
          search: searchTerm
        });
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [selectedCategory]);






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
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Download className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Project Page</h1>
            <p className="text-xl text-center max-w-2xl mx-auto mb-8">
              Download free templates, code snippets, and learning materials to accelerate your development journey
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
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex flex-wrap gap-2">
            {categoriesObjs.map(category => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className="mb-2"
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.value}
              </Button>
            ))}
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(resource => (
                <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img 
                      src={resource.video} 
                      alt={resource.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        <span>{resource.fileFormat}</span>
                      </div>
                      <div className="flex items-center">
                        <File className="w-4 h-4 mr-1" />
                        <span>{resource.fileSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{formatDate(resource.createdAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{resource.popularity.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags?.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button className="w-full gap-2" onClick={() => window.open(resource.downloadUrl, '_blank')}>
                      <Download className="h-4 w-4" />
                      Download Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          
          {!loading && projects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      
        <PaginationComponent currentPage={pageNumber} setCurrentPage={setPageNumber} totalPages={undefined} />
      </main>
      <Footer />
    </>
  );
};

export default FreeResources;
