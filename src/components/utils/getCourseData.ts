import { dsFaqsData } from '@/components/data/dsFaqsData';
import { genAiFaqsData } from '@/components/data/genAiFaqsData';
import { genAiiitgFaqsData } from '@/components/data/genAiiitgFaqsData';
import { dsEliteFaqsData } from '@/components/data/dsEliteFaqsData';


const getCourseData = (slug: string) => {
  switch (slug) {
    case 'data-science-course':
      return {
        faqs: dsFaqsData,
        jobs: [],
      };
    case 'generative-ai-bootcamp':
      return {
        faqs: genAiFaqsData,
        jobs: [],
      };
    case 'generative-ai-course-iitg':
      return {
        faqs: genAiiitgFaqsData,
        jobs: [],
      };
    case 'data-science-elite-course':
      return {
        faqs: dsEliteFaqsData,
        jobs: [],
      };
    default:
      return {
        faqs: [],
        jobs: [],
      };
  }
};


export default getCourseData