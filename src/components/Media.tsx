
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Newspaper } from 'lucide-react';
import Button from './Button';

interface MediaArticle {
  id: string;
  title: string;
  source: string;
  logo: string;
  date: string;
  url: string;
  excerpt: string;
}

const articlesData: MediaArticle[] = [
  {
    id: '1',
    title: 'CodeMaster Revolutionizes Online Technical Education',
    source: 'Tech Review Weekly',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&w=100',
    date: 'June 15, 2023',
    url: 'https://example.com/article1',
    excerpt: 'How this innovative platform is changing the landscape of coding education with its expert-led approach.'
  },
  {
    id: '2',
    title: 'Top 5 Learning Platforms for Aspiring Developers',
    source: 'Developer Magazine',
    logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?crop=entropy&w=100',
    date: 'August 3, 2023',
    url: 'https://example.com/article2',
    excerpt: 'CodeMaster ranks #1 in our annual survey of educational platforms for programming skills.'
  },
  {
    id: '3',
    title: 'Why Industry Experts Are Turning to Teaching Online',
    source: 'Business Insider',
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&w=100',
    date: 'October 12, 2023',
    url: 'https://example.com/article3',
    excerpt: 'Senior developers from top tech companies are finding fulfillment by sharing their knowledge on platforms like CodeMaster.'
  },
  {
    id: '4',
    title: 'The Future of Tech Education Is Community-Driven',
    source: 'EdTech Today',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&w=100',
    date: 'January 22, 2024',
    url: 'https://example.com/article4',
    excerpt: 'CodeMaster's approach to building learning communities is setting new standards in the industry.'
  }
];

const Media = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const articleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);
    
    articleRefs.current.forEach((article, i) => {
      if (article) {
        article.style.animationDelay = `${i * 150}ms`;
        observer.observe(article);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToArticleRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      articleRefs.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            CodeMaster <span className="text-primary-600">In The News</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            See what industry publishers and tech journalists are saying about our platform and approach to education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.map((article, index) => (
            <div 
              key={article.id}
              ref={(el) => addToArticleRefs(el, index)}
              className="opacity-0"
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300 flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src={article.logo} 
                        alt={article.source} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{article.source}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 flex-grow line-clamp-3">{article.excerpt}</p>
                  
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-primary-600 mt-auto text-sm font-medium hover:text-primary-700 transition-colors"
                  >
                    Read full article <ExternalLink size={16} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            icon={<Newspaper size={18} />}
            iconPosition="left"
          >
            View More Media Coverage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Media;
