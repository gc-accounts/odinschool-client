import React, { useState, useMemo, useEffect } from 'react';
import { Download, Search, FileText, File, Clock, Tag, Loader2 } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/components/ui/card';
import { getProjects } from '@/components/utils/api/project';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/components/ui/pagination';
import PaginationComponent from '@/components/components/PaginationComponent';
import ResourceCard from '@/components/components/ResourceCard';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('');
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
          pageNumber: pageNumber,
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
  }, [selectedCategory, searchTerm, pageNumber]);






  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString)?.toLocaleDateString('en-US', options);
  };

  console.log("projects", projects);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Download className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Project Page</h1>
            <p className="text-xl text-center max-w-2xl mx-auto mb-8 text-slate-300">
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
          <div className="mb-8 flex flex-wrap gap-2 hidden">
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
                <ResourceCard 
                  key={resource.id}
                  resource={resource}
                  formatDate={formatDate}
                />
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
        </section>
      <section className='px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]'>
        <PaginationComponent currentPage={pageNumber} setCurrentPage={setPageNumber} totalPages={undefined} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FreeResources;
