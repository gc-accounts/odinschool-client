'use client';

import React, { useEffect } from 'react';
import { ScrollText } from 'lucide-react';

import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';



const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const termsData = [
    {
      heading: "1. Introduction",
      paragraphs: [
        "This is a legal and binding agreement between you, the user (referred to as “user” or “you”) of the Programs, as defined below, and GreyCampus Edutech Private Limited, a private limited company incorporated under the Companies Act, 1956 and having its corporate office at Aikya Vihar, Plot 218, B Block, Kavuri Hills Phase - II, Hyderabad (together with its subsidiaries and affiliates if hereinafter \"OdinSchool,\" \"us,\" \"we\" or \"our\" or “the Company”) stating the terms that govern your use of the Platform, as defined below. The website www.OdinSchool.com and mobile apps(if available) (collectively referred to as the “Platform”) and the information, services, and other materials contained therein are provided and operated by OdinSchool.",
        "These Terms of Use (\"Terms\") govern your use of OdinSchool's website, apps, the Learning Management System, training programs (individually referred to as a “Program” and collectively as “Programs”), and other products and services (\"Services\"). As some of our Services may be software that is downloaded to your computer, phone, tablet, or other devices, you agree that we may automatically update this software and that these Terms will apply to such updates."
      ]
    },
    {
      heading: "2. Applicability of the Terms:",
      paragraphs: [
        "These Terms shall also apply to OdinSchool-hosted mobile apps, WhatsApp groups, Facebook groups, Instagram pages, Facebook pages, email/SMS/phone communications, and other social media forums hosted by OdinSchool, which shall be deemed to be part of the ‘Platform’ by reference. You acknowledge that certain parts of the Platform, as mentioned above, are provided by third-party service providers, and you agree to abide by their terms and conditions. OdinSchool shall not be responsible for any disruption of services caused by such third-party service providers.",
        "Although you may \"bookmark\" a particular portion of the Platform and thereby bypass these Terms, your use of the Platform still binds you to these Terms."
      ]
    },
    {
      heading: "3. Amendments in the Terms:",
      paragraphs: [
        "We may change these Terms from time to time without prior notice. You should review this page regularly. Your continued use of the Platform and Programs after changes have been made will be taken to indicate that you have read and accepted those changes. You should not use the Platform or Programs if you are not happy with any changes to these Terms."
      ]
    },
    {
      heading: "4. Read Before You Proceed:",
      paragraphs: [
        "OdinSchool makes no representations that the Platform operates (or is legally permitted to operate) in all geographic areas, or that the Platform, or information, services, or products offered through the Platform are appropriate or available for use in other locations. Accessing the Platform from territories where the Platform, or any content or functionality of the Platform or its portions thereof is illegal, is expressly prohibited. If you choose to access the Platform, you agree and acknowledge that you do so on your own initiative and at your own risk and that you are solely responsible for compliance with all applicable laws. Please review our Terms of Use, Privacy Policy, and other policies available on the Platform (collectively referred to as the “Terms”) that govern the use of the Platform and Programs. By accepting these Terms in any manner or accessing the website, you consent, agree, and undertake to abide, be bound by and adhere to the Terms and if you do not agree to these Terms, you are not entitled to avail of/use the Programs and any use thereafter shall be unauthorized."
      ]
    },
    {
      heading: "5. User Conduct Policy",
      paragraphs: [
        "Whether you have enrolled in a Program or are simply browsing the Platform, once you have accessed the Platform or Programs, you shall be considered a ‘user’ for the purpose of these Terms. You are responsible for all your activities in connection with the use of the Platform and Programs. You hereby agree to fully comply with all applicable local, provincial, state, national and foreign laws, treaties, and regulations in connection with such use. You shall not resort to any unethical practices while using the Platform.",
        "Without limitation, you will not post or transmit, or cause to be posted or transmitted, any communication or solicitation or other \"phishing\", \"pharming\" or \"whaling\" message designed or intended to obtain password, account, personal information, confidential information or private information from any user of the Platform or any other third party whatsoever. However, if any such event does take place, OdinSchool shall not be liable for any loss of data or if the user’s device, computer system, or any other property is compromised in any manner.",
        "You acknowledge and agree that OdinSchool has the right to report any and all such suspicious or illegal activity to the appropriate legal or police authorities without notice to you.",
        "During your use of the Platform and Programs, you will:"
      ],
      list: [
        "not harass other users, students, attendees, support agents, or visitors;",
        "not create an atmosphere of disharmony, hostility within student groups",
        "not cheat on any homework assignment or exams for the Program;",
        "not post online any secured testing materials;",
        "not share solutions to homework assignments or exams; and",
        "notify the instructors immediately if you become aware of any other user cheating or breaching these Terms and comply with the requirements of the specific applicable code of conduct, if any, relating directly to a Program into which such user is enrolled."
      ],
      paragraphsAfterList: [
        "OdinSchool students are prohibited from creating groups on any social media channel, including but not restricted to WhatsApp, signal, telegram etc. Only the Forums present on OdinSchool's Learning Management System shall be used to interact and share information among the students. Breach of this clause amounts to a breach of disciplinary regulations and the students involved will be considered ineligible for Placements."
      ]
    },
    {
      heading: "6. User Accounts, User Registration, and Delivery of Services",
      paragraphs: [
        "In order to participate in most Platform activities and to apply for a Program, you will need to register for a personal account (“User Account”) by undergoing a two-step verification process to verify your login credentials such as your phone number, by way of a one-time password which will be sent to your phone number simultaneously and/or by providing an email address and a password that is unique.",
        "Upon payment of the Program fees – in part or whole, depending on the Program OdinSchool shall grant you access to the Program. The invoice may be provided to you along with the email confirmation or within four (4) weeks thereafter. This shall be proof of delivery against the successful payment of fees.",
        "Owing to certain exceptional circumstances, if OdinSchool has granted you access to a Program pending payment, and OdinSchool does not receive payments within the stipulated time periods, OdinSchool may, at its own discretion, withdraw your access to the Program without giving any prior notice. You agree that you will never divulge or share access to your User Account with any third party for any reason. You also agree that you will create, use and/or access only one User Account, and that you will not use any User Account other than your own. In setting up your User Account, you may be prompted or required to enter additional information, including but not limited to your name and email address. Additional information may be required to confirm your identity. You understand and agree that all information provided by you is accurate, current and complete and that you will maintain and update your information to keep it accurate, current and complete.",
        "You acknowledge that if any information provided by you is untrue, inaccurate, not current or incomplete, we reserve the right to terminate your use of the Platform and your enrolment into a Program, to the extent applicable. In addition to the registration process, as part of your use of the Platform or participation in the Programs, we may obtain certain information about you and your performance in the Programs. Some of this information may be Personally Identifiable Information. We may use, maintain, and store this information to provide certain services to you now and in the future, and may share such information with our Educational Partners or third parties in conjunction with such services or for the purpose of marketing. For example, as further detailed in our Privacy Policy, we may share certain materials or information about you with third parties, including your grades/scores in our classes. Irrespective of the fact if also you have registered yourself under DND or DNC or NCPR service, you still authorize us to give you a call from us or any third party for the above-mentioned purposes till 365 days of your registration with us.",
        "Access to the Programs is restricted to attendees or students who have specifically been granted access by OdinSchool.",
        "By registering your User Account, you agree that:"
      ],
      list: [
        "you are registered for the Program only once and will not set up multiple User Accounts; and",
        "you will abide by these Terms and any terms specific to the Program."
      ],
      paragraphsAfterList: [
        "Placement assistance is provided to all the students who graduate the Bootcamp as per expected performance standards. Eligible students will be given ample placement opportunities as part of the Bootcamp. Placement opportunities might be available in different cities across India and you are expected to be open to relocating to utilize the best placement opportunities."
      ]
    },
    {
      heading: "7. Payment Terms and Refund Policy",
      paragraphs: [
        "It is the sole responsibility of the user enrolling into a Program to check the accuracy of, and evaluate the suitability and relevance of, the Program elected. The enrolment into a Program is non-transferable.",
        "To make payment for any Program or to purchase any services or products offered by OdinSchool through the Platform, you must have internet access and a current valid accepted payment method as indicated during sign-up (\"Payment Method\"). OdinSchool does not store any of your credit card information or such other information restricted by the Reserve Bank of India (RBI) for processing payment and has partnered with payment gateways for the payment towards the services. By using a third-party payment provider, you agree to abide by the terms of such a payment provider. You agree that in case OdinSchool’s third-party payment provider stores any such information, OdinSchool will not be responsible for such storage, and it will be solely at your discretion to allow the third party to store such information. Any loss of such information or any loss incurred by you due to the usage of such information will be solely a loss incurred by you, and OdinSchool is in no way liable for any such losses and is neither responsible to reimburse / make good such losses in any manner whatsoever. You also agree to pay the applicable fees for the payments made through the Platform.",
        "Failure to pay the applicable Program fee may result in withdrawal of your access to a Program. Depending on where you transact with us, the type of payment method used, and where your payment was issued, your transaction with us may be subject to foreign exchange fees or exchange rates.",
        "Fee amounts once paid are non-refundable."
      ]
    },
    {
      heading: "8. Use of Programs",
      paragraphs: [
        "OdinSchool reserves the right to cancel or reschedule any Program or live lectures/webinars, or to alter, modify or rearrange the schedule of topics, as well as the point value or weight of assignments, tests, quizzes, exams, projects, and other such evaluations of progress. You also understand that OdinSchool, at its sole discretion, may limit, suspend, or terminate your use of the Platform or Programs and/or all OdinSchool-provided services related to the Programs, such as access to OdinSchool coaches or support services, evaluation services, or certifications.",
        "You also understand that OdinSchool may modify or discontinue all services related to its Programs at its sole discretion. You agree that OdinSchool shall not be liable to you or to any third party for any such modification, suspension or discontinuance. Nothing in these Terms shall be construed to obligate OdinSchool to maintain and support the Platform or Programs or any part or portion thereof or any associated services."
      ]
    },
    {
      heading: "9. Force Majeure",
      paragraphs: [
        "You agree that OdinSchool shall be under no liability whatsoever to you in the event of non-availability of the Platform or any portion thereof occasioned by Act of God, war, disease, revolution, epidemic, riot, civil commotion, strike, lockout, flood, fire, satellite failure, failure of any public utility, man-made disaster or any other cause whatsoever beyond the control of OdinSchool."
      ]
    },
    {
      heading: "10. Training and Education Partners and Accreditation",
      paragraphs: [
        "OdinSchool is NOT a university or an education service provider, we may partner with various individual or institutional partners (each a “training Partner”) to impart the training programs. OdinSchool may offer a certificate or other acknowledgment for participants who have satisfactorily demonstrated learnings in the registered program. The decision to award any such credential acknowledgment to a given participant will be solely at the discretion of OdinSchool. OdinSchool may choose not to offer any credential or other acknowledgment for some Programs. OdinSchool may decide at its sole discretion whether to provide a record concerning a participant’s performance in a Program. The format of any credential or other acknowledgment, and of any performance, provided by OdinSchool relating to Programs will be determined by OdinSchool at its sole discretion and may vary from Program to Program.",
        "You will not receive academic/college or school-related credit from OdinSchool or any other training Partner for taking a Program."
      ]
    },
    {
      heading: "11. OdinSchool’s Intellectual Property Rights",
      paragraphs: [
        "“Content” means any and all information and data, which may include but not be limited to text, software, computer codes, scripts, graphics, presentations, HTLMs, photos, sounds, music, videos, logos, offers, advertisements, interactive features, and other materials.",
        "The Platform, Programs, and related services are owned and operated by OdinSchool. All Content or other material available on the Platform or through the Programs, including but not limited to online/live lectures, speeches, video lessons, quizzes, presentation materials, homework assignments, programming assignments, programs, code, and other images, text, layouts, arrangements, displays, illustrations, documents, materials, audio and video clips, HTML and files (collectively “OdinSchool Content”), are the property of OdinSchool and/or its affiliates and are protected by copyright, patent and/or other proprietary intellectual property rights under Indian and foreign laws. All software used on the Platform is the property of OdinSchool and is protected by Indian and international copyright laws.",
        "OdinSchool logos, trademarks, and service marks that may appear on the Platform and in the Program (“OdinSchool Marks”) are the property of OdinSchool and are protected under Indian and foreign laws. All other trademarks, service marks, and logos used on the Platforms, Online Courses or Programs, with or without attribution, are the trademarks, service marks or logos of their respective owners. In addition, elements of the Platforms are protected by trade dress and other Indian and international intellectual property laws and may not be copied, reproduced, downloaded or distributed in any way in whole or in part without the express written consent of OdinSchool.",
        "As a condition of accessing the Platforms and/or using the Programs, you agree not to:",
      ],
      list: [
        "(a) reproduce, duplicate, copy, sell, resell or exploit for any commercial purpose any OdinSchool Content or any portion of it thereof, other than as expressly allowed under these Terms; and",
        "(b) use the OdinSchool Marks or the name, trademarks, service marks, or other materials of any Educational Partner in connection with, or to transmit, any unsolicited communications or emails or for any other unauthorized purpose."
      ],
      paragraphsAfterList: [
        "You are requested to please verify all Content prior to use. In the event you come across any Content that is incorrect, infringing, offensive, indecent or objectionable, please notify us immediately at the address mentioned at the bottom of this page.",
        "Additionally, from time to time, OdinSchool (or its third-party service providers, on behalf of OdinSchool) may request users to review OdinSchool Content or beta-test the Platform. The works derived from such activity shall remain the sole and exclusive property of OdinSchool or its third-party service providers, as applicable."
      ]
    },
    {
      heading: "12. Third-Party Intellectual Property",
      paragraphs: [
        "OdinSchool respects third-party intellectual property rights and actively supports the protection of all third-party intellectual property including copyrights and trademarks (“IP”). It is our policy to expeditiously respond to clear notices of alleged IP infringement. If we receive proper notification of IP infringement, our response to such notices will include removing or disabling access to material claimed to be the subject of infringing activity.",
        "OdinSchool shall not be held liable for the unauthorized use of any third-party IP, and the user that carries out such unauthorized use or infringes any IP available on the Platform shall fully indemnify and hold OdinSchool harmless against any and all claims that may arise as a result of such use.",
        "If you believe that your product or other work has been misrepresented or used in a way that constitutes copyright infringement, or your intellectual property rights have been otherwise violated, please provide us with the following information:"
      ],
      list: [
        "An electronic or physical signature of the person authorized to act on behalf of the owner of the product, copyright, or other intellectual property interest;",
        "A description of the product, work, or other intellectual property that you claim has been misrepresented or infringed;",
        "A description of where the material that you claim is misrepresenting or infringing your product, work or other intellectual property is located on the Platform/Program;",
        "Your address, telephone number, and email address;",
        "A statement by you that you have a good faith belief that the disputed use is not authorized by the owner of the product, work, copyright or intellectual property, or its agent, or applicable law; and",
        "A statement by you, made under the penalty of perjury, that the aforementioned information in your notice is accurate and that you are the product, work, copyright, or intellectual property owner or authorized to act on such owner's behalf."
      ],
      paragraphsAfterList: [
        "For notices of disputes or claims of copyright or other intellectual property infringement, please connect with us at the address provided at the bottom of this page."
      ]
    },
    {
      heading: "13. Limited License to the User",
      paragraphs: [
        "The online training content on the Platform is licensed, not sold. In consideration of your agreement to these Terms, OdinSchool grants you a personal, non-exclusive, non-transferable, revocable license to access and use the Platform, Content, and the Programs, solely in accordance with the Terms. You may download or copy the portions of the OdinSchool Content available on the Platform for your own non-commercial and personal use only, provided you maintain all copyright and other notices contained in such OdinSchool Content.",
        "You may not copy, sell, resell, reproduce, publish, modify, transfer, retransmit, distribute, commercially exploit or create derivative works of Platforms, Programs, or any OdinSchool Content. Notwithstanding the foregoing, certain reference documents, digital textbooks and articles may be made available to you with the permission of third parties, and the use of that information is subject to certain rules and conditions, and you agree to abide by all such rules and conditions.",
        "You may not reverse-engineer, decompile, disassemble, or otherwise access the source code for any software that may be used to operate the Platform or the Programs. From time to time, OdinSchool may include software, code, instructions, or other such information in the OdinSchool Content for the Programs; any such information is provided on an \"as-is\" basis for instructional purposes only and is subject to the ‘Disclaimer’ and ‘Limitation of Liability’ sections below and other terms herein. Any use of such information for commercial purposes is strictly prohibited. OdinSchool and/or its affiliates and licensors reserve all rights not expressly granted herein to the Platforms, OdinSchool Content, and OdinSchool Marks.",
        "Without limiting the generality of the terms above, the following are types of uses that OdinSchool expressly defines as falling outside of the definition of \"non-commercial and personal use\":"
      ],
      list: [
        "the sale or rental of (i) any part of the OdinSchool Content, (ii) any derivative works based at least in part on the OdinSchool Content, or (iii) any collective work that includes any part of the OdinSchool Content;",
        "the sale of access or a link to any part of the OdinSchool Content;",
        "providing training, support, or editorial services that use or reference the OdinSchool Content in exchange for a fee;",
        "the use of OdinSchool Content by a college, university, school, or other educational institution for instruction where tuition is charged;",
        "the use of OdinSchool Content by a for-profit corporation or non-profit entity for internal professional development or training; and",
        "the use of OdinSchool Content for display/upload/making available at a place that is accessible to the general public in any manner, including but not limited to any social media sites, video download sites, and torrents."
      ]
    },
    {
      heading: "14. User Content",
      paragraphs: [
        "The Platform may allow you to upload forum posts, chat with other users and OdinSchool’s counsellors, user discussions, profile pages, and other content and media for social interaction, or certain information and materials for use with the Programs, e.g., questions, hypotheticals, examples, assignments, industry projects, etc. (collectively \"User Content\"). OdinSchool does not claim ownership of any User Content you may submit or make available for inclusion on the Platform or Programs. Accordingly, subject to the license granted to OdinSchool above, the user will be the sole and exclusive owner of any and all rights, title and interest in and to the User Content.",
        "With respect to any User Content you submit via the Platform or Programs or that is otherwise made available to OdinSchool, you hereby grant OdinSchool an irrevocable, worldwide, perpetual, royalty-free and non-exclusive license to use, distribute, reproduce, modify, adapt, publicly perform and publicly display such User Content on the Platforms or in the Programs or otherwise exploit the User Content, with the right to sublicense such rights (to multiple tiers), for any purpose (including for any commercial purpose). OdinSchool reserves the right to remove any User Content at any time and for any reason.",
        "To the extent that you provide any User Content, you represent and warrant that (a) you have all necessary rights, licenses and/or clearances to provide such User Content and permit OdinSchool to use such User Content as provided above, (b) such User Content is accurate and reasonably complete, (c) as between you and OdinSchool, you shall be responsible for the payment of any third-party fees related to the provision and use of such User Content, and (d) such User Content does not and will not infringe or misappropriate any third-party rights or constitute a fraudulent statement or misrepresentation or unfair business practices.",
        "OdinSchool does not control the User Content posted through the Platform, including any messages, reviews or comments, and does not guarantee the accuracy, integrity or quality of such User Content. Under no circumstances will OdinSchool be liable in any way for any User Content, including any errors or omissions, or any loss or damage or defamation of any kind incurred as a result of your posting or use of any User Content. You are responsible for complying with all the laws applicable to the User Content.",
        "You are prohibited from posting the following Content on the Platform:"
      ],
      list: [
        "Content that is fraudulent, indecent, or libelous, or defames, harasses, discriminates against, harms or threatens others;",
        "Content that discusses illegal activities, with the intent to commit them;",
        "Content that infringes or misappropriates patents, trademarks, trade secrets, right of publicity, or other intellectual property rights of third parties;",
        "Content that you do not have the right to disclose;",
        "Profane, pornographic, obscene, indecent, or unlawful Content;",
        "Advertising or any form of commercial solicitation;",
        "Content related to partisan political activities;",
        "Content that contains intentionally inaccurate information or that is posted with the intent of misleading others;",
        "Viruses, Trojan horses, worms, time bombs, cancelbots, or other disabling devices or other harmful components intended to or that may damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, or personal information;",
        "Content that consists of any high volume, automated, or electronic means to access the Platform (including without limitation robots, spiders or scripts);",
        "Content that violates the rights of other users of the Platform; or",
        "Content that violates any applicable local, state, national or international law or otherwise advocates or encourages any illegal activity."
      ]
    },
    {
      heading: "15. OdinSchool Platform Security",
      paragraphs: [
        "You are prohibited from violating or attempting to violate the security of the Platform or any other associate Platform of OdinSchool, including, without limitation:",
        "(a) accessing data not intended for such user or logging onto a server or an account that the user is not authorized to access;",
        "(b) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization;",
        "(c) attempting to interfere with service to any user, host, or network, including, without limitation, via means of submitting a virus to the Platform, overloading, \"flooding,\" \"spamming,\" \"mailbombing\" or \"crashing;\"",
        "(d) sending unsolicited emails, including promotions and/or advertising of products or services; or",
        "(e) forging any TCP/IP packet header or any part of the header information in any email or newsgroup posting. Violations of system or network security may result in civil or criminal liability.",
        "OdinSchool will investigate occurrences that may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations. You agree not to use any device, software, or routine to interfere or attempt to interfere with the proper working of this Platform or any activity being conducted on the Platform. You agree, further, not to use or attempt to use any engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders, robots, avatars, or intelligent agents) to navigate or search the Platform other than the search engine and search agents available from OdinSchool on the Platform and other than generally available third-party web browsers (e.g., Google Chrome or Microsoft Explorer)."
      ]
    },
    {
      heading: "16. Disclaimer",
      paragraphs: [
        "THE PLATFORM AND/OR PROGRAMS MAY CONTAIN TYPOGRAPHICAL ERRORS OR INACCURACIES AND MAY NOT BE COMPLETE OR CURRENT. OdinSchool, THEREFORE, RESERVES THE RIGHT TO CORRECT ANY ERRORS, INACCURACIES OR OMISSIONS (INCLUDING AFTER AN ORDER HAS BEEN SUBMITTED) AND TO CHANGE OR UPDATE INFORMATION AT ANY TIME WITHOUT PRIOR NOTICE.",
        "THE PLATFORM, PROGRAMS, AND ANY INFORMATION OR OdinSchool CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITH ALL FAULTS.",
        "OdinSchool MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESSED OR IMPLIED, WITH RESPECT TO OdinSchool CONTENT OR SERVICES AVAILABLE ON OR THROUGH THIS PLATFORM AND PROGRAMS, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. OdinSchool MAKES NO WARRANTY THAT THE SERVICES WILL MEET THE USER'S REQUIREMENTS OR THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; NOR DOES OdinSchool MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES, OR AS TO THE ACCURACY OR RELIABILITY OF ANY INFORMATION OBTAINED THROUGH THE SERVICES, OR THAT ANY DEFECTS IN THE SOFTWARE WILL BE CORRECTED.",
        "THE USER UNDERSTANDS AND AGREES THAT THE OdinSchool CONTENT AND ALL OTHER INFORMATION, DATA, OR OTHER MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH OR FROM THE PLATFORM OR PROGRAMS IS OBTAINED AT THE USER'S OWN DISCRETION AND RISK, AND THAT THE USER WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO THE USER, THE USER'S COMPUTER SYSTEM, ELECTRONIC DEVICE OR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL OR DATA.",
        "NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY THE USER FROM OdinSchool OR THROUGH OR FROM THE SERVICES, SHALL CREATE ANY WARRANTY BY OdinSchool.",
        "IN THE EVENT YOU FIND ANY INFORMATION PROVIDED ON THE PLATFORM OR PROGRAMS INCORRECT OR OBSCENE , OR IF YOU ARE THE OWNER OF ANY INFORMATION OR CONTENT AND WISH THAT SUCH INFORMATION OR CONTENT IS NOT DISPLAYED ON THE PLATFORM OR PROGRAMS, KINDLY NOTIFY US AT THE ADDRESS PROVIDED AT THE BOTTOM OF THE PAGE."
      ]
    },
    {
      heading: "17. Limitation of Liability",
      paragraphs: [
        "Neither OdinSchool nor any of its Partners, affiliates, employees, directors, officers, agents, vendors or supplier shall be liable to you or any other person, whether in Tort, Contract, Strict Liability or otherwise, for any indirect, special, incidental or consequential losses or damages of any nature arising out of or in connection with the use or inability to use this Platform or Programs, including, without limitation, damages for lost profits, loss of goodwill, loss of data, work stoppage, accuracy of search results, or computer / electronic device failure, virus or malfunction. In no event will OdinSchool be liable for any damages in excess of ₹1000 or, in the case of enrolled students, the fees paid by you in connection with your enrolment into a Program."
      ]
    },
    {
      heading: "18. Site Linking",
      paragraphs: [
        "The Platform may contain links to pages on other websites (\"Linked Sites\"), and those Linked Sites may contain Content or offer products and/or services for sale. OdinSchool does not author, edit, control, or monitor these Linked Sites. You acknowledge and agree that (a) we have no responsibility for the accuracy or availability of information provided by Linked Sites; (b) we do not control or endorse the sponsors of such Linked Sites or the content, products, advertising, or other materials presented on such Linked Sites; and (c) you agree to the terms and conditions of the Linked Sites. We may remove any Linked Sites from the Platform at any time with or without reason.",
        "OdinSchool WILL NOT BE LIABLE FOR ANY TRANSACTIONS CONDUCTED BY YOU WITH THIRD PARTIES THROUGH THE LINKED SITES OR FOR ANY LIABILITY ARISING FROM THE REPRESENTATIONS OR INFORMATION PROVIDED ON SUCH LINKED SITES.",
        "We appreciate that Linked Sites may contain material on which the operator of the Linked Sites has intellectual property rights. We respect those rights and provide the links for information purposes only. The fact that we have provided links to any Linked Site does not create or imply any relationship or partnership with the operator of such Linked Site.",
        "You may not establish a link to this Platform from any other website, application, intranet or extranet site without our prior written consent. If you wish to create links, you may contact us before doing so. In establishing links, you must not represent in any way, expressly or by implication, that you have received the endorsement, sponsorship or support of OdinSchool, including its Educational Partners, respective employees, agents, directors, officers or shareholders."
      ]
    },
    {
      heading: "19. Indemnity",
      paragraphs: [
        "You agree to indemnify and hold OdinSchool and its Educational Partners harmless from any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees and costs, relating to or arising out of (a) your use or attempted use of the Platforms or Programs in violation of the Terms; (b) your violation of any law or rights of any third party; or (c) information or Content that you or others post or otherwise make available on the Platform or through any Program, including without limitation any claim of infringement or misappropriation of intellectual property or other proprietary rights."
      ]
    },
    {
      heading: "20. Termination of Rights",
      paragraphs: [
        "You agree that OdinSchool, in its sole discretion, may deactivate your account or otherwise terminate your use of the Platform or enrolment to a Program with or without reason, including, without limitation, if OdinSchool believes that you have (a) breached the Terms; (b) infringed the intellectual property rights of a third party; (c) posted, uploaded or transmitted unauthorized Content on the Platform; or (d) violated or acted inconsistently with the letter or spirit of these Terms or any other applicable code of conduct. You agree that any deactivation or termination of your access to the Platforms or Programs may be effected without prior notice to you and that OdinSchool shall not be liable to you nor any third party for any termination of your account or enrolment into a Program. You also acknowledge that OdinSchool may retain and store your information on OdinSchool’s systems notwithstanding any termination of your account or enrolment into the Programs."
      ]
    },
    {
      heading: "21. Miscellaneous Provisions",
      subsections: [
        {
          subheading: "1. Acknowledgement",
          paragraphs: [
            "By accepting the Terms through your use of the Platform, you certify that you are 18 years of age or older. If you are under the age of 18 or under the legal age in your jurisdiction to enter into a binding contract, you may use the Platform only under the supervision of a parent or legal guardian who agrees to be bound by the Terms. If you are a parent or legal guardian agreeing to the Terms for the benefit of a child below 18, be advised that you are fully responsible for his/her use of the Platform, including all financial charges and legal liability that he/she may incur. By using the Platform, you represent and warrant that you have the right, authority, and capacity to enter into the Terms and to abide by all of the terms and conditions set forth herein. The Programs are not for the use of individuals under the age of 18 years.",
            "OdinSchool may freely transfer or assign any portion of its rights or delegate its obligations under these Terms or any Program-specific terms. You shall not transfer or assign, by operation of law or otherwise, any portion of your rights or delegate your obligations under these Terms or any Program-specific terms without the prior written consent of OdinSchool."
          ]
        },
        {
          subheading: "2. Dispute Resolution and Jurisdiction:",
          paragraphs: [
            "These Terms or any Program-specific terms shared with you shall be governed by, construed and enforced in accordance with the laws in India, as these are applied to agreements entered into and to be performed entirely within India and without giving effect to any principles of conflict of laws. You agree that any legal lawsuit or other action brought by OdinSchool, you or any third party to enforce these Terms or any Program-specific terms shared with you, or in connection with any matters related to the Platform or Programs, shall be subject only to the jurisdiction of the courts of Hyderabad, Telangana.",
            "Where a dispute arises, the parties involved shall make all reasonable efforts to resolving the dispute through good faith negotiations. If efforts to amicably resolve any dispute or claim between the parties are unsuccessful, then such dispute or claim arising out of or in connection with the Terms or any Program-specific terms shared with you, including any question regarding its existence, validity or termination, shall be referred to arbitration under the Arbitration and Conciliation Act, 1956, as amended (“Act”) before a sole arbitrator to be appointed by OdinSchool. The proceedings shall be conducted in English and the seat for arbitration shall be Hyderabad, Telangana. If any provision of the Terms or any Program-specific terms shared with you is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from the other provisions herein, and shall not affect the validity and enforceability of any remaining provisions."
          ]
        },
        {
          subheading: "3. Force Majeure",
          paragraphs: [
            "OdinSchool shall have no liability under these Terms or any Program-specific terms shared with you, to the extent arising from any failure of OdinSchool to perform any of its obligations under these Terms or any Program-specific terms shared with you, due to any fire, flood, earthquakes, other acts of God, war, civil unrest, terrorism, Internet failures, governmental act or court order, national emergency, strikes or labour disputes or any other event not within OdinSchool 's reasonable control. OdinSchool shall not be responsible for damage or other problems caused by any unauthorized change to these Terms made by way of hacking or cracking this page."
          ]
        },
        {
          subheading: "4. No Waiver",
          paragraphs: [
            "The failure of OdinSchool to exercise or enforce any right or provision of the Terms or any Program-specific terms shared with you, shall not constitute a waiver of such right or provision. If any provision of the Terms or any Program-specific terms shared with you is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, to the extent that may lawfully be done, and the other provisions of these Terms or any Program-specific terms shared with you, shall remain in full force and effect."
          ]
        },
        {
          subheading: "5. Entire Agreement",
          paragraphs: [
            "These Terms or any Program-specific terms shared with you constitute the entire agreement between you and OdinSchool relating to the matters set forth herein, and shall not be modified except in writing, as posted on the Platforms by OdinSchool, or through a specific writing between you and OdinSchool."
          ]
        },
        {
          subheading: "6. Assignment",
          paragraphs: [
            "OdinSchool may freely transfer or assign any portion of its rights or delegate its obligations under the Terms or any Program-specific terms shared with you. You may not transfer or assign, by operation of law or otherwise, any portion of your rights or delegate your obligations under the Terms or any Program-specific terms shared with you, without the prior written consent of OdinSchool, and any such attempted transfer or assignment shall be void and of no effect."
          ]
        }
      ]
    },
    {
      heading: "Grievance Officer",
      paragraphs: [
        "In the event that you feel your concern has not been resolved to your satisfaction, you may contact our grievance officer, who shall endeavor to redress the concern within 30 working days from the date of escalation. You are advised to escalate to the grievance officer only when you have already raised your complaint which has not been resolved to their satisfaction, or their concern has not been resolved within 30 working days from the date of ticket generation.",
        "In compliance with the Information Technology Act, 2000 and rules made thereunder and also in compliance of the Consumer Protection (E-Commerce) Rules, 2020, the name and contact details of the Grievance Officer are herein as under:",
        "All the grievances and any discrepancies of the provider of information shall be redressed within one month (30 days) from the date of receipt of the grievance.",
        "Any notice or communication that may be required to be given to OdinSchool under these Terms or any Program-specific terms shared with you may be sent by writing or emailing to the following addresses:",
        "Name: Mr. Srinivas Attuluri",
        "E-mail id: legal@OdinSchool.com",
        "Phone: 040 66035631"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Section */}
        <div className="py-12 bg-gradient-to-br bg-primary-600 text-white shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/15 rounded-full p-4">
                <ScrollText className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-extrabold mb-4 tracking-tight">Terms of Use</h1>
            <p className="text-md text-gray-200 max-w-3xl mx-auto ">
              Understand your rights and responsibilities when using OdinSchool's platform and services.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Last updated: June 25, 2025
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container py-10 space-y-6">
          {termsData.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              {/* <h2 className="text-lg font-semibold text-black mb-4 bg-gray-100 rounded-full inline-block py-1 px-3"> */}
                <h2 className="text-lg font-semibold text-black mb-4 bg-gray-100 underline rounded-sm inline-block py-1 px-3">
                {section.heading}
              </h2>
              {section.paragraphs?.map((para, idx) => (
                <p key={idx} className="text-gray-800 mb-4 text-md">
                  {para}
                </p>
              ))}

              {section?.list && (
                <ul className="list-disc pl-8 text-gray-700 space-y-3 mb-4 text-sm">
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

              {section?.subsections && section.subsections.map((subsection, subIdx) => (
                <div key={subIdx} className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-md font-semibold mb-4">
                    {subsection.subheading}
                  </h3>
                  {subsection.paragraphs?.map((para, paraIdx) => (
                    <p key={`sub-para-${paraIdx}`} className="text-gray-700 mb-4  text-md">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUse;
