/** @type {import('next').NextConfig} */
const redirects = [
  {
    source: "/scholarships",
    destination: "/college-scholarships",
    permanent: true
  },
  {
    source: "/academy/platform",
    destination: "https:/learn.odinschool.com/s/store/courses/description/academy",
    permanent: true
  },
  {
    source: "/for-corporate",
    destination: "/hire-odin-grades",
    permanent: true
  },
  {
    source: "/hire-odin-grades",
    destination: "/hire-odin-grads",
    permanent: true
  },
  {
    source: "/corder/order-details",
    destination: "/order/order-details",
    permanent: true
  },
  {
    source: "/online-datascience-bootcamp",
    destination: "/webinar-registernow",
    permanent: true
  },
  {
    source: "/webinar",
    destination: "/webinar-registernow",
    permanent: true
  },
  {
    source: "/terms-and-conditions",
    destination: "/terms-of-use",
    permanent: true
  },
  {
    source: "/full-stack-java-developer-bootcamp-application",
    destination: "/full-stack-java-developer-bootcamp/application",
    permanent: true
  },
  {
    source: "/ds-thank-you-not-eligible-0",
    destination: "/ds-thank-you-not-eligible",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/walk-ins",
    destination: "http:/20029733.hs-sites.com/bootcamp/walk-ins",
    permanent: true
  },
  {
    source: "/fs-workflow-eligibility",
    destination: "/fs-thankyou-not-eligible",
    permanent: true
  },
  {
    source: "/fs-thank-you-eligible",
    destination: "/full-stack-java-developer-bootcamp/application/thank-you",
    permanent: true
  },
  {
    source: "/fs-entrance-exam",
    destination: "/full-stack-java-developer-bootcamp/scholarship/application",
    permanent: true
  },
  {
    source: "/fs-thank-you-not-eligible",
    destination: "/full-stack-java-developer-bootcamp/application/thank-you/not-eligible",
    permanent: true
  },
  {
    source: "/ds-thank-you-eligible",
    destination: "/datascience-bootcamp/application/thank-you/eligible",
    permanent: true
  },
  {
    source: "/ds-thank-you-not-eligible",
    destination: "/datascience-bootcamp/application/thank-you/not-eligible",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/scholarship/application/thank-you-0",
    destination: "/order/order-details/thank-you",
    permanent: true
  },
  {
    source: "/application",
    destination: "/bootcamp/application",
    permanent: true
  },
  {
    source: "/test/bootcamp-demo-class",
    destination: "http:/20029733.hs-sites.com/bootcamp-demo-class",
    permanent: true
  },
  {
    source: "/bootcamp",
    destination: "/",
    permanent: true
  },
  {
    source: "/bootcamps",
    destination: "/bootcamps-drafted",
    permanent: true
  },
  {
    source: "/full-stack-java-developer/aptitude-test/thank-you",
    destination: "/job-fair/test-1/thank-you",
    permanent: true
  },
  {
    source: "/bootcamps/hyderabad",
    destination: "/test-bootcamps/hyderabad",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/booking",
    destination: "/datascience-bootcamp/2-days-pass",
    permanent: true
  },
  {
    source: "/job-fair/mediamint-technologies",
    destination: "/job-fair/ctrl-s",
    permanent: true
  },
  {
    source: "/open-scholarship/application",
    destination: "/data-science-course",
    permanent: true
  },
  {
    source: "/scholarship",
    destination: "/",
    permanent: true
  },
  {
    source: "/job-fair/face-academcy",
    destination: "/job-fair/face-academy",
    permanent: true
  },
  {
    source: "/job-fair/resume-video",
    destination: "/job-fair/resume-and-video",
    permanent: true
  },
  {
    source: "/webinar-registernow",
    destination: "/webinars",
    permanent: true
  },
  {
    source: "/zerocodehr",
    destination: "/jobs-zerocodehr",
    permanent: true
  },
  {
    source: "/jobs-zerocodehr",
    destination: "/jobs/zerocodehr",
    permanent: true
  },
  {
    source: "/job-portal-table",
    destination: "/jobs",
    permanent: true
  },
  {
    source: "/full-stack-java-developer-bootcamp/scholarship",
    destination: "/full-stack-java-developer-bootcamp",
    permanent: true
  },
  {
    source: "/odintalk",
    destination: "/odintalks",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/form",
    destination: "/datascience-bootcamp-with-job-assistance",
    permanent: true
  },
  {
    source: "/blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python",
    destination: "https:/www.greycampus.com/blog/data-science/beautifulsoup-a-step-by-step-guide-to-data-scraping-with-python",
    permanent: true
  },
  {
    source: "/business-analytics/application",
    destination: "/datascience-application",
    permanent: true
  },
  {
    source: "/data-science-interview",
    destination: "/data-science-interview/live",
    permanent: true
  },
  {
    source: "/data-science-interview/start",
    destination: "/data-science-interview",
    permanent: true
  },
  {
    source: "/open-campus",
    destination: "/opencampus",
    permanent: true
  },
  {
    source: "/datascience-bootcamp-with-job-assistance-0",
    destination: "/datascience-bootcamp/job-assistance",
    permanent: true
  },
  {
    source: "/channel-partner",
    destination: "/",
    permanent: true
  },
  {
    source: "/opecampus",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/blog/quality-management/a-good-business-requirements-document-puts-you-ahead-of-the-game",
    destination: "https:/www.greycampus.com/blog/quality-management/a-good-business-requirements-document-puts-you-ahead-of-the-game",
    permanent: true
  },
  {
    source: "/blog/latest-updates/women-in-tech-scholarship",
    destination: "https:/www.greycampus.com/blog/latest-updates/women-in-tech-scholarship",
    permanent: true
  },
  {
    source: "/opecampus/ms-excel/mos-excel-2007-exam",
    destination: "https:/www.greycampus.com/opencampus/ms-excel/mos-excel-2007-exam",
    permanent: true
  },
  {
    source: "/opecampus/ms-excel/mos-excel-2013-exam",
    destination: "https:/www.greycampus.com/opencampus/ms-excel/mos-excel-2013-exam",
    permanent: true
  },
  {
    source: "/blog/hadoop-administrator/eligibility-criteria-for-hadoop-administrator",
    destination: "/learning-hub/hadoop-administrator/eligibility-criteria-for-hadoop-administrator",
    permanent: true
  },
  {
    source: "/become-an-afffiliate/application",
    destination: "/become-an-affiliate/application",
    permanent: true
  },
  {
    source: "/learning-hub/installation",
    destination: "/learning-hub/ruby/installation",
    permanent: true
  },
  {
    source: "/blog/top-25-tableau-interview-questions-and-answers-for-2022",
    destination: "/blog/top-25-tableau-interview-questions-and-answers-for-2023",
    permanent: true
  },
  {
    source: "/learnin-hub",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/full-stack-java-developer-bootcamp",
    destination: "/full-stack-software-development-bootcamp",
    permanent: true
  },
  {
    source: "/opencampus/ms-excel/mos-certification-exam-format",
    destination: "/learning-hub/ms-excel/mos-certification-exam-format",
    permanent: true
  },
  {
    source: "/opencampus/ms-excel/mos-excel-2007-exam",
    destination: "/learning-hub/ms-excel/mos-excel-2007-exam",
    permanent: true
  },
  {
    source: "/opencampus/ms-excel/mos-excel-2010-exam",
    destination: "/learning-hub/ms-excel/mos-excel-2010-exam",
    permanent: true
  },
  {
    source: "/opencampus/ms-excel/mos-excel-2013-exam",
    destination: "/learning-hub/ms-excel/mos-excel-2013-exam",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/k-fold-cross-validation",
    destination: "/learning-hub/machine-learning/k-fold-cross-validation",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/k-nearest-neighbour",
    destination: "/learning-hub/machine-learning/k-nearest-neighbour",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/perceptron-vs-svm",
    destination: "/learning-hub/machine-learning/perceptron-vs-svm",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/supervised-and-unsupervised-learning",
    destination: "/learning-hub/machine-learning/supervised-and-unsupervised-learning",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/why-do-linear-models-fail",
    destination: "/learning-hub/machine-learning/why-do-linear-models-fail",
    permanent: true
  },
  {
    source: "/opencampus/data-analytics/data-analytics-explosion",
    destination: "/learning-hub/data-analytics/data-analytics-explosion",
    permanent: true
  },
  {
    source: "/opencampus/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry",
    destination: "/learning-hub/data-analytics/data-analytics-redefining-the-process-in-healthcare-industry",
    permanent: true
  },
  {
    source: "/opencampus/data-analytics/evolution-of-analytics",
    destination: "/learning-hub/data-analytics/evolution-of-analytics",
    permanent: true
  },
  {
    source: "/opencampus/data-analytics/finding-your-path-in-data-analytics",
    destination: "/learning-hub/data-analytics/finding-your-path-in-data-analytics",
    permanent: true
  },
  {
    source: "/opencampus/data-analytics/what-is-analytics",
    destination: "/learning-hub/data-analytics/what-is-analytics",
    permanent: true
  },
  {
    source: "/opencampus/data-analytics/perspective-of-a-consultant-to-data-analytics",
    destination: "/learning-hub/data-analytics/perspective-of-a-consultant-to-data-analytics",
    permanent: true
  },
  {
    source: "/opencampus/ms-excel/microsoft-office-specialist",
    destination: "/learning-hub/ms-excel/microsoft-office-specialist",
    permanent: true
  },
  {
    source: "/opencampus/ms-excel/what-is-ms-excel",
    destination: "/learning-hub/ms-excel/what-is-ms-excel",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/application-of-machine-learning",
    destination: "/learning-hub/machine-learning/application-of-machine-learning",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/classification-algorithms",
    destination: "/learning-hub/machine-learning/classification-algorithms",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/confusion-matrix",
    destination: "/learning-hub/machine-learning/confusion-matrix",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/decision-tree-model",
    destination: "/learning-hub/machine-learning/decision-tree-model",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/dimensionality-reduction-pca",
    destination: "/learning-hub/machine-learning/dimensionality-reduction-pca",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/errors-overfitting",
    destination: "/learning-hub/machine-learning/errors-overfitting",
    permanent: true
  },
  {
    source: "/demo-class/thank-you",
    destination: "/data-science/affiliate/demo-class/thank-you",
    permanent: true
  },
  {
    source: "/odintalk/vishal-jain-0",
    destination: "/odintalk/anirudh-kasturi",
    permanent: true
  },
  {
    source: "/blog/others/top-21-business-analyst-interview-questions-and-answers",
    destination: "/blog/data-science/top-21-business-analyst-interview-questions-and-answers",
    permanent: true
  },
  {
    source: "/blog/top-20-questions-asked-during-an-interview-for-a-data-analyst-position",
    destination: "/blog/big-data/top-20-questions-asked-during-an-interview-for-a-data-analyst-position",
    permanent: true
  },
  {
    source: "/corporate/blogs/how-to-conduct-a-skills-gap-analysis-a-step-by-step-guide",
    destination: "/corporate/blogs/for-corporate/how-to-conduct-a-skills-gap-analysis-a-step-by-step-guide",
    permanent: true
  },
  {
    source: "/odintalk/vishal-jain",
    destination: "/odintalks/vishal-jain",
    permanent: true
  },
  {
    source: "/odintalk/sharthakacharjee",
    destination: "/odintalks/sharthakacharjee",
    permanent: true
  },
  {
    source: "/odintalk/sushanthgaonkar",
    destination: "/odintalks/sushanthgaonkar",
    permanent: true
  },
  {
    source: "/odintalk/krishnakumar",
    destination: "/odintalks/krishnakumar",
    permanent: true
  },
  {
    source: "/corporate-training",
    destination: "/corporate/training",
    permanent: true
  },
  {
    source: "/hire-odin-grads",
    destination: "/corporate/hire-odin-grads",
    permanent: true
  },
  {
    source: "/odintalk/vikramduggal",
    destination: "/odintalks/vikramduggal",
    permanent: true
  },
  {
    source: "/data-science",
    destination: "/datascience-bootcamp",
    permanent: true
  },
  {
    source: "/odintalk/ajay-malgaonkar",
    destination: "/odintalks/ajay-malgaonkar",
    permanent: true
  },
  {
    source: "/odintalk/shashank-mishra",
    destination: "/odintalks/shashank-mishra",
    permanent: true
  },
  {
    source: "/odintalk/raam-gururanjan",
    destination: "/odintalks/raam-gururanjan",
    permanent: true
  },
  {
    source: "/odintalk/anirudh-kasturi",
    destination: "/odintalks/anirudh-kasturi",
    permanent: true
  },
  {
    source: "/blog/what-is-data-modelling",
    destination: "/blog/data-science/what-is-data-modelling",
    permanent: true
  },
  {
    source: "/blog/top-25-tableau-interview-questions-and-answers-for-2023",
    destination: "/blog/data-science/top-25-tableau-interview-questions-and-answers-for-2023",
    permanent: true
  },
  {
    source: "/blog/data-science-roadmap-for-beginners",
    destination: "/blog/data-science/data-science-roadmap-for-beginners",
    permanent: true
  },
  {
    source: "/blog/data-analyst-job-description-responsibilities-skills-required-and-salary-trends",
    destination: "/blog/data-science/data-analyst-job-description-responsibilities-skills-required-and-salary-trends",
    permanent: true
  },
  {
    source: "/blog/top-20-questions-to-prepare-for-your-entry-level-data-analyst-interview",
    destination: "/blog/data-science/top-20-questions-to-prepare-for-your-entry-level-data-analyst-interview",
    permanent: true
  },
  {
    source: "/blog/engineers-need-to-be-data-savvy-now-more-than-ever",
    destination: "/blog/data-science/engineers-need-to-be-data-savvy-now-more-than-ever",
    permanent: true
  },
  {
    source: "/blog/getting-started-in-data-science-here-are-some-key-areas-you-can-specialise-in",
    destination: "/blog/data-science/getting-started-in-data-science-here-are-some-key-areas-you-can-specialise-in",
    permanent: true
  },
  {
    source: "/blog/data-science-the-cutting-edge-technology-at-the-climate-crisis-warfront",
    destination: "/blog/data-science/data-science-the-cutting-edge-technology-at-the-climate-crisis-warfront",
    permanent: true
  },
  {
    source: "/blog/top-20-data-science-interview-questions",
    destination: "/blog/data-science/top-20-data-science-interview-questions",
    permanent: true
  },
  {
    source: "/blog/why-you-should-prioritize-skills-over-degrees-in-your-data-science",
    destination: "/blog/data-science/why-you-should-prioritize-skills-over-degrees-in-your-data-science",
    permanent: true
  },
  {
    source: "/blog/5-ways-to-gain-hands-on-experience-in-data-science",
    destination: "/blog/data-science/5-ways-to-gain-hands-on-experience-in-data-science",
    permanent: true
  },
  {
    source: "/blog/optimize-your-resume-for-your-data-science-career-with-these-tips",
    destination: "/blog/data-science/optimize-your-resume-for-your-data-science-career-with-these-tips",
    permanent: true
  },
  {
    source: "/blog/making-a-career-change-to-data-science-with-limited-or-no-coding-skills-here-are-some-tips",
    destination: "/blog/data-science/making-a-career-change-to-data-science-with-limited-or-no-coding-skills-here-are-some-tips",
    permanent: true
  },
  {
    source: "/blog/here-are-some-tips-to-prepare-for-your-next-data-science-interview",
    destination: "/blog/data-science/here-are-some-tips-to-prepare-for-your-next-data-science-interview",
    permanent: true
  },
  {
    source: "/blog/the-story-of-bill-peace-how-a-former-security-professional-uses-ai-to-combat-human-trafficking",
    destination: "/blog/data-science/the-story-of-bill-peace-how-a-former-security-professional-uses-ai-to-combat-human-trafficking",
    permanent: true
  },
  {
    source: "/blog/nats-world-how-python-changed-a-boys-life",
    destination: "/blog/data-science/nats-world-how-python-changed-a-boys-life",
    permanent: true
  },
  {
    source: "/blog/heres-how-you-can-get-a-job-in-data-science",
    destination: "/blog/data-science/heres-how-you-can-get-a-job-in-data-science",
    permanent: true
  },
  {
    source: "/blog/debunking-data-science-myths-5-common-misconceptions-to-unlearn",
    destination: "/blog/data-science/debunking-data-science-myths-5-common-misconceptions-to-unlearn",
    permanent: true
  },
  {
    source: "/blog/land-your-first-data-science-job-with-these-8-tips",
    destination: "/blog/data-science/land-your-first-data-science-job-with-these-8-tips",
    permanent: true
  },
  {
    source: "/blog/5-signs-you-need-a-career-change",
    destination: "/blog/data-science/5-signs-you-need-a-career-change",
    permanent: true
  },
  {
    source: "/blog/quality-management/types-of-hypothesis-testing",
    destination: "/blog/data-science/types-of-hypothesis-testing",
    permanent: true
  },
  {
    source: "/blog/emerging-technologies/top-8-trending-technologies-taking-the-world-by-storm",
    destination: "/blog/data-science/top-8-trending-technologies-taking-the-world-by-storm",
    permanent: true
  },
  {
    source: "/blog/information-technology/must-practice-software-testing-interview-questions-before-your-interview",
    destination: "/blog/programming/must-practice-software-testing-interview-questions-before-your-interview",
    permanent: true
  },
  {
    source: "/blog/others/20-selenium-interview-questions-and-answers-you-should-prepare",
    destination: "/blog/programming/20-selenium-interview-questions-and-answers-you-should-prepare",
    permanent: true
  },
  {
    source: "/blog/others/top-30-linux-interview-questions-and-answers",
    destination: "/blog/programming/top-30-linux-interview-questions-and-answers",
    permanent: true
  },
  {
    source: "/blog/others/the-difference-between-a-resume-and-a-cv-curriculum-vitae",
    destination: "/blog/data-science/the-difference-between-a-resume-and-a-cv-curriculum-vitae",
    permanent: true
  },
  {
    source: "/blog/it-service-management/itil-interview-questions",
    destination: "/blog/programming/itil-interview-questions",
    permanent: true
  },
  {
    source: "/blog/it-service-management/how-important-is-itil-for-business-analysts",
    destination: "/blog/programming/how-important-is-itil-for-business-analysts",
    permanent: true
  },
  {
    source: "/blog/latest-updates/interview-questions-and-answers-informatica-powercenter",
    destination: "/blog/data-science/interview-questions-and-answers-informatica-powercenter",
    permanent: true
  },
  {
    source: "/blog/cloud/top-33-frequently-asked-devops-interview-questions-and-answers",
    destination: "/blog/cloud-computing/top-33-frequently-asked-devops-interview-questions-and-answers",
    permanent: true
  },
  {
    source: "/blog/it-service-management/itil-service-life-cycle",
    destination: "/blog/programming/itil-service-life-cycle",
    permanent: true
  },
  {
    source: "/blog/information-security/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
    destination: "/blog/programming/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
    permanent: true
  },
  {
    source: "/blog/quality-management/the-robots-are-coming-will-process-excellence-survive",
    destination: "/blog/programming/the-robots-are-coming-will-process-excellence-survive",
    permanent: true
  },
  {
    source: "/blog/programming/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
    destination: "/blog/data-science/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity",
    permanent: true
  },
  {
    source: "/blog/it-service-management/itil-service-design-overview-principles-objectives",
    destination: "/blog/programming/itil-service-design-overview-principles-objectives",
    permanent: true
  },
  {
    source: "/blog/quality-management/better-software-development-and-testing-with-the-defect-bug-life-cycle",
    destination: "/blog/programming/better-software-development-and-testing-with-the-defect-bug-life-cycle",
    permanent: true
  },
  {
    source: "/blog/cloud/top-10-reasons-to-get-an-aws-certification",
    destination: "/blog/cloud-computing/top-10-reasons-to-get-an-aws-certification",
    permanent: true
  },
  {
    source: "/blog/it-service-management/itil-service-strategy-processes",
    destination: "/blog/programming/itil-service-strategy-processes",
    permanent: true
  },
  {
    source: "/blog/project-management/top-3-agile-software-development-methods",
    destination: "/blog/programming/top-3-agile-software-development-methods",
    permanent: true
  },
  {
    source: "/blog/workplace-tools/five-excellent-basic-formatting-tips-on-ms-excel",
    destination: "/blog/others/five-excellent-basic-formatting-tips-on-ms-excel",
    permanent: true
  },
  {
    source: "/blog/cloud/10-cutting-edge-cloud-services-offered-by-azure-in-2020",
    destination: "/blog/cloud-computing/10-cutting-edge-cloud-services-offered-by-azure-in-2020",
    permanent: true
  },
  {
    source: "/blog/project-management/business-analysts-and-project-managers-a-comparison-of-their-roles-and-responsibilities",
    destination: "/blog/data-science/business-analysts-and-project-managers-a-comparison-of-their-roles-and-responsibilities",
    permanent: true
  },
  {
    source: "/corporate/training",
    destination: "/corporate/enterprise",
    permanent: true
  },
  {
    source: "/data-science/master-class/thank-you",
    destination: "/master-class/thank-you",
    permanent: true
  },
  {
    source: "/master-class/thank-you",
    destination: "/masterclass/thank-you",
    permanent: true
  },
  {
    source: "/test-header-page",
    destination: "/resume-builder",
    permanent: true
  },
  {
    source: "/masterclass/analyzing-loan-application-data-using-pytho",
    destination: "/masterclass/analyzing-loan-application-data-using-python",
    permanent: true
  },
  {
    source: "/masterclass/demystifying-deep-learning-a-visual-journey",
    destination: "/events",
    permanent: true
  },
  {
    source: "/full-stack-java-developer-bootcamp/application/thank-you",
    destination: "/full-stack-software-development-bootcamp/application/thank-you/eligible",
    permanent: true
  },
  {
    source: "/full-stack-java-developer-bootcamp/application/thank-you/not-eligible",
    destination: "/full-stack-software-development-bootcamp/application/thank-you/not-eligible",
    permanent: true
  },
  {
    source: "/enterprise",
    destination: "/corporate/enterprise",
    permanent: true
  },
  {
    source: "/big-data-hadoop-developer-training-instructor-led",
    destination: "/",
    permanent: true
  },
  {
    source: "/bootcamps-hyderabad",
    destination: "/datascience-bootcamp",
    permanent: true
  },
  {
    source: "/masterclass/paid/thankyou",
    destination: "/masterclass/paid/thank-you",
    permanent: true
  },
  {
    source: "/opencampus/big-data-developer/what-is-big-data",
    destination: "/learning-hub/big-data-developer/what-is-big-data",
    permanent: true
  },
  {
    source: "/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession",
    destination: "/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession/22-feb-2023",
    permanent: true
  },
  {
    source: "/college/webinar/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession/22-feb-2023",
    destination: "/college/webinar/22-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession",
    permanent: true
  },
  {
    source: "/college/masterclass/thank-you",
    destination: "/college/webinar/thank-you",
    permanent: true
  },
  {
    source: "/opencampus/hadoop-administrator/what-is-hadoop",
    destination: "/learning-hub/hadoop-administrator/what-is-hadoop",
    permanent: true
  },
  {
    source: "/college/webinar/23-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession-0",
    destination: "/college/webinar/23-feb-2023/how-to-get-a-high-paying-job-as-a-fresher-even-during-a-recession",
    permanent: true
  },
  {
    source: "/opencampus/machine-learning/what-is-machine-learning",
    destination: "/learning-hub/machine-learning/what-is-machine-learning",
    permanent: true
  },
  {
    source: "/business-analytics-bootcamp",
    destination: "/business-analytics-bootcamp-old",
    permanent: true
  },
  {
    source: "/odinsights",
    destination: "/events",
    permanent: true
  },
  {
    source: "/datascience-bootcamp-v3",
    destination: "/datascience-bootcamp",
    permanent: true
  },
  // {
  //   source: "/masterclass",
  //   destination: "/events",
  //   permanent: true
  // },
  {
    source: "/full-stack-software-development-bootcamp/application/thank-you/not-eligible/v3",
    destination: "/full-stack-software-development-bootcamp/application/thank-you/not-eligible",
    permanent: true
  },
  {
    source: "/v3-contact-us",
    destination: "/contact-us",
    permanent: true
  },
  {
    source: "/v3-about-us",
    destination: "/about-us",
    permanent: true
  },
  {
    source: "/v3-hire-from-us",
    destination: "/corporate/hire-odin-grads",
    permanent: true
  },
  {
    source: "/v3-home",
    destination: "/",
    permanent: true
  },
  {
    source: "/terms-of-use-v3",
    destination: "/terms-of-use",
    permanent: true
  },
  {
    source: "/privacy-policy-v3",
    destination: "/privacy-policy",
    permanent: true
  },
  {
    source: "/v3-faqs",
    destination: "/faqs",
    permanent: true
  },
  {
    source: "/sitemap",
    destination: "/m22/sitemap",
    permanent: true
  },
  {
    source: "/sitemap-v3",
    destination: "/sitemap",
    permanent: true
  },
  {
    source: "/success-stories-v3",
    destination: "/success-stories",
    permanent: true
  },
  {
    source: "/business-analytics-bootcamp",
    destination: "/datascience-bootcamp",
    permanent: true
  },
  {
    source: "/v3-careers",
    destination: "/careers",
    permanent: true
  },
  {
    source: "/fullstack-category",
    destination: "/full-stack-software-development-bootcamp",
    permanent: true
  },
  {
    source: "/corporate/enterprise",
    destination: "/training-solution",
    permanent: true
  },
  {
    source: "/corporate/hire-odin-grads",
    destination: "/talent-solution",
    permanent: true
  },
  {
    source: "/full-stack-software-development-bootcamp",
    destination: "/full-stack-developer-course",
    permanent: true
  },
  {
    source: "/data-science-salary-calculator",
    destination: "/data-science-salary-calculator-archived",
    permanent: true
  },
  {
    source: "/data-science-salary-calculator",
    destination: "/data-science/salary-calculator",
    permanent: true
  },
  {
    source: "/opencampus",
    destination: "http:/hubspot.greycampus.com/gc/opencampus",
    permanent: true
  },
  {
    source: "/careers/application/thank-you/eligible",
    destination: "/careers/application",
    permanent: true
  },
  {
    source: "/thank-you-0",
    destination: "/careerthank-you",
    permanent: true
  },
  {
    source: "/careerthank-you",
    destination: "/careers/application/thank-you",
    permanent: true
  },
  {
    source: "/checkout-ab",
    destination: "/checkout",
    permanent: true
  },
  {
    source: "/rahul-saha",
    destination: "/odintalks/rahul-saha",
    permanent: true
  },
  {
    source: "/data-science/affiliate/demo-class",
    destination: "/data-science/demo-class",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/affiliate/application/thank-you/eligible",
    destination: "/data-science-course",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/job-assistance",
    destination: "/data-science-course",
    permanent: true
  },
  {
    source: "/data-science/affiliate/demo-class/thank-you",
    destination: "/data-science/demo-class/thank-you",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/bangalore-v3",
    destination: "/datascience-bootcamp/bangalore-v3-archived",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/hyderabad-v3",
    destination: "/datascience-bootcamp/hyderabad-v3-archived",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/mumbai-v3",
    destination: "/datascience-bootcamp/mumbai",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/bangalore-v3",
    destination: "/datascience-bootcamp/bangalore",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/hyderabad-v3",
    destination: "/datascience-bootcamp/hyderabad",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/pune-v3",
    destination: "/datascience-bootcamp/pune",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/mumbai-v3",
    destination: "/datascience-bootcamp/mumbai-v3-archived",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/chennai-v3",
    destination: "/datascience-bootcamp/chennai-v3-archived",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/pune-v3",
    destination: "/datascience-bootcamp/pune-v3-archived",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/chennai-v3",
    destination: "/datascience-bootcamp/chennai",
    permanent: true
  },
  {
    source: "/datascience-bootcamp-8",
    destination: "http:/20029733.hs-sites.com/datascience-bootcamp-8",
    permanent: true
  },
  {
    source: "/quotations-crm",
    destination: "/quotations",
    permanent: true
  },
  {
    source: "/performance-marketing-bootcamp",
    destination: "/digital-marketing/performance-marketing-bootcamp",
    permanent: true
  },
  {
    source: "/resume-builder/thank-you",
    destination: "http:/20029733.hs-sites.com/resume-builder/thank-you",
    permanent: true
  },
  {
    source: "/become-an-affiliate",
    destination: "/",
    permanent: true
  },
  {
    source: "/microsoft-azure-fundamentals-training-course",
    destination: "http:/www.greycampus.in/microsoft-azure-fundamentals-training-course",
    permanent: true
  },
  {
    source: "/datascience-bootcamp-10",
    destination: "http:/20029733.hs-sites.com/datascience-bootcamp-10",
    permanent: true
  },
  {
    source: "/web-developer-bootcamp",
    destination: "/web-development-course",
    permanent: true
  },
  {
    source: "/digital-marketing",
    destination: "/digital-marketing/performance-marketing-bootcamp",
    permanent: true
  },
  {
    source: "/blog/karthik",
    destination: "/blog/from-logistics-to-data-analysis-karthiks-career-transition-to-global-transportation-analyst",
    permanent: true
  },
  {
    source: "/thankyou",
    destination: "/thank-you",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/scholarship/application/thank-you",
    destination: "/data-science-bootcamp/scholarship/application/thank-you",
    permanent: true
  },
  {
    source: "/digital-marketing/performance-marketing-bootcamp",
    destination: "/digital-marketing/performance-marketing-bootcamp-archived",
    permanent: true
  },
  {
    source: "/digital-marketing/performance-marketing-bootcamp",
    destination: "/digital-marketing-course",
    permanent: true
  },
  {
    source: "/blog/are-data-science-courses-affordable-in-india",
    destination: "/blog/why-is-data-science-always-in-demand",
    permanent: true
  },
  {
    source: "/v3/datascience-bootcamp-with-job-assistance",
    destination: "/datascience-bootcamp-with-job-assistance",
    permanent: true
  },
  {
    source: "/blog/a-blueprint-for-data-science-career-advancement",
    destination: "/blog/data-science-roadmap-2024-everything-you-should-know",
    permanent: true
  },
  {
    source: "/data-science-salary-calculator-archived",
    destination: "/data-science-interview/thank-you",
    permanent: true
  },
  {
    source: "/verify-certificate",
    destination: "https:/go.odinschool.com/verify-certificate",
    permanent: true
  },
  {
    source: "/bootcamps/full-stack",
    destination: "/web-development-course",
    permanent: true
  },
  {
    source: "/data-analyst-career-hackathon-odinschool",
    destination: "/masterclass/data-analyst-career-hackathon-hack-your-future",
    permanent: true
  },
  {
    source: "/blog/data-science-pay-after-placement-programs-5-top-risks",
    destination: "/blog/data-science-pay-after-placement-pros-and-cons",
    permanent: true
  },
  {
    source: "/blog/web-developer-salary-in-india-2024-insights-for-freshers-experienced",
    destination: "/blog/web-development-salary-in-india-2024-insights-for-freshers-experienced",
    permanent: true
  },
  {
    source: "/blog/performance-marketing-role-in-the-great-indian-festival-and-big-billion-days",
    destination: "/blog/digital-marketing-in-the-great-indian-festival-and-big-billion-days",
    permanent: true
  },
  {
    source: "/varsity/tutorial",
    destination: "/varsity",
    permanent: true
  },
  {
    source: "/blog/data-science-driving-constant-gratification-in-2023",
    destination: "/blog/data-science-driving-constant-gratification",
    permanent: true
  },
  {
    source: "/varsity/tutorial/sql-and-mysql/data-extraction-transformation-and-loading-etl",
    destination: "/varsity/sql/data-extraction-transformation-and-loading-etl",
    permanent: true
  },
  {
    source: "/varsity/tutorial/sql/mysql-mastery/advanced-database-design-and-constraints",
    destination: "/varsity/sql/advanced-database-design-and-constraints",
    permanent: true
  },
  {
    source: "/varsity/tutorial/sql/mysql-mastery/basic-mysql-operations",
    destination: "/varsity/sql/basic-mysql-operations",
    permanent: true
  },
  {
    source: "/varsity/tutorial/sql/mysql-mastery/introduction-to-databases-sql-and-mysql",
    destination: "/varsity/sql/introduction-to-databases-sql-and-mysql",
    permanent: true
  },
  {
    source: "/digital-marketing-bootcamp/application",
    destination: "/digital-marketing-course",
    permanent: true
  },
  {
    source: "/blog/the-symbiosis-of-data-science-and-artificial-intelligence",
    destination: "/blog/data-science-and-artificial-intelligence-partners-in-tech-innovation",
    permanent: true
  },
  {
    source: "/data-science-bootcamp/checkout",
    destination: "/data-science-bootcamp/checkout",
    permanent: true
  },
  {
    source: "/blog/shashanks-journey-through-start-ups-and-data-science-discoveries",
    destination: "/blog/how-shashank-rebooted-his-career-with-data-science",
    permanent: true
  },
  {
    source: "/digital-marketing-bootcamp",
    destination: "/ds-demo",
    permanent: true
  },
  {
    source: "/ds-demo",
    destination: "/datascience-bootcamp/demo-class",
    permanent: true
  },
  {
    source: "/blog/why-is-data-science-always-in-demand&gt;",
    destination: "/blog/why-is-data-science-always-in-demand",
    permanent: true
  },
  {
    source: "/sdk-integration",
    destination: "/sdk-integration",
    permanent: true
  },
  {
    source: "/masterclass/digital-marketing-for-entrepreneurs",
    destination: "/events",
    permanent: true
  },
  {
    source: "/blog/13-most-in-demand-data-science-skills-in-2023",
    destination: "/blog/13-most-in-demand-data-science-skills",
    permanent: true
  },
  {
    source: "/blog/reshaping-destiny-soniyas-inspiring-journey-from-hr-to-data-science",
    destination: "/blog/tag/success-story",
    permanent: true
  },
  {
    source: "/blog/saravanas-journey-of-learning-problems-and-a-career-change",
    destination: "/blog/saravanas-journey-of-learning-challenges-and-a-career-change",
    permanent: true
  },
  {
    source: "/learning-hub/tag/big-data-developer",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/learning-hub/tag/machine-learning",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/learning-hub/tag/php",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/learning-hub/tag/ruby",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/learning-hub/tag/hadoop-administrator",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/learning-hub/tag/data-analytics",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/learning-hub/tag/ms-excel",
    destination: "/learning-hub",
    permanent: true
  },
  {
    source: "/varsity/big-data-fundamentals/introduction-to-mongo-db",
    destination: "/varsity/big-data-fundamentals/fundamentals-of-mongodb",
    permanent: true
  },
  {
    source: "/blog/lights-camera-data-an-actors-transformation-into-a-lead-analyst",
    destination: "/blog/lights-camera-data-an-actor-transformation-into-a-lead-analyst",
    permanent: true
  },
  {
    source: "/software-engineering/react-web-development-course",
    destination: "/web-development-course",
    permanent: true
  },
  {
    source: "/datascience-bootcamp",
    destination: "/data-science-course",
    permanent: true
  },
  {
    source: "/data-science/demo-class",
    destination: "/events",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/data-science-course",
    destination: "/data-science-course",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/brochure",
    destination: "/data-science-course",
    permanent: true
  },
  {
    source: "/blog/support-role-to-bda-to-sr.-data-analyst-at-sony-with-15-lpa",
    destination: "/blog/support-role-to-bda-to-sr.-data-analyst-at-sony-with-huge-salary",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/hyderabad",
    destination: "/data-science-course/hyderabad",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/pune",
    destination: "/data-science-course/pune",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/chennai",
    destination: "/data-science-course/chennai",
    permanent: true
  },

  {
    source: "/datascience-bootcamp/bangalore",
    destination: "/data-science-course/bangalore",
    permanent: true
  },
  {
    source: "/data-science-course-0",
    destination: "/data-science-course-version-b-testing",
    permanent: true
  },
  {
    source: "/web-development-course",
    destination: "/web-development-course/oldpage",
    permanent: true
  },
  {
    source: "/rwd/checkout",
    destination: "/checkout/rwd",
    permanent: true
  },
  {
    source: "/software-engineering/react-web-development-course/book-a-demo",
    destination: "/events",
    permanent: true
  },
  {
    source: "/datascience-bootcamp/book-a-demo/register",
    destination: "/events",
    permanent: true
  },
  {
    source: "/blog/unlocking-vast-potential-full-stack-development-opportunities-in-the-mobile-market",
    destination: "/blog/unlocking-web-development-opportunities-in-the-mobile-market",
    permanent: true
  },
  {
    source: "/blog/enhancing-mental-health-assessment-through-full-stack-development-bridging-technology-and-mental-well-being",
    destination: "/blog/enhancing-mental-health-assessment-through-web-development",
    permanent: true
  },
  {
    source: "/blog/behavioural-data-science-interview-questions-are-not-hr-questions",
    destination: "/blog/master-behavioral-interview-questions-data-science-interview",
    permanent: true
  },
  {
    source: "/manipal-mba-course",
    destination: "/manipal-university-jaipur/mba",
    permanent: true
  },
  {
    source: "/manipal-mca-course",
    destination: "/manipal-university-jaipur/mca",
    permanent: true
  },
  {
    source: "/manipal-university-jaipur/mba",
    destination: "/online-mba-manipal-university-jaipur",
    permanent: true
  },
  {
    source: "/manipal-university-jaipur/mca",
    destination: "/online-mca-manipal-university-jaipur",
    permanent: true
  },
  {
    source: "/online-mca-manipal-university-sikkim",
    destination: "/online-mca-sikkim-manipal-university",
    permanent: true
  },
  {
    source: "/digital-marketing-bootcamp",
    destination: "/digital-marketing-course",
    permanent: true
  },
  {
    source: "/university-programs",
    destination: "/",
    permanent: true
  },
  {
    source: "/os-microsoft-azure-900-webpage/checkout",
    destination: "/azure-course-with-az-900-certification/checkout",
    permanent: true
  },
  {
    source: "/bootcamps-drafted",
    destination: "/",
    permanent: true
  },
  {
    source: "/thank-you-26",
    destination: "/thank-you-26",
    permanent: true
  },
  {
    source: "/full-stack-foundation-bootcamp",
    destination: "/full-stack-developer-course",
    permanent: true
  },
  {
    source: "/data-science-course-hello-bar",
    destination: "/data-science-course-vb",
    permanent: true
  },
  {
    source: "/data-science-course-vb",
    destination: "/data-science-course/vb",
    permanent: true
  },
  {
    source: "/online-mba-manipal-university-jaipur",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-mba-lovely-professional-university",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-mca-sikkim-manipal-university",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-mba-amity-university",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-mca-manipal-university-jaipur",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-mca-lovely-professional-university",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-bca-manipal-university-jaipur",
    destination: "/",
    permanent: true
  },
  {
    source: "/online-bba-manipal-university-jaipur",
    destination: "/",
    permanent: true
  },
  {
    source: "/checkout/iim",
    destination: "/business-analytics-course/checkout",
    permanent: true
  },
  {
    source: "/data-science-course/checkout",
    destination: "/data-science-course-usa/checkout",
    permanent: true
  },
  {
    source: "/checkout/usa",
    destination: "/data-science-course/checkout",
    permanent: true
  },
  {
    source: "/data-science-course-usa/checkout",
    destination: "/generative-ai-course-iitg-usa/checkout",
    permanent: true
  },
  {
    source: "/generative-ai-course-iitg-usa/checkout",
    destination: "/applied-generative-ai-online-course/checkout",
    permanent: true
  },
  {
    source: "/certified-business-accountant-course",
    destination: "/",
    permanent: true
  },
  {
    source: "/digital-marketing-course",
    destination: "/",
    permanent: true
  },
  {
    source: "/full-stack-developer-course",
    destination: "/",
    permanent: true
  },
  {
    source: "/azure-course-with-az-900-certification",
    destination: "/",
    permanent: true
  },
  {
    source: "/generative-ai-course-iitg/checkout-0",
    destination: "/certification-in-data-science-and-machine-learning/checkout",
    permanent: true
  },
  {
    source: "/certification-in-data-science-and-machine-learning/checkout",
    destination: "/certificate-program-in-data-science-and-machine-learning/checkout",
    permanent: true
  },
  {
    source: "/data-science-course-96",
    destination: "/data-science-course-96",
    permanent: true
  },
  {
    source: "/gen-ai-bootcamp/checkout",
    destination: "/generative-ai-bootcamp/checkout",
    permanent: true
  },
  {
    source: "/data-analyst-course",
    destination: "https://college.odinschool.com/data-analyst-course",
    permanent: true
  },
  {
    source: "/ai-analyst-course",
    destination: "https://college.odinschool.com/ai-analyst-course",
    permanent: true
  },
  {
    source: "/investment-banking-and-finance-operations-elite-cours/checkout",
    destination: "/investment-banking-and-finance-operations-elite-course/checkout",
    permanent: true
  },

  // temporary redirects

    { source: "/learning-hub/web-design-using-html5/introduction-to-html5", destination: "/", permanent: false },
  { source: "/artificial-intelligence-course", destination: "/", permanent: false },
  { source: "/masterclass/digital-marketing-for-entrepreneurs", destination: "/", permanent: false },
  { source: "/learning-hub/web-design-using-html5/html5-exploring-features-and-semantic-element", destination: "/", permanent: false },
  { source: "/hello", destination: "/", permanent: false },
  { source: "/for-corporate", destination: "/", permanent: false },
  { source: "/hire-odin-grads", destination: "/", permanent: false },
  { source: "/checkout", destination: "/", permanent: false },
  { source: "/blog/sql-cheatsheet-the-complete-guide-for-data-driven-careers-2025-edition", destination: "/", permanent: false },
  { source: "/talent-solution", destination: "/", permanent: false },
  { source: "/learning-hub/data-science-with-python/web-scraping", destination: "/", permanent: false },
  { source: "/learning-hub/make-money-on-instagram/instagram-posts", destination: "/", permanent: false },
  { source: "/learning-hub/ruby/variables", destination: "/", permanent: false },
  { source: "/learning-hub/tag/effective-methods-of-making-money-on-instagram", destination: "/", permanent: false },
  { source: "/projects-page", destination: "/", permanent: false },
  { source: "/learning-hub/make-money-on-instagram/instagram-stories-reels", destination: "/", permanent: false },
  { source: "/learning-hub/ruby/decision-making", destination: "/", permanent: false },
  { source: "/learning-hub/php/datatypes", destination: "/", permanent: false },
  { source: "/business-analytics/application", destination: "/", permanent: false },
  { source: "/datascience-application", destination: "/", permanent: false },
  { source: "/webinars/img2znztybunhiysutbl191i", destination: "/", permanent: false },
  { source: "/webinars/poufesft2u08c1je4nwm9ykx", destination: "/", permanent: false },
  { source: "/webinars/zw5dc2iwqfm0thouef6ntdpo", destination: "/", permanent: false },
  { source: "/learning-hub/make-money-on-instagram/instagram-monetization-client-acquisition", destination: "/", permanent: false },
  { source: "/masterclass/data-drift-detection-and-model-monitoring", destination: "/", permanent: false },
  { source: "/blog/programming/six-ways-sql-and-nosql-databases-offer", destination: "/", permanent: false },
  { source: "/blog/programming/itil-service-design-overview-principles-objectives", destination: "/", permanent: false },
  { source: "/blog/programming/angular-js-vs-angular-x", destination: "/", permanent: false },
  { source: "/data-science/career-opportunities", destination: "/", permanent: false },
  { source: "/blog/data-science/types-of-hypothesis-testing", destination: "/", permanent: false },
  { source: "/blog/big-data/top-differences-between-hadoop-1-0-and-hadoop-2-0", destination: "/", permanent: false },
  { source: "/full-stack-java-developer-bootcamp/scholarship/application", destination: "/", permanent: false },
  { source: "/blog/author/alex-carruthers", destination: "/", permanent: false },
  { source: "/blog/author/divya-gandotra", destination: "/", permanent: false },
  { source: "/scholarships/women-in-tech/application", destination: "/", permanent: false },
  { source: "/blog/big-data/challenges-in-the-way-of-big-data", destination: "/", permanent: false },
  { source: "/blog/author/shweta", destination: "/", permanent: false },
  { source: "/blog/data-science/nine-must-have-data-analysis-tools-to-create-dashing-business-reports", destination: "/", permanent: false },
  { source: "/blog/author/lisa-findlay", destination: "/", permanent: false },
  { source: "/blog/author/pallavi-jha", destination: "/", permanent: false },
  { source: "/blog/tag/data-science/page/5", destination: "/", permanent: false },
  { source: "/blog/tag/tips", destination: "/", permanent: false },
  { source: "/blog/data-science/how-will-artificial-intelligence-and-machine-learning-redefine-and-transform-cybersecurity", destination: "/", permanent: false },
  { source: "/datascience-bootcamp/mumbai", destination: "/", permanent: false },
  { source: "/masterclass/learn-to-build-an-e-commerce-site-with-react", destination: "/", permanent: false },
  { source: "/blog/author/siddhartha-mathur", destination: "/", permanent: false },
  { source: "/blog/tag/data-science/page/14", destination: "/", permanent: false },
  { source: "/blog/programming/top-3-agile-software-development-methods", destination: "/", permanent: false },
  { source: "/blog/programming/itil-interview-questions", destination: "/", permanent: false },
  { source: "/web-development-course", destination: "/", permanent: false },
  { source: "/blog/data-science/interview-questions-and-answers-informatica-powercenter", destination: "/", permanent: false },
  { source: "/blog/data-science/5-ways-to-gain-hands-on-experience-in-data-science", destination: "/", permanent: false },
  // { source: "/events/mastering-interviews-with-generative-ai", destination: "/", permanent: false },
  { source: "/blog/data-science/linear-regression-with-python-scikit-learn", destination: "/", permanent: false },
  { source: "/data-science/salary-calculator", destination: "/", permanent: false },
  { source: "/hubfs/OdinSchool_Affiliate_Partner_Agreement.pdf", destination: "/", permanent: false },
  { source: "/opecampus/data-analytics/finding-your-path-in-data-analytics", destination: "/", permanent: false },
  { source: "/blog/others/five-excellent-basic-formatting-tips-on-ms-excel", destination: "/", permanent: false },
  { source: "/blog/tag/digital-marketing", destination: "/", permanent: false },
  { source: "/blog/data-science/artificial-neural-network-walkthrough", destination: "/", permanent: false },
  { source: "/web-development-course/oldpage", destination: "/", permanent: false },
  // { source: "/events", destination: "/webinars", permanent: false },
   { source: "/datascience-bootcamp/book-a-demo", destination: "/", permanent: false },
   { source: "/training-solution", destination: "/", permanent: false },
]

module.exports = redirects; 