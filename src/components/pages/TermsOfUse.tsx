import React, { useEffect } from 'react';
import { ScrollText } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="py-12 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <ScrollText className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Terms of Use</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using EduPlatform's website, services, or applications, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials (information or software) on EduPlatform's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on EduPlatform's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by EduPlatform at any time.
              </p>
              
              <h2>3. Course and Content Access</h2>
              <p>
                Upon enrolling in a course or purchasing a subscription, you will be granted access to course content according to the terms specified at the time of purchase. Lifetime access, when offered, means that you will have access for as long as the course is available on our platform.
              </p>
              <p>
                EduPlatform reserves the right to modify, update, or discontinue courses or content at any time. We will make reasonable efforts to notify users of significant changes.
              </p>
              
              <h2>4. User Accounts</h2>
              <p>
                To access certain features of our platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.
              </p>
              <p>
                You agree to notify EduPlatform immediately of any unauthorized use of your account or any other breach of security. EduPlatform will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge.
              </p>
              
              <h2>5. User Content</h2>
              <p>
                Our platform may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You retain ownership of any intellectual property rights that you hold in that content.
              </p>
              <p>
                By posting content to our platform, you grant EduPlatform a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise use that content in connection with the services we provide.
              </p>
              
              <h2>6. Prohibited Activities</h2>
              <p>
                You agree not to engage in any of the following activities:
              </p>
              <ul>
                <li>Violating any laws or regulations</li>
                <li>Infringing on the intellectual property rights of others</li>
                <li>Sharing account credentials or accessing another user's account without permission</li>
                <li>Posting or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our platform</li>
                <li>Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure</li>
              </ul>
              
              <h2>7. Payment and Refunds</h2>
              <p>
                All purchases are subject to the payment terms specified at the time of purchase. Prices for courses and subscriptions may change at any time, but changes will not affect any purchases already completed.
              </p>
              <p>
                We offer a 30-day refund policy for course purchases. If you are unsatisfied with a course, you may request a refund within 30 days of purchase by contacting our support team. Refunds may not be available for subscriptions or special promotions, as specified at the time of purchase.
              </p>
              
              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall EduPlatform, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our platform; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein; (iv) any interruption or cessation of transmission to or from our platform; (v) any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our platform by any third party; and/or (vi) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the platform, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages.
              </p>
              
              <h2>9. Changes to Terms</h2>
              <p>
                EduPlatform reserves the right, at its sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes. Your continued use of the platform following the posting of any changes to these Terms constitutes acceptance of those changes.
              </p>
              
              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@eduplatform.com<br />
                Address: 123 Education Lane, Suite 200, San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUse;
