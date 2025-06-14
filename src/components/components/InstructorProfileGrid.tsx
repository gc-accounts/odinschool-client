import React, { useEffect, useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/ui/avatar";
import { Card, CardContent } from "@/components/components/ui/card";
import { Skeleton } from "@/components/components/ui/skeleton";
import Image from "next/image";


interface InstructorProfileProps {
  slug: string,
  sectionClass?: String,
  data: { id: number, name: string, photo: string, designation: string, currentCompany: string, prevCompanies: string[] }[]
}
const InstructorProfile = ({ slug, sectionClass, data }: InstructorProfileProps) => {


  // const [mentors, setMentors] = useState<InstructorProps[]>([]);
  const [loading, setLoading] = useState(false);

  const LoadingSkeleton = () => (
    <Card className="border border-gray-200 overflow-hidden">
      <CardContent className="p-0">
        <div className="h-7 bg-gray-200"></div>
        <div className="p-6">
          <div className="flex flex-col items-center">
            <Skeleton className="h-24 w-24 rounded-full mb-4" />
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-20 w-full mb-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'} relative`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Meet our <span className="text-primary-600">Mentors and Speakers!</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto"> Get the chance to interact with professionals from top companies, who bring years of real-world experience to the table.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="relative px-6">
            <div className="flex flex-wrap min-w-0 gap-4 justify-center items-center">
                {Array.isArray(data) && data.map((instructor) => {
                  return (
                    <div
                      key={instructor.id}
                      className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                    >
                      <Card className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden h-full">
                        <Link href={`/expert/${instructor.id}`}>
                          <CardContent className="p-0">
                            <div className="h-7 bg-primary-600"></div>
                            <div className="p-6">
                              <div className="flex flex-col items-center">
                                <Avatar className="h-24 w-24 mb-4">
                                  <AvatarImage src={instructor.photo} alt={instructor.name} />
                                  <AvatarFallback>
                                    {instructor.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                                <p className="text-sm text-gray-500 mb-0">{instructor.designation}</p>
                                <p className="text-center text-gray-600 mb-4">{ }</p>
                              </div>
                              <div className="flex flex-col items-center space-y-3 mb-0">
                                <div
                                  className="mb-4 rounded-md overflow-hidden border-gray-200"
                                  title={instructor.currentCompany}
                                >
                                  <Image
                                    src={instructor.currentCompany}
                                    alt={instructor.name}
                                    className="w-full h-full object-contain"

                                    loading="lazy"
                                    width={500}
                                    height={500}
                                  />
                                </div>
                                {
                                  instructor.prevCompanies.length > 0 && (
                                    <div className="flex justify-between w-full border-t-2 pt-4">
                                      {instructor.prevCompanies.map((company, index) => (
                                        <div
                                          key={index}
                                          className="rounded-md overflow-hidden border-gray-200"
                                          title={company}
                                        >
                                          <Image
                                            src={company}
                                            alt={company}
                                            className="w-full h-full object-contain"

                                            loading="lazy"
                                            width={500}
                                            height={500}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )
                                }



                              </div>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    </div>
                  )
                })
                }
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstructorProfile;
