import React, { useEffect, useState } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Card, CardContent } from '@/components/components/ui/card';
import { BarChart, BarChartHorizontal, Download } from 'lucide-react';
import { getDsBook } from '@/components/utils/api/dsBook';
import { useParams, useRouter } from 'next/navigation';
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import Image from 'next/image';

const FunWithStatistics = () => {
  const [dsBook, setDsBook] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentChapter, setCurrentChapter] = useState<any>(null);

  const params = useParams();
  const router = useRouter();
  const currentChapterId = params?.id as string;
  console.log("currentChapterId", currentChapterId, params);

  useEffect(() => {
    const fetchDsBook = async () => {
      setIsLoading(true);
      const data = await getDsBook();
      setDsBook(data);
      setIsLoading(false);
    }
    fetchDsBook();
  }, [])

  useEffect(() => {
    if (dsBook) {
      console.log("chapter updated", currentChapterId);
      const chapter = dsBook.chapers.find((chapter: any) => chapter.url_slug.split('/')[1] === currentChapterId);
      setCurrentChapter(chapter);
    }
  }, [dsBook, currentChapterId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <br />
      <div className="grid"
        style={{
          gridTemplateColumns: '250px 1fr'
        }}
      >
        <div className="sticky top-24 overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)] mb-10 mt-2 bg-white">
          <NavigationMenuPrimitive.Root orientation='vertical'
            className='relative z-10 flex max-h-max flex-1 items-center justify-left'
            value={currentChapterId}
          >
            <NavigationMenuPrimitive.List className='mb-10 w-full'>
              {dsBook?.chapers.map((chapter: any) => (
                <NavigationMenuPrimitive.Item key={chapter.id} value={chapter?.url_slug?.split('/')[1]}>
                  <NavigationMenuPrimitive.Trigger
                    onClick={() => {
                      router.push(`/${chapter.url_slug}`);
                    }}
                    style={{
                      backgroundColor: chapter?.url_slug?.split('/')[1] === currentChapterId ? '#4D8EF6' : 'transparent'
                    }}
                    className='group inline-flex h-10 w-full max-w-[240px] items-left justify-left rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                  >
                    <span className='text-left max-w-[220px] truncate'>{chapter.title}</span>
                  </NavigationMenuPrimitive.Trigger>
                  {chapter.children && chapter.children.length > 0 && (
                    <NavigationMenuPrimitive.Content>
                      <NavigationMenuPrimitive.List className='ml-4 '>
                        {chapter.children.map((child: any) => (
                          <NavigationMenuPrimitive.Item key={child.id} value={child.url_slug} className='bg-red'>
                            <NavigationMenuPrimitive.Trigger
                              onClick={() => {
                                router.push(`/${child.url_slug}`);
                              }}
                              style={{
                                backgroundColor: '#A6C8FF',
                                margin: '5px 0 0 0'
                              }}
                              className='group inline-flex h-8 w-full max-w-[220px] items-left justify-left rounded-md bg-background px-3 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                            >
                              <span className='text-left max-w-[200px] truncate'>{child.title}</span>
                            </NavigationMenuPrimitive.Trigger>
                          </NavigationMenuPrimitive.Item>
                        ))}
                      </NavigationMenuPrimitive.List>
                    </NavigationMenuPrimitive.Content>
                  )}
                </NavigationMenuPrimitive.Item>
              ))}
            </NavigationMenuPrimitive.List>
          </NavigationMenuPrimitive.Root>
        </div>
        <div className="p-2">
          {isLoading ? (
            <p>Loading...</p>
          ) : currentChapter ? (
            <Card>
              <CardContent className='p-5'>
                <h2 className="text-2xl font-bold mb-4">{currentChapter.title}</h2>
                {currentChapter.is_html ? (
                  <div className="reset-post-content" dangerouslySetInnerHTML={{ __html: currentChapter.content }} />
                ) : (
                  <p>{currentChapter.content}</p>
                )}
              </CardContent>
            </Card>
          ) : (
            <p>Select a chapter to view its content.</p>
          )}
        </div>
      </div>

      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">The Little Book of Statistics</h1>
            <p className="text-lg text-gray-600 italic">
              "From ancient times to modern marvels, statistics has helped us understand our world better. In this book, we'll explore the basics of statistics in simple terms.<br />
              Think of it as a journey—a journey where we'll discover how statistics can unravel mysteries, solve problems, and even predict the future. We'll learn about counting, patterns, and how to make sense of data.<br />
              But more than that, this book is a celebration! It's a celebration of the people who've dedicated their lives to statistics—the pioneers, the scholars, and the everyday folks who use statistics to make informed decisions."           </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Author - Srinivas Vedantam</h2>
              <p className="text-gray-600 mb-4 italic">
                "Product development is a passion that I have given my everything to. I enjoy working on solutions that apply the advancement in technology in areas like learning, and marketing."              </p>
              <p className="text-gray-600 mb-6">
                Together, we'll unlock the secrets of statistics and see how it shapes our world in remarkable ways.
                Let's dive in!              </p>
              <Button className="flex items-center gap-2 px-12">
                <Download className="h-4 w-4" />
                Read More
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auhref=format&fit=crop&w=800"
                alt="Data visualization charts"
                className="rounded-lg shadow-lg w-full h-auto"

                loading="lazy"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FunWithStatistics;