/** @type {import('next').NextConfig} */
const redirects = [
  {
    source: '/scholarships',
    destination: '/college-scholarships',
    permanent: true
  },
  {
    source: '/academy/platform',
    destination: 'https://learn.odinschool.com/s/store/courses/datascience',
    permanent: true
  },
  {
    source: '/for-corporate',
    destination: '/hire-odin-grades',
    permanent: true
  },
  {
    source: '/hire-odin-grades',
    destination: '/hire-odin-grads',
    permanent: true
  },
  {
    source: '/corder/order-details',
    destination: '/order/order-details',
    permanent: true
  },
  {
    source: '/-ab-variant-a5b78f2a-e8cf-42fa-8b05-58b97def8fc1',
    destination: '/-ab-variant-f87842ff-42fe-408d-93ba-23a1ae551fbd',
    permanent: true
  },
  {
    source: '/v3-contact-us',
    destination: '/contact-us',
    permanent: true
  },
  {
    source: '/v3-about-us',
    destination: '/about-us',
    permanent: true
  },
  {
    source: '/v3-hire-from-us',
    destination: '/corporate/hire-odin-grads',
    permanent: true
  },
  {
    source: '/v3-home',
    destination: '/',
    permanent: true
  },
  {
    source: '/terms-of-use-v3',
    destination: '/terms-of-use',
    permanent: true
  },
  {
    source: '/privacy-policy-v3',
    destination: '/privacy-policy',
    permanent: true
  },
  {
    source: '/v3-faqs',
    destination: '/faqs',
    permanent: true
  },
  {
    source: '/courses/diploma-in-web-development',
    destination: '/full-stack-web-development',
    permanent: true
  },
  {
    source: '/courses/diploma-in-full-stack-web-development',
    destination: '/full-stack-web-development',
    permanent: true
  },
  {
    source: '/courses/diploma-in-data-science-analytics',
    destination: '/data-science-and-analytics',
    permanent: true
  },
  {
    source: '/courses/advanced-digital-marketing',
    destination: '/digital-marketing',
    permanent: true
  },
  {
    source: '/courses/finance-and-analytics',
    destination: '/finance-and-analytics',
    permanent: true
  },
  {
    source: '/courses/testing-and-qa',
    destination: '/quality-assurance-and-testing',
    permanent: true
  },
  {
    source: '/courses/data-analyst-course',
    destination: 'http://college.odinschool.com/data-analyst-course',
    permanent: true
  },
  {
    source: '/courses/ai-analyst-course',
    destination: 'http://college.odinschool.com/ai-analyst-course',
    permanent: true
  },
  {
    source: '/test-2024',
    destination: 'http://dev.odinschool.com/test-2025',
    permanent: true
  },
  {
    source: '/-ab-variant-326a498a-9260-4834-aa21-fbd72a8d9fb0',
    destination: '/data-science-course',
    permanent: true
  },
  {
    source: '/investment-banking-and-finance-operations-elite-cours/checkout',
    destination: '/investment-banking-and-finance-operations-elite-course/checkout',
    permanent: true
  },
  {
    source: '/online-datascience-bootcamp',
    destination: '/webinar-registernow',
    permanent: true
  },
  {
    source: '/webinar',
    destination: '/webinar-registernow',
    permanent: true
  },
  {
    source: '/terms-and-conditions',
    destination: '/terms-of-use',
    permanent: true
  },
  {
    source: '/full-stack-java-developer-bootcamp-application',
    destination: '/full-stack-java-developer-bootcamp/application',
    permanent: true
  },
  {
    source: '/ds-thank-you-not-eligible-0',
    destination: '/ds-thank-you-not-eligible',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/walk-ins',
    destination: 'http://20029733.hs-sites.com/bootcamp/walk-ins',
    permanent: true
  },
  {
    source: '/fs-workflow-eligibility',
    destination: '/fs-thankyou-not-eligible',
    permanent: true
  },
  {
    source: '/fs-thank-you-eligible',
    destination: '/full-stack-java-developer-bootcamp/application/thank-you',
    permanent: true
  },
  {
    source: '/fs-entrance-exam',
    destination: '/full-stack-java-developer-bootcamp/scholarship/application',
    permanent: true
  },
  {
    source: '/fs-thank-you-not-eligible',
    destination: '/full-stack-java-developer-bootcamp/application/thank-you/not-eligible',
    permanent: true
  },
  {
    source: '/ds-thank-you-eligible',
    destination: '/datascience-bootcamp/application/thank-you/eligible',
    permanent: true
  },
  {
    source: '/ds-thank-you-not-eligible',
    destination: '/datascience-bootcamp/application/thank-you/not-eligible',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/scholarship/application/thank-you-0',
    destination: '/order/order-details/thank-you',
    permanent: true
  },
  {
    source: '/application',
    destination: '/bootcamp/application',
    permanent: true
  },
  {
    source: '/test/bootcamp-demo-class',
    destination: 'http://20029733.hs-sites.com/bootcamp-demo-class',
    permanent: true
  },
  {
    source: '/bootcamp',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/bootcamps',
    destination: '/bootcamps-drafted',
    permanent: true
  },
  {
    source: '/full-stack-java-developer/aptitude-test/thank-you',
    destination: '/job-fair/test-1/thank-you',
    permanent: true
  },
  {
    source: '/bootcamps/hyderabad',
    destination: '/test-bootcamps/hyderabad',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/booking',
    destination: '/datascience-bootcamp/2-days-pass',
    permanent: true
  },
  {
    source: '/job-fair/mediamint-technologies',
    destination: '/job-fair/ctrl-s',
    permanent: true
  },
  {
    source: '/open-scholarship/application',
    destination: 'https://www.odinschool.com/data-science-course',
    permanent: true
  },
  {
    source: '/scholarship',
    destination: 'http://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/job-fair/face-academcy',
    destination: '/job-fair/face-academy',
    permanent: true
  },
  {
    source: '/job-fair/resume-video',
    destination: '/job-fair/resume-and-video',
    permanent: true
  },
  {
    source: '/webinar-registernow',
    destination: 'http://www.odinschool.com/webinars',
    permanent: true
  },
  {
    source: '/zerocodehr',
    destination: '/jobs-zerocodehr',
    permanent: true
  },
  {
    source: '/jobs-zerocodehr',
    destination: '/jobs/zerocodehr',
    permanent: true
  },
  {
    source: '/job-portal-table',
    destination: '/jobs',
    permanent: true
  },
  {
    source: '/full-stack-java-developer-bootcamp/scholarship',
    destination: 'http://www.odinschool.com/full-stack-java-developer-bootcamp',
    permanent: true
  },
  {
    source: '/odintalk',
    destination: '/odintalks',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/form',
    destination: '/datascience-bootcamp-with-job-assistance',
    permanent: true
  },
  {
    source: '/data-science-interview',
    destination: '/data-science-interview/live',
    permanent: true
  },
  {
    source: '/data-science-interview/start',
    destination: '/data-science-interview',
    permanent: true
  },
  {
    source: '/open-campus',
    destination: '/opencampus',
    permanent: true
  },
  {
    source: '/datascience-bootcamp-with-job-assistance-0',
    destination: '/datascience-bootcamp/job-assistance',
    permanent: true
  },
  {
    source: '/channel-partner',
    destination: 'http://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/opecampus',
    destination: '/learning-hub',
    permanent: true
  },
  {
    source: '/become-an-afffiliate/application',
    destination: '/become-an-affiliate/application',
    permanent: true
  },
  {
    source: '/learnin-hub',
    destination: 'https://www.odinschool.com/learning-hub',
    permanent: true
  },
  {
    source: '/full-stack-java-developer-bootcamp',
    destination: '/full-stack-software-development-bootcamp',
    permanent: true
  },
  {
    source: '/opencampus/ms-excel/mos-certification-exam-format',
    destination: 'http://www.odinschool.com/learning-hub/ms-excel/mos-certification-exam-format',
    permanent: true
  },
  {
    source: '/opencampus/ms-excel/mos-excel-2007-exam',
    destination: 'http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2007-exam',
    permanent: true
  },
  {
    source: '/opencampus/ms-excel/mos-excel-2010-exam',
    destination: 'http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2010-exam',
    permanent: true
  },
  {
    source: '/opencampus/ms-excel/mos-excel-2013-exam',
    destination: 'http://www.odinschool.com/learning-hub/ms-excel/mos-excel-2013-exam',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/k-fold-cross-validation',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/k-fold-cross-validation',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/k-nearest-neighbour',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/k-nearest-neighbour',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/perceptron-vs-svm',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/perceptron-vs-svm',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/supervised-and-unsupervised-learning',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/supervised-and-unsupervised-learning',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/why-do-linear-models-fail',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/why-do-linear-models-fail',
    permanent: true
  },
  {
    source: '/opencampus/data-analytics/data-analytics-explosion',
    destination: 'http://www.odinschool.com/learning-hub/data-analytics/data-analytics-explosion',
    permanent: true
  },
  {
    source: '/opencampus/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry',
    destination: 'http://www.odinschool.com/learning-hub/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry',
    permanent: true
  },
  {
    source: '/opencampus/data-analytics/evolution-of-analytics',
    destination: 'http://www.odinschool.com/learning-hub/data-analytics/evolution-of-analytics',
    permanent: true
  },
  {
    source: '/opencampus/data-analytics/finding-your-path-in-data-analytics',
    destination: 'http://www.odinschool.com/learning-hub/data-analytics/finding-your-path-in-data-analytics',
    permanent: true
  },
  {
    source: '/opencampus/data-analytics/what-is-analytics',
    destination: 'http://www.odinschool.com/learning-hub/data-analytics/what-is-analytics',
    permanent: true
  },
  {
    source: '/opencampus/data-analytics/perspective-of-a-consultant-to-data-analytics',
    destination: 'http://www.odinschool.com/learning-hub/data-analytics/perspective-of-a-consultant-to-data-analytics',
    permanent: true
  },
  {
    source: '/opencampus/ms-excel/microsoft-office-specialist',
    destination: 'http://www.odinschool.com/learning-hub/ms-excel/microsoft-office-specialist',
    permanent: true
  },
  {
    source: '/opencampus/ms-excel/what-is-ms-excel',
    destination: 'http://www.odinschool.com/learning-hub/ms-excel/what-is-ms-excel',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/application-of-machine-learning',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/application-of-machine-learning',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/classification-algorithms',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/classification-algorithms',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/confusion-matrix',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/confusion-matrix',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/decision-tree-model',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/decision-tree-model',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/dimensionality-reduction-pca',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/dimensionality-reduction-pca',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/errors-overfitting',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/errors-overfitting',
    permanent: true
  },
  {
    source: '/demo-class/thank-you',
    destination: '/data-science/affiliate/demo-class/thank-you',
    permanent: true
  },
  {
    source: '/odintalk/vishal-jain-0',
    destination: '/odintalk/anirudh-kasturi',
    permanent: true
  },
  {
    source: '/odintalk/vishal-jain',
    destination: '/odintalks/vishal-jain',
    permanent: true
  },
  {
    source: '/odintalk/sharthakacharjee',
    destination: '/odintalks/sharthakacharjee',
    permanent: true
  },
  {
    source: '/odintalk/sushanthgaonkar',
    destination: '/odintalks/sushanthgaonkar',
    permanent: true
  },
  {
    source: '/odintalk/krishnakumar',
    destination: '/odintalks/krishnakumar',
    permanent: true
  },
  {
    source: '/corporate-training',
    destination: '/corporate/training',
    permanent: true
  },
  {
    source: '/hire-odin-grads',
    destination: '/corporate/hire-odin-grads',
    permanent: true
  },
  {
    source: '/odintalk/vikramduggal',
    destination: '/odintalks/vikramduggal',
    permanent: true
  },
  {
    source: '/data-science',
    destination: 'http://www.odinschool.com/datascience-bootcamp',
    permanent: true
  },
  {
    source: '/odintalk/ajay-malgaonkar',
    destination: '/odintalks/ajay-malgaonkar',
    permanent: true
  },
  {
    source: '/odintalk/shashank-mishra',
    destination: '/odintalks/shashank-mishra',
    permanent: true
  },
  {
    source: '/odintalk/raam-gururanjan',
    destination: '/odintalks/raam-gururanjan',
    permanent: true
  },
  {
    source: '/odintalk/anirudh-kasturi',
    destination: '/odintalks/anirudh-kasturi',
    permanent: true
  },
  {
    source: '/data-science/master-class/thank-you',
    destination: '/master-class/thank-you',
    permanent: true
  },
  {
    source: '/master-class/thank-you',
    destination: '/masterclass/thank-you',
    permanent: true
  },
  {
    source: '/salary-calculator',
    destination: '/data-science/salary-calculator',
    permanent: true
  },
  {
    source: '/test-header-page',
    destination: '/resume-builder',
    permanent: true
  },
  {
    source: '/masterclass/analyzing-loan-application-data-using-pytho',
    destination: '/masterclass/analyzing-loan-application-data-using-python',
    permanent: true
  },
  {
    source: '/masterclass/demystifying-deep-learning-a-visual-journey',
    destination: 'http://www.odinschool.com/events',
    permanent: true
  },
  {
    source: '/full-stack-java-developer-bootcamp/application/thank-you',
    destination: '/full-stack-software-development-bootcamp/application/thank-you/eligible',
    permanent: true
  },
  {
    source: '/full-stack-java-developer-bootcamp/application/thank-you/not-eligible',
    destination: '/full-stack-software-development-bootcamp/application/thank-you/not-eligible',
    permanent: true
  },
  {
    source: '/enterprise',
    destination: 'http://www.odinschool.com/corporate/enterprise',
    permanent: true
  },
  {
    source: '/big-data-hadoop-developer-training-instructor-led',
    destination: 'http://www.odinschool.com',
    permanent: true
  },
  {
    source: '/bootcamps-hyderabad',
    destination: '/datascience-bootcamp',
    permanent: true
  },
  {
    source: '/masterclass/paid/thankyou',
    destination: '/masterclass/paid/thank-you',
    permanent: true
  },
  {
    source: '/opencampus/big-data-developer/what-is-big-data',
    destination: 'http://www.odinschool.com/learning-hub/big-data-developer/what-is-big-data',
    permanent: true
  },
  {
    source: '/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession',
    destination: '/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession/22-feb-2023',
    permanent: true
  },
  {
    source: '/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession/22-feb-2023',
    destination: '/college/webinar/22-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession',
    permanent: true
  },
  {
    source: '/college/masterclass/thank-you',
    destination: '/college/webinar/thank-you',
    permanent: true
  },
  {
    source: '/opencampus/hadoop-administrator/what-is-hadoop',
    destination: 'http://www.odinschool.com/learning-hub/hadoop-administrator/what-is-hadoop',
    permanent: true
  },
  {
    source: '/college/webinar/23-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession-0',
    destination: '/college/webinar/23-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession',
    permanent: true
  },
  {
    source: '/opencampus/machine-learning/what-is-machine-learning',
    destination: 'http://www.odinschool.com/learning-hub/machine-learning/what-is-machine-learning',
    permanent: true
  },
  {
    source: '/business-analytics-bootcamp',
    destination: '/business-analytics-bootcamp-old',
    permanent: true
  },
  {
    source: '/odinsights',
    destination: '/events',
    permanent: true
  },
  {
    source: '/datascience-bootcamp-v3',
    destination: '/datascience-bootcamp',
    permanent: true
  },
  {
    source: '/masterclass',
    destination: '/events',
    permanent: true
  },
  {
    source: '/full-stack-software-development-bootcamp/application/thank-you/not-eligible/v3',
    destination: '/full-stack-software-development-bootcamp/application/thank-you/not-eligible',
    permanent: true
  },
  {
    source: '/sitemap',
    destination: '/m22/sitemap',
    permanent: true
  },
  {
    source: '/sitemap-v3',
    destination: '/sitemap',
    permanent: true
  },
  {
    source: '/success-stories-v3',
    destination: '/success-stories',
    permanent: true
  },
  {
    source: '/success-stories',
    destination: '/m22/success-stories',
    permanent: true
  },
  {
    source: '/business-analytics-bootcamp',
    destination: '/datascience-bootcamp',
    permanent: true
  },
  {
    source: '/v3-careers',
    destination: '/careers',
    permanent: true
  },
  {
    source: '/careers',
    destination: '/m22/careers',
    permanent: true
  },
  {
    source: '/fullstack-category',
    destination: '/full-stack-software-development-bootcamp',
    permanent: true
  },
  {
    source: '/corporate/enterprise',
    destination: '/training-solution',
    permanent: true
  },
  {
    source: '/corporate/hire-odin-grads',
    destination: '/talent-solution',
    permanent: true
  },

  {
    source: '/full-stack-software-development-bootcamp',
    destination: 'https://www.odinschool.com/full-stack-developer-course',
    permanent: true
  },
  {
    source: '/data-science-salary-calculator',
    destination: '/data-science-salary-calculator-archived',
    permanent: true
  },
  {
    source: '/data-science-salary-calculator',
    destination: '/data-science/salary-calculator',
    permanent: true
  },
  {
    source: '/opencampus',
    destination: 'http://hubspot.greycampus.com/gc/opencampus',
    permanent: true
  },
  {
    source: '/careers/application/thank-you/eligible',
    destination: '/careers/application',
    permanent: true
  },
  {
    source: '/thank-you-0',
    destination: '/careerthank-you',
    permanent: true
  },
  {
    source: '/careerthank-you',
    destination: '/careers/application/thank-you',
    permanent: true
  },
  {
    source: '/checkout-ab',
    destination: '/checkout',
    permanent: true
  },
  {
    source: '/rahul-saha',
    destination: '/odintalks/rahul-saha',
    permanent: true
  },
  {
    source: '/data-science/affiliate/demo-class',
    destination: 'https://www.odinschool.com/data-science/demo-class',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/affiliate/application/thank-you/eligible',
    destination: 'https://www.odinschool.com/data-science-course',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/job-assistance',
    destination: 'https://www.odinschool.com/data-science-course',
    permanent: true
  },
  {
    source: '/data-science/affiliate/demo-class/thank-you',
    destination: 'https://www.odinschool.com/data-science/demo-class/thank-you',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/bangalore-v3',
    destination: '/datascience-bootcamp/bangalore-v3-archived',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/hyderabad-v3',
    destination: '/datascience-bootcamp/hyderabad-v3-archived',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/mumbai-v3',
    destination: '/datascience-bootcamp/mumbai',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/bangalore-v3',
    destination: '/datascience-bootcamp/bangalore',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/hyderabad-v3',
    destination: '/datascience-bootcamp/hyderabad',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/pune-v3',
    destination: '/datascience-bootcamp/pune',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/mumbai-v3',
    destination: '/datascience-bootcamp/mumbai-v3-archived',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/chennai-v3',
    destination: '/datascience-bootcamp/chennai-v3-archived',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/pune-v3',
    destination: '/datascience-bootcamp/pune-v3-archived',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/chennai-v3',
    destination: '/datascience-bootcamp/chennai',
    permanent: true
  },
  {
    source: '/datascience-bootcamp-8',
    destination: 'http://20029733.hs-sites.com/datascience-bootcamp-8',
    permanent: true
  },
  {
    source: '/quotations-crm',
    destination: '/quotations',
    permanent: true
  },
  {
    source: '/performance-marketing-bootcamp',
    destination: '/digital-marketing/performance-marketing-bootcamp',
    permanent: true
  },
  {
    source: '/resume-builder/thank-you',
    destination: 'http://20029733.hs-sites.com/resume-builder/thank-you',
    permanent: true
  },
  {
    source: '/become-an-affiliate',
    destination: 'http://www.odinschool.com',
    permanent: true
  },
  {
    source: '/microsoft-azure-fundamentals-training-course',
    destination: 'http://www.greycampus.in/microsoft-azure-fundamentals-training-course',
    permanent: true
  },
  {
    source: '/datascience-bootcamp-10',
    destination: 'http://20029733.hs-sites.com/datascience-bootcamp-10',
    permanent: true
  },
  {
    source: '/web-developer-bootcamp',
    destination: 'https://www.odinschool.com/web-development-course',
    permanent: true
  },
  {
    source: '/digital-marketing',
    destination: 'https://www.odinschool.com/digital-marketing/performance-marketing-bootcamp',
    permanent: false
  },
  {
    source: '/thankyou',
    destination: 'https://www.odinschool.com/thank-you',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/scholarship/application/thank-you',
    destination: 'https://www.odinschool.com/data-science-bootcamp/scholarship/application/thank-you',
    permanent: true
  },
  {
    source: '/digital-marketing/performance-marketing-bootcamp',
    destination: '/digital-marketing/performance-marketing-bootcamp-archived',
    permanent: true
  },
  {
    source: '/digital-marketing/performance-marketing-bootcamp',
    destination: '/digital-marketing-course',
    permanent: true
  },
  {
    source: '/v3/datascience-bootcamp-with-job-assistance',
    destination: '/datascience-bootcamp-with-job-assistance',
    permanent: true
  },
  {
    source: '/data-science-salary-calculator-archived',
    destination: '/data-science-interview/thank-you',
    permanent: true
  },
  {
    source: '/verify-certificate',
    destination: 'https://go.odinschool.com/verify-certificate',
    permanent: true
  },
  {
    source: '/bootcamps/full-stack',
    destination: 'https://www.odinschool.com/web-development-course',
    permanent: true
  },
  {
    source: '/data-analyst-career-hackathon-odinschool',
    destination: '/masterclass/data-analyst-career-hackathon-hack-your-future',
    permanent: true
  },
  {
    source: '/varsity/tutorial',
    destination: '/varsity',
    permanent: true
  },
  {
    source: '/varsity/tutorial/sql-and-mysql/data-extraction-transformation-and-loading-etl',
    destination: 'https://www.odinschool.com/varsity/sql/data-extraction-transformation-and-loading-etl',
    permanent: true
  },
  {
    source: '/varsity/tutorial/sql/mysql-mastery/advanced-database-design-and-constraints',
    destination: 'https://www.odinschool.com/varsity/sql/advanced-database-design-and-constraints',
    permanent: true
  },
  {
    source: '/varsity/tutorial/sql/mysql-mastery/basic-mysql-operations',
    destination: 'https://www.odinschool.com/varsity/sql/basic-mysql-operations',
    permanent: true
  },
  {
    source: '/varsity/tutorial/sql/mysql-mastery/introduction-to-databases-sql-and-mysql',
    destination: 'https://www.odinschool.com/varsity/sql/introduction-to-databases-sql-and-mysql',
    permanent: true
  },
  {
    source: '/digital-marketing-bootcamp/application',
    destination: 'https://www.odinschool.com/digital-marketing-course',
    permanent: true
  },
  {
    source: '/data-science-bootcamp/checkout',
    destination: 'http://dev.odinschool.com/data-science-bootcamp/checkout',
    permanent: true
  },
  {
    source: '/dev/digital-marketing-bootcamp',
    destination: '/ds-demo',
    permanent: true
  },
  {
    source: '/dev/ds-demo',
    destination: '/datascience-bootcamp/demo-class',
    permanent: true
  },
  {
    source: '/sdk-integration',
    destination: 'http://www.odinschool.com/sdk-integration',
    permanent: true
  },
  {
    source: '/masterclass/digital-marketing-for-entrepreneurs',
    destination: 'https://www.odinschool.com/events',
    permanent: true
  },
  {
    source: '/varsity/big-data-fundamentals/introduction-to-mongo-db',
    destination: 'https://www.odinschool.com/varsity/big-data-fundamentals/fundamentals-of-mongodb',
    permanent: true
  },
  {
    source: '/software-engineering/react-web-development-course',
    destination: '/web-development-course',
    permanent: true
  },
  {
    source: '/datascience-bootcamp',
    destination: 'https://www.odinschool.com/data-science-course',
    permanent: true
  },
  {
    source: '/data-science/demo-class',
    destination: 'https://www.odinschool.com/events',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/data-science-course',
    destination: 'https://www.odinschool.com/data-science-course',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/brochure',
    destination: 'https://www.odinschool.com/data-science-course',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/hyderabad',
    destination: '/data-science-course/hyderabad',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/pune',
    destination: '/data-science-course/pune',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/chennai',
    destination: '/data-science-course/chennai',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/mumbai',
    destination: '/data-science-course/mumbai',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/bangalore',
    destination: '/data-science-course/bangalore',
    permanent: true
  },
  {
    source: '/data-science-course-0',
    destination: '/data-science-course-version-b-testing',
    permanent: true
  },
  {
    source: '/web-development-course',
    destination: '/web-development-course/oldpage',
    permanent: true
  },
  {
    source: '/rwd/checkout',
    destination: '/checkout/rwd',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/book-a-demo',
    destination: 'https://www.odinschool.com/events',
    permanent: true
  },
  {
    source: '/software-engineering/react-web-development-course/book-a-demo',
    destination: 'https://www.odinschool.com/events',
    permanent: true
  },
  {
    source: '/datascience-bootcamp/book-a-demo/register',
    destination: 'https://www.odinschool.com/events',
    permanent: true
  },
  {
    source: '/manipal-mba-course',
    destination: '/manipal-university-jaipur/mba',
    permanent: true
  },
  {
    source: '/manipal-university-jaipur/mba',
    destination: '/online-mba-manipal-university-jaipur',
    permanent: true
  },
  {
    source: '/manipal-university-jaipur/mca',
    destination: '/online-mca-manipal-university-jaipur',
    permanent: true
  },
  {
    source: '/online-mca-manipal-university-sikkim',
    destination: '/online-mca-sikkim-manipal-university',
    permanent: true
  },
  {
    source: '/digital-marketing-bootcamp',
    destination: 'https://www.odinschool.com/digital-marketing-course',
    permanent: true
  },
  {
    source: '/university-programs',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/os-microsoft-azure-900-webpage/checkout',
    destination: '/azure-course-with-az-900-certification/checkout',
    permanent: true
  },
  {
    source: '/bootcamps-drafted',
    destination: 'https://www.odinschool.com',
    permanent: true
  },
  {
    source: '/thank-you-26',
    destination: 'http://dev.odinschool.com/thank-you-26',
    permanent: true
  },
  {
    source: '/full-stack-foundation-bootcamp',
    destination: 'https://www.odinschool.com/full-stack-developer-course',
    permanent: true
  },
  {
    source: '/data-science-course-hello-bar',
    destination: '/data-science-course-vb',
    permanent: true
  },
  {
    source: '/data-science-course-vb',
    destination: '/data-science-course/vb',
    permanent: true
  },
  {
    source: '/online-mba-manipal-university-jaipur',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-mba-lovely-professional-university',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-mca-sikkim-manipal-university',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-mba-amity-university',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-mca-manipal-university-jaipur',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-mca-lovely-professional-university',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-bca-manipal-university-jaipur',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/online-bba-manipal-university-jaipur',
    destination: 'https://www.odinschool.com/',
    permanent: true
  },
  {
    source: '/checkout/iim',
    destination: '/business-analytics-course/checkout',
    permanent: true
  },
  {
    source: '/data-science-course/checkout',
    destination: '/data-science-course-usa/checkout',
    permanent: true
  },
  {
    source: '/checkout/usa',
    destination: '/data-science-course/checkout',
    permanent: true
  },
  {
    source: '/data-science-course-usa/checkout',
    destination: '/generative-ai-course-iitg-usa/checkout',
    permanent: true
  },
  {
    source: '/generative-ai-course-iitg-usa/checkout',
    destination: '/applied-generative-ai-online-course/checkout',
    permanent: true
  },
  {
    source: '/certified-business-accountant-course',
    destination: 'https://www.odinschool.com',
    permanent: true
  },
  {
    source: '/digital-marketing-course',
    destination: 'https://www.odinschool.com',
    permanent: true
  },
  {
    source: '/full-stack-developer-course',
    destination: 'https://www.odinschool.com',
    permanent: true
  },
  {
    source: '/azure-course-with-az-900-certification',
    destination: 'https://www.odinschool.com',
    permanent: true
  },
  {
    source: '/generative-ai-course-iitg/checkout-0',
    destination: '/certification-in-data-science-and-machine-learning/checkout',
    permanent: true
  },
  {
    source: '/certification-in-data-science-and-machine-learning/checkout',
    destination: '/certificate-program-in-data-science-and-machine-learning/checkout',
    permanent: true
  },
  {
    source: '/data-science-course-96',
    destination: 'http://dev.odinschool.com/data-science-course-96',
    permanent: true
  },
  {
    source: '/gen-ai-bootcamp/checkout',
    destination: '/generative-ai-bootcamp/checkout',
    permanent: true
  },
  {
    source: '/college-programs',
    destination: 'http://college.odinschool.com/college-programs',
    permanent: true
  },
  {
    source: '/college-programs',
    destination: '/',
    permanent: true
  },
  {
    source: '/data-analyst-course',
    destination: 'http://college.odinschool.com/data-analyst-course',
    permanent: true
  },
  {
    source: '/ai-analyst-course',
    destination: 'http://college.odinschool.com/ai-analyst-course',
    permanent: true
  },
  {
    source: '/investment-banking-and-finance-operations-elite-cours/checkout',
    destination: '/investment-banking-and-finance-operations-elite-course/checkout',
    permanent: true
  }
];

module.exports = redirects; 