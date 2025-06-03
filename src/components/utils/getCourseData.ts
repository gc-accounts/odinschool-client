import { dsFaqsData } from '@/components/data/dsFaqsData';
import { genAiFaqsData } from '@/components/data/genAiFaqsData';
import { genAiiitgFaqsData } from '@/components/data/genAiiitgFaqsData';
import { dsEliteFaqsData } from '@/components/data/dsEliteFaqsData';

import { DsEliteCourseCareerPathData } from '@/components/data/course-section/carrer-path/DsEliteCourseCareerPathData';
import { DsCourseCareerPathData } from '@/components/data/course-section/carrer-path/DsCourseCareerPathData';
import { GenAiCareerPathData } from '@/components/data/course-section/carrer-path/GenAiCareerPathData';
import { GenAiIITGCareerPathData } from '@/components/data/course-section/carrer-path/GenAiIITGCareerPathData';


const getCourseData = (slug: string) => {
  switch (slug) {
    case 'data-science-course':
      return {
        faqs: dsFaqsData,
        jobs: [],
        careerPath: DsCourseCareerPathData
      };
    case 'generative-ai-bootcamp':
      return {
        faqs: genAiFaqsData,
        jobs: [],
        careerPath: GenAiCareerPathData,
      };
    case 'generative-ai-course-iitg':
      return {
        faqs: genAiiitgFaqsData,
        jobs: [],
        careerPath: GenAiIITGCareerPathData,
      };
    case 'data-science-elite-course':
      return {
        faqs: dsEliteFaqsData,
        jobs: [],
        careerPath: DsEliteCourseCareerPathData,
      };
    default:
      return {
        faqs: [],
        jobs: [],
      };
  }
};


export default getCourseData