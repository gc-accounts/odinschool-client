import React, { useEffect } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - OdinSchool";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: May 8, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                OdinSchool ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the features you use. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact details</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing information</li>
                <li>Educational background</li>
                <li>Professional experience</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing, operating, and maintaining our website</li>
                <li>Improving, personalizing, and expanding our website and services</li>
                <li>Understanding and analyzing how you use our website</li>
                <li>Developing new products, services, features, and functionality</li>
                <li>Communicating with you about our courses, services, and events</li>
                <li>Finding and preventing fraud</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>With service providers who perform services for us</li>
                <li>With business partners, with your consent</li>
                <li>If required to do so by law or in response to valid requests by public authorities</li>
                <li>To protect our rights or the safety of others</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information. These may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction or deletion of your personal information</li>
                <li>The right to object to our processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the contact information provided below.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>OdinSchool</strong><br />
                Email: privacy@odinschool.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;