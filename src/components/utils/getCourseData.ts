import { dsFaqsData } from '@/components/data/course-section/faqs/dsFaqsData';
import { genAiFaqsData } from '@/components/data/course-section/faqs/genAiFaqsData';
import { genAiiitgFaqsData } from '@/components/data/course-section/faqs/genAiiitgFaqsData';
import { dsEliteFaqsData } from '@/components/data/course-section/faqs/dsEliteFaqsData';

import { DsCareerPathData } from '@/components/data/course-section/carrer-path/DsCareerPathData';
import { DsEliteCareerPathData } from '@/components/data/course-section/carrer-path/DsEliteCareerPathData';
import { GenAICareerPathData } from '@/components/data/course-section/carrer-path/GenAICareerPathData';
import { GenAIIITGCareerPathData } from '@/components/data/course-section/carrer-path/GenAIIITGCareerPathData';

import { GenAIIITGMentorsData } from '@/components/data/course-section/mentors/GenAIIITGMentorsData';


const getCourseData = (slug: string) => {
  switch (slug) {
    case 'data-science-course':
      return {
        faqs: dsFaqsData,
        jobs: [],
        careerPath: DsCareerPathData,
        mentors: []
      };
    case 'generative-ai-bootcamp':
      return {
        faqs: genAiFaqsData,
        jobs: [],
        careerPath: GenAICareerPathData,
        mentors: []
      };
    case 'generative-ai-course-iitg':
      return {
        faqs: genAiiitgFaqsData,
        jobs: [],
        careerPath: GenAIIITGCareerPathData,
        mentors: GenAIIITGMentorsData
      };
    case 'data-science-elite-course':
      return {
        faqs: dsEliteFaqsData,
        jobs: [],
        careerPath: DsEliteCareerPathData,
        mentors: []
      };
    default:
      return {
        faqs: [],
        jobs: [],
      };
  }
};


export default getCourseData