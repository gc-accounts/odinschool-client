'use client';

import React, { useEffect } from 'react';
import { ScrollText } from 'lucide-react';

import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';




const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const privacyData = [
    {
      heading: "1. Introduction",
      paragraphs: [
        "OdinSchool (together with its subsidiaries and affiliated companies for the collection of information, use and disclosure of information by GreyCampus Edutech Pvt. Ltd., hereinafter \"OdinSchool,\" \"us,\" \"we,\" or \"our\" or “the Company”) is committed to security and management of personal data, to function effectively and successfully for the benefit of our stakeholders, customers and for the community. In doing so, it is essential that people’s privacy is protected through the lawful and appropriate means for handling personal data. Therefore, we have implemented this privacy policy (hereinafter referred to as ‘‘policy’’)."
      ]
    },
    {
      heading: "2. Aim",
      paragraphs: [
        "This policy aims to protect the personal data of the various stakeholders connected to our organization. This policy is aimed at providing individuals notice of the basic principles by which the company processes the personal data of individuals (“Personal Data”) who visits, uses, deals with and/or transacts through the website and includes a guest user and browser (hereinafter ‘you’, ‘user’)."
      ]
    },
    {
      heading: "3. Purpose and Scope",
      paragraphs: [
        "The purpose of this policy is to describe how OdinSchool collects, uses, and shares information about you through our online interfaces (e.g., websites and mobile applications) owned and controlled by us, including but not limited to www.OdinSchool.com (hereinafter the \"website\"). This policy is also designed to provide information on how OdinSchool ensures data security, conducts data transfers, and processes requests from data subjects.",
        "This policy control applies to all systems, people, and processes that constitute the organization’s information systems, including board members, directors, employees, and other third parties who have access to Personal Data available within OdinSchool.",
        "The company is also committed to ensuring that its employees conduct themselves in line with this, and other related, policies. Where third parties process data on behalf of OdinSchool, the Company endeavors to obtain assurances from such third parties that your Personal Data will be safeguarded consistently.",
        "OdinSchool offers curated and specially designed to use our Website, App, the Learning Management System, Training Programs, and other products and services (“hereinafter individually or collectively referred to as Program”). This Privacy Policy applies to all our services unless specified otherwise."
      ]
    },
    {
      heading: "4. Personal Data Collection",
      paragraphs: [
        "The Personal Data that we collect about you depends on the context of your interactions with us, the products, services, and features that you use, your location, and the applicable laws.",
        "Personal Data is stored in personnel files or within the electronic records (on servers in India or other countries) of OdinSchool. The following types of Personal Data may be held by the Company, as appropriate, on relevant individuals:",
      ],
      list: [
        "Any personal or PII that you may submit or may be required to submit for registration and continued use of the Company Systems or receive the services by OdinSchool;",
        "Your name, title, gender, date of birth, email address, telephone number (home/work/mobile telephonic number), profile/display picture, login name, screen name, nickname, or handle, country/state/postcode or city of residence, postal or other physical address, name(s) of the school/university (including grades and graduation year), name(s) of the workplace, job position/designation (including salary), resume/CV, information related to social profiles, such as Facebook, Google, GitHub etc., IP addresses and other information collected passively (as further detailed in the “Passive Collection” section below), may be collected; and",
        "Any other information you may choose to further provide us, without limitation, any information to update your account and profile, if required, to fill out any forms, provide your feedback to surveys, write any articles on the Company Systems, or to use any features of Company Systems."
      ],
      paragraphsAfterList: [
        "We collect and/or process your Personal Data as a part of the following activities related to our Products:",
      ],
      listAfterParagraphs: [
        "Account registration, use of certain Product features, creating or taking tests, generating reports based on information collected from the use of our Products.",
        "Requesting service and support for our Products and providing such support, registering for an event, participating in an online survey, participating in discussion groups or forums.",
        "Registering for newsletter subscriptions, customizing the content you see as per relevance."
      ],
      paragraphsAfterList2: [
        "We do not collect any payments information processed by third-party payment gateway providers."
      ]
    },
    {
      heading: "5. Sources of Data collection",
      paragraphs: [
        "The data collected by the company is derived directly from the data provided by the user or by use of our sites.",
        "Data Collected when You:",
      ],
      list: [
        "Account registration",
        "Use of our Website",
        "Creating or taking online tests",
        "Generating reports based on information collected from use of our Products",
        "Requesting service and support for our Products and providing such support",
        "Registering for hackathons",
        "Participating in discussion groups per relevance",
        "Referring your profile to relevant job opportunities"
      ],
      paragraphsAfterList: [
        "We process Personal Data for purposes such as"
      ],
      listAfterParagraphs: [
        "Providing reports based on information collected from the use of our Products.",
        "Keeping you up-to-date about the latest Product announcements, software updates, software upgrades, system enhancements, special offers, and other information.",
        "Providing support and assistance for our Products through their APIs.",
        "Providing the ability to create a personal profile and e-portfolio.",
        "Providing the ability to contact you, if required.",
        "Providing customer feedback and support.",
        "Providing and administering opt-in events like contests, sweepstakes, or challenges, or other marketing or promotional activities on OdinSchool.",
        "Being able to enroll in a program, we collect data including program, courses, assignments, and quizzes you started and completed, your exchange with instructors, teaching assistants, and other students, and essays, answers to questions, and other items submitted to satisfy course requirements.",
        "Supporting recruitment inquiries.",
        "Personalizing marketing communication and website content based on your preferences, such as in response to your request for specific information on products and services that may be of interest to you.",
        "Meeting contract or legal obligations.",
        "Process payment and billing data."
      ],
      paragraphsAfterList2: [
        "Data Collected from third parties:",
        "We receive Personal Data such as access or login details, profile pictures or any other text/image in relation to your Personal Data which may be available with such third parties.",
        "Third parties from whom we receive your Personal Data include our service providers, other networks connected to our service, our advertising partners, our marketing and advertising affiliates, our educational partners, analytics providers, recruiters, and such other third-party sources."
      ]
    },
    {
      heading: "6. Cookies",
      paragraphs: [
        "OdinSchool uses cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. Further, we may use cookies or other tracking technologies to analyze trends, track users’ movements around the website, and gather information about our user base, such as location information based on IP addresses.",
        "You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.",
        "If you disable cookies, some features will be disabled. It won't affect the user's experience which makes your site experience more efficient and some of our services will not function properly.",
        "OdinSchool may collect information related to visitors and machines. Such information includes cookies, IP addresses, pageview activities, and geolocation data. The details of user activities on our website such as the number of visits, time spent on our website, and pages clicked are also collected."
      ]
    },
    {
      heading: "7. Consent",
      paragraphs: [
        "Your decision to provide Personal Data to OdinSchool is at your sole discretion and is deemed obtained when you register and create your account on our Company Systems. Please note that you may not be able to access certain options, offers, and services if they require Personal Data that you have not provided. You can sign-up, and therefore consent, to receive email or newsletter communication from us. If you would like to discontinue receiving this communication, you can update your preferences by using the ‘Unsubscribe’ link at the end of such emails or by contacting us through email at support@odinschool.com.",
        "We will only process your Personal Data if we have a lawful basis for doing so, which includes but is not limited to consent, contractual necessity (i.e. processing that is necessary for the performance of a contract with you, such as your user agreement with us that allows us to provide you with the Products) and our legitimate interests or the legitimate interest of others (e.g. our users) such as:",
      ],
      list: [
        "Provide you with the websites and services, together with any support you may request.",
        "Respond to your inquiries or fulfill your requests.",
        "Diagnose Website and Service technical problems.",
        "Send you information that we believe may be of interest to you, such as Service.",
        "Announcements, newsletters, educational materials, and event information.",
        "Send you administrative information such as notices related to the Services or policy changes.",
        "Understand how the Websites and Services are being used in order to enhance and optimize them.",
        "Prevent, detect, mitigate, and investigate fraudulent or illegal activity."
      ],
      paragraphsAfterList: [
        "As described to you at the point of collection of the information.",
        "Complying with our legal obligations, resolving disputes with users, and enforcing our agreements.",
        "Protecting, investigating, and deterring fraudulent, harmful, unauthorized, or illegal activity.",
        "If you refuse or withdraw your consent, or if you choose not to provide us with any required Personal Data, we may not be able to provide you with the services that can be offered on our Platform."
      ]
    },
    {
      heading: "8. Data Analytics",
      paragraphs: [
        "When you access the Services (including browsing courses), we may collect certain data by automated means, including:",
        "System Data",
        "Technical data about your computer or device, like your IP address, device type, operating system type and version, unique device identifiers, browser, browser language, domain, and other systems data, and platform types (“System Data”).",
        "Usage Data",
        "Usage statistics about your interactions with the Services, including programs and courses accessed, time spent on pages or the Service, pages visited, features used, click data, date and time, and other data regarding your use of the Services (“Usage Data”).",
        "Approximate Geographic Data",
        "An approximate geographic location, including information like country, city, and geographic coordinates."
      ]
    },
    {
      heading: "9. Aggregated Data Collection",
      paragraphs: [
        "OdinSchool might automatically collect some data about you when you are using any of our products, using methods like cookies and other tracking technologies. Information automatically collected includes cookies, page views, geolocation data, IP (internet protocol) addresses, browser and OS (Operating System) type, ISP (Internet Service Provider), files viewed and downloaded from our websites, referral, and exit pages, and clickstream data. Such data does not have an expiry date and we do not delete this data. This data is stored in the form of logs or in third-party tracking and analytics software like Google Analytics, LinkedIn Insights, etc."
      ]
    },
    {
      heading: "10. Data Protection Principles",
      paragraphs: [
        "Where third parties process data on behalf of OdinSchool, we endeavor to obtain assurances from such third parties that your Personal Data will be safeguarded consistently. We understand that it will be accountable for the processing, management, and regulation, and storage and retention of all Personal Data held in the form of manual records and on computers.",
        "All Personal Data obtained and held by the Company will:",
      ],
      list: [
        "Be processed fairly, lawfully and in a transparent manner;",
        "Be collected for specific, explicit, and legitimate purposes;",
        "Be adequate, relevant, and limited to what is necessary for the purposes of processing;",
        "Be kept accurate and up to date. Every reasonable effort will be made to ensure that inaccurate data is rectified or erased without delay;",
        "Not be kept for longer than is necessary for its given purpose;",
        "Be processed in a manner that ensures appropriate security of Personal Data including protection against unauthorized or unlawful processing, accidental loss, destruction or damage by using appropriate technical or organizational measures; and",
        "Comply with the relevant laws and procedures for the international transfer of Personal Data applicable to us."
      ]
    },
    {
      heading: "11. Legal Basis for Processing Your Personal Data",
      paragraphs: [
        "Certain jurisdictions require that we have a lawful basis to justify our processing of your Personal Data.",
        "Where applicable, the lawful basis that OdinSchool relies upon to justify a particular processing activity may differ from the lawful basis used to justify a different processing activity.",
        "We collect your Personal Data for the following purposes",
      ],
      list: [
        "To fulfill or meet the reason you provided the information;",
        "We use your information for managing and processing purposes, including, but not limited to, tracking attendance, progress and completion of a Program. As part of our management and processing of the Program, we will use certain Personal Data in order to administer exams, projects, and other assessments for the Program. For example, as part of an exam, OdinSchool may use certain information collected from you in order to verify your identity or to monitor your performance during the exam to confirm that you are abiding by the applicable testing rules or requirements;",
        "To send you updates about the Programs, other OdinSchool events, platform maintenance or new services provided by OdinSchool, among other things, through itself or through third parties, via WhatsApp, email, SMS, phone call or any other medium;",
        "To enhance the quality of our content and product offerings;",
        "Compliance with security and other mandatory policies and building access;",
        "Providing information to relevant external authorities for tax, social security and other purposes as legally required;",
        "Conducting surveys to assess your satisfaction, including but not limited to its processes or policies;",
        "Setting up and maintaining accounts and subscriptions with third parties that provide information and research services or communication services;",
        "Making decisions about your continued engagement, employment or membership;",
        "Dealing with legal or regulatory disputes or investigations involving you, our work, or other partners, employees, workers, and contractors, including accidents at work, potential and actual negligence claims, and professional discipline matters;",
        "To monitor the use of our information and communication systems to ensure compliance with our IT and document management policies;",
        "To ensure network and information security, including preventing unauthorized access to our computer and electronic communications systems and preventing malicious software distribution;",
        "Business management and planning, including accounting, auditing and insuring;",
        "Planning or reviewing options in relation to the operation or management;",
        "Keeping registers required by law or regulation;",
        "Communicating with you, for example, to respond to inquiries;",
        "Enhancing the safety and security of the services and preventing fraud, or protecting our or our customers’, or your rights or property;",
        "Enforcing applicable terms and conditions and other applicable policies."
      ]
    },
    {
      heading: "12. Advertising and Marketing",
      paragraphs: [
        "We strive to provide you with choices regarding certain Personal Data uses, particularly around marketing and advertising. You will receive marketing communications from us if you have requested information from us or if you provided us with your details and expressly consented to receiving that marketing.",
        "We may use your Personal Identification, Identity, Contact, Electronic and User generated Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which services and offers may be relevant for you.",
        "We also enter into agreements with third parties to serve Ads on our behalf across the internet, social networking sites and blogs. These third parties may collect Personal Data about your visits to our platform and your interactions with our products and use this information to target advertisements for goods and services.",
        "Where electronic direct marketing communications are being sent, you have the option to opt-out in each communication sent, and this choice will be recognized and adhered to by us."
      ]
    },
    {
      heading: "13. Disclosure of Personal Data",
      paragraphs: [
        "OdinSchool is an Indian company and may share the personal information collected or provide such access to other branches, departments, and sister companies within the OdinSchool.",
        "Examples of third parties with whom OdinSchool may share Personal Data includes:",
      ],
      list: [
        "With government bodies, including tax and social security authorities, to comply with applicable laws, to obtain licenses or approvals, and upon request during an audit or assessment;",
        "With its employees, agents, representatives, consultants, subsidiaries, affiliates and third-party providers;",
        "With professional advisers, consultants, and employment and recruitment agencies, to conduct background verification and reference checks, administer benefits and payroll, deal with disciplinary and grievance issues and maintain emergency contact details;",
        "With our legal advisors and external auditors for legal advice and to conduct business audits."
      ],
      paragraphsAfterList: [
        "We require all third parties to respect the security of your Personal Data and to treat it in accordance with the law. We do not allow our third-party service providers to use your Personal Data for their own purposes and only permit them to process your Personal Data for specified purposes and in accordance with our instructions."
      ]
    },
    {
      heading: "14. Data Subject Rights",
      paragraphs: [
        "Some jurisdictions have provided individuals with certain rights in relation to the processing of their Personal Data. This is the case where you or any of our subsidiaries or affiliates with which you interact is located in the European Union, though these rights may be available in other jurisdictions as well. These rights are not available to everyone, and they do not necessarily apply in all contexts. Depending on applicable law, you may have the right to:",
      ],
      list: [
        "Request access to your Personal Data.",
        "Request correction of your Personal Data (should your Personal Data be inaccurate, incomplete, or obsolete).",
        "Request deletion of your Personal Data",
        "Withdraw your consent to processing (where we processed Personal Data on the basis of your consent). Please note that withdrawing your consent applies only to future processing activities.",
        "Object to the processing of your Personal Data.",
        "Request restrictions on the processing of your Personal Data.",
        "Request the transfer of your Personal Data to you or a third party.",
        "Opt-out of certain transfers to third parties."
      ],
      paragraphsAfterList: [
        "We may need to verify your identity before we fulfill your request. you may address your query at compliance@odinschool.com",
        "Please note that certain conditions in relation to processing of your rights, will vary as many countries have varying data privacy rights. Our response and further processing of request to exercise these rights will depend upon the law applicable in relation to the rights exercised by you. We may refuse requests that are unreasonably repetitive, require disproportionate technical effort, risk the privacy of others, may compromise and ongoing investigation, or are impractical. It is our policy to never discriminate against you for exercising any of these rights.",
        "You may have the right to complain to a data protection authority about our processing of your Personal Data."
      ]
    },
    {
      heading: "15. Data Security",
      paragraphs: [
        "OdinSchool will ensure that appropriate technical and organizational measures are in place, supported by privacy impact and risk assessments, to ensure a high level of security for Personal Data, and secure environment for information held both manually and electronically. Further, we use vulnerability scanning and scanning to PCI standards annually and our Company Systems are subject to regular Malware Scanning. Additionally, we use SSL certificate to encrypt all the data being transferred.",
        "OdinSchool implements appropriate security measures designed to prevent unlawful or unauthorized processing of personal information and accidental loss of or damage to personal information. OdinSchool maintains written security management policies and procedures designed to prevent, detect, contain, and correct violations of measures taken to protect the confidentiality, integrity, availability, or security of your Personal Information. These policies and procedures assign specific data security responsibilities and accountabilities to specific individuals, include a risk management program that includes periodic risk assessment and provides an adequate framework of controls that safeguard your personal information.",
        "In addition, as part of its organizational security measures, employees at OdinSchool must:",
      ],
      list: [
        "ensure that all files or written information of a confidential nature are stored in a secure manner and are only accessed by people who have a need and a right to access them",
        "ensure that all files or written information of a confidential nature are not left where they can be read by unauthorized people",
        "check regularly on the accuracy of data being entered into computers",
        "always use the passwords provided to access the computer system cautiously and such access should not be circulated, unless absolutely necessary",
        "use computer screen blanking to ensure that Personal Data is not left on screen when not in use."
      ],
      paragraphsAfterList: [
        "Personal Data should not be kept or transported on laptops, USB sticks, or similar devices unless authorized by Mr. Srinivas Attuluri. Where Personal Data is recorded on any such device it should be protected by:",
      ],
      listAfterParagraphs: [
        "ensuring that data is recorded on such devices only where absolutely necessary",
        "using an encrypted system — a folder should be created to store the files that need extra protection and all files created or moved to this folder should be automatically encrypted",
        "ensuring that laptops or USB drives are not left lying around where they can be stolen."
      ],
      paragraphsAfterList2: [
        "Failure to follow the Company’s rules on data security may be dealt with via the Company’s disciplinary procedure. Appropriate sanctions include dismissal with or without notice dependent on the severity of the failure.",
        "We also take steps to ensure that our service providers, contractors, and other third parties maintain a similar level of data protection measures when processing your Personal Data. While we strive to secure your Personal Data, please note that 100% security of Personal Data cannot be guaranteed and that OdinSchool shall not be liable for any misuse or loss of Personal Data carried out by a third-party cloud service provider."
      ]
    },
    {
      heading: "16. Age Restrictions",
      paragraphs: [
        "You explicitly agree you are 18 years of age or older unless represented by a parent or legal guardian. If you are not of the requisite age you must not provide any information to OdinSchool directly or by way of the usage of the Company Systems.",
        "As a general policy, our company does not engage in the collection, processing, storage, use, dissemination, and transfer of Personal Data of children.",
        "In case such a collection becomes necessary for the performance of our contractual obligations, or when required under the concerned law, we shall notify you in a time-bound and appropriate manner, informing the purposes and reasons for such collection and seek your explicit consent, and where applicable, parental authorization, prior to the processing of such data.",
        "We will take appropriate steps to delete any Personal Data of children’s that has been collected on our website without verified parental consent upon learning of the existence of such Personal Data, subject to conditions stipulated in the laws of applicable jurisdiction."
      ]
    },
    {
      heading: "17. Records Management",
      paragraphs: [
        "Records management refers to a set of activities required for systematically controlling the creation, distribution, use, maintenance, and disposition of recorded information maintained as evidence of business activities and transactions. It is impossible to be compliant with information law without robust records management policies and practices. Good records management practices ensure not only record quality, but that Personal Data is only kept for as long as necessary for its original purpose and help support data minimization."
      ]
    },
    {
      heading: "18. Conflicts of Law",
      paragraphs: [
        "This Policy is intended to comply with the laws and regulations in the place of establishment and of the countries in which the company operates. In the event of any conflict between this Policy and applicable laws and regulations, the latter shall prevail."
      ]
    },
    {
      heading: "19. Retention of Personal Data",
      paragraphs: [
        "We retain your Personal Data, not longer than necessary for the purposes for which it was collected. Retention of personal data depends on the purposes for which we collect and use it and/or as may be required to comply with applicable laws, to establish, exercise, or defend our legal rights. If in case required to extend the period of retention of such data, we shall obtain your consent for the same. Further, we may also dispose of the data prior to completion of the period of retention, if the purpose for which it was collected is exhausted.",
        "Please contact compliance@odinschool.com for any data or account delete requests."
      ]
    },
    {
      heading: "20. Breach Notification",
      paragraphs: [
        "Where a data breach is likely to result in a risk to the rights and freedoms of individuals, it will be reported to the relevant supervisory authority within 72 hours of the Company becoming aware of it and may be reported in more than one installment. Individuals will be informed directly in the event that the breach is likely to result in a high risk to the rights and freedoms of that individual. If the breach is sufficient to warrant notification to the public, the Company will do so without undue delay."
      ]
    },
    {
      heading: "21. External Links on Our Website",
      paragraphs: [
        "For your convenience, we may provide links to sites operated by organizations other than OdinSchool (\"Third Party Sites\") that we believe may be of interest to you. We do not disclose your Personal Data to these Third-Party Sites unless we have a lawful basis on which to do so. We do not endorse and are not responsible for the privacy practices of these Third-Party Sites. If you choose to click on a link to one of these Third-Party Sites, you should review the privacy policy posted on the other websites to understand how that Third-Party website collects and uses your Personal Data."
      ]
    },
    {
      heading: "22. Information",
      paragraphs: [
        "Notwithstanding anything to the contrary in this policy, OdinSchool may use any information provided to OdinSchool in relation to or as part of the services in providing services to its other clients and to develop and create reports, statistical analysis, and benchmarking analyses for its clients provided that such reports contain data as per this privacy policy and terms and conditions and do not identify you by name.",
        "You may also submit a request to us at Mr. Srinivas Attuluri (email at) compliance@odinschool.com"
      ]
    },
    {
      heading: "23. Use of This Website and Our Terms and Conditions",
      paragraphs: [
        "This website is the property of the OdinSchool. Our Terms and Conditions and this Privacy Policy collectively govern the use of the Platform and the Programs offered by OdinSchool. This Privacy Policy shall form a part of the Terms by way of reference. By using this website and the information offered herein, you indicate your acceptance of this Privacy Policy."
      ]
    },
    {
      heading: "24. Updates",
      paragraphs: [
        "We may update our Privacy Policy from time to time. We will take reasonable steps to inform all OdinSchool entities, Customers, Business Partners, and other data subjects affected by the revisions by posting the new Privacy Policy on this page and/or via email."
      ]
    },
    {
      heading: "25. Grievance",
      paragraphs: [
        "If you have any issue or grievance with respect to our policy or with the manner in which we collect or store your information, or in any respect related to your personal information provided to us, please contact legal@odinschool.com. We will do everything we reasonably can to ensure that your grievance is attended to and addressed within a period of 30 days from the date of receipt of Your grievance. Since OdinSchool is made up of different legal entities, the entity that will be the controller for your data is dependent on the situation where your Personal Data is collected."
      ]
    },
    {
      heading: "26. Contact",
      paragraphs: [
        "If you have any questions about our policy or related dealings with us or would like further information about our services and practices, you can contact legal@odinschool.com.",
        "This policy must be read in conjunction with the other agreements you may enter into with OdinSchool and the Terms and Conditions as published by OdinSchool on odinschool.com. By accepting the policy, you expressly consent to OdinSchool use and disclosure of your personal information in accordance with this policy."
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Section */}
        <div className="py-12 bg-primary-600 text-white shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/15 rounded-full p-4">
                <ScrollText className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-md text-gray-200 max-w-3xl mx-auto ">
              Your privacy matters. Learn how OdinSchool handles your personal information.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Last updated: June 25, 2025
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container py-10 space-y-6">
          {privacyData.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-black mb-4 bg-gray-100 underline rounded-sm inline-block py-1 px-3">
                {section.heading}
              </h3>
              {section.paragraphs?.map((para, idx) => (
                <p key={idx} className="text-gray-800 mb-4  text-md">
                  {para}
                </p>
              ))}

              {section?.list && (
                <ul className="list-disc pl-8 text-gray-700 space-y-3 mb-4 text-md">
                  {section.list.map((item, idy) => (
                    <li key={idy}>{item}</li>
                  ))}
                </ul>
              )}

              {section?.paragraphsAfterList && section.paragraphsAfterList.map((para, idx) => (
                <p key={`after-list-${idx}`} className="text-gray-700 mb-4  text-md">
                  {para}
                </p>
              ))}

              {section?.listAfterParagraphs && (
                <ul className="list-disc pl-8 text-gray-700 space-y-3 mb-4 text-md">
                  {section.listAfterParagraphs.map((item, idy) => (
                    <li key={idy}>{item}</li>
                  ))}
                </ul>
              )}

              {section?.paragraphsAfterList2 && section.paragraphsAfterList2.map((para, idx) => (
                <p key={`after-list2-${idx}`} className="text-gray-700 mb-4  text-md">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
