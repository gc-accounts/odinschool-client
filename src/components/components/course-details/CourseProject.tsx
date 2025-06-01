
import React, { useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Download } from 'lucide-react';
import Button from '@/components/components/Button';
import { DsCourseProjectData } from '@/components/data/DsCourseProjectData';
import { DsEliteCourseProjectData } from '@/components/data/DsEliteCourseProjectData';
import { DsGenAiData } from '@/components/data/DsGenAiData';
import { DsGenAiIITGData } from '@/components/data/DsGenAiIITGData';
import { getDataByPage } from '@/components/utils/getDataByPage';
import { usePathname } from 'next/navigation';
const CourseProject = () => {
  const path = usePathname()
  const projectData = path === '/data-science-course' ? getDataByPage(DsCourseProjectData, path) : path === '/generative-ai-bootcamp' ? getDataByPage(DsGenAiData, path) : path === '/generative-ai-course-iitg' ? getDataByPage(DsGenAiIITGData, path) : path === '/data-science-elite-course' ? getDataByPage(DsEliteCourseProjectData, path) : ''

  useEffect(() => {
    console.log('----------projectData---', projectData);

  })
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4 text-[1.5rem]">Course Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {DsCourseProjectData.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant={project.free ? "default" : "outline"}
                className="w-full"
                size="sm"
              >
                <Download className="h-4 w-4 mr-2" />
                {project.free ? 'Download Now' : 'Access with Course'}
              </Button>
            </CardFooter>
          </Card>
        ))} */}

        {
          projectData && projectData?.project?.map((project: any, index: any) => {
            return (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.project_img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{project.project_title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{project.project_description}</p>
                </CardContent>
                {/* <CardFooter>
                  <Button
                    variant={project.free ? "default" : "outline"}
                    className="w-full"
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {project.free ? 'Download Now' : 'Access with Course'}
                  </Button>
                </CardFooter> */}
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default CourseProject