import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Webinar } from '@/data/webinars';
import { getWebinars } from '@/utils/api/webinars';
import PaginationComponent from '@/components/PaginationComponent';
import mentor from '@/utils/api/schema/mentor';
import { Loader2 } from 'lucide-react';
// Define mentor data
const mentorsData = [
  {
    id: "mentor-1",
    name: "Dr. Sarah Johnson",
    role: "AI Research Scientist",
    companyLogo: "Google DeepMind",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256",
    expertise: ["Machine Learning", "Natural Language Processing", "Neural Networks"],
    bio: "Dr. Sarah Johnson is a leading researcher in artificial intelligence with over 15 years of experience. She has published numerous papers on deep learning applications.",
    education: "Ph.D. in Computer Science, Stanford University",
    accomplishments: [
      "Led team that developed breakthrough NLP model",
      "Author of 'Deep Learning: The Next Frontier'",
      "Recipient of the ACM Computing Innovation Fellowship"
    ]
  },
  {
    id: "mentor-2",
    name: "Michael Chen",
    role: "Senior Software Engineer",
    companyLogo: "Microsoft",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=256",
    expertise: ["Cloud Architecture", "DevOps", "Microservices"],
    bio: "Michael Chen specializes in cloud-native applications and infrastructure automation. He has helped numerous organizations modernize their tech stacks.",
    education: "M.S. in Computer Engineering, UC Berkeley",
    accomplishments: [
      "Microsoft Certified Azure Solutions Architect",
      "Creator of popular open-source deployment tool",
      "Speaker at KubeCon and CloudNativeCon"
    ]
  },
  {
    id: "mentor-3",
    name: "Priya Patel",
    role: "Data Science Director",
    companyLogo: "Netflix",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=256",
    expertise: ["Big Data Analytics", "Recommendation Systems", "Statistical Modeling"],
    bio: "Priya leads data science initiatives focused on improving content recommendations and user experience through advanced analytics.",
    education: "Ph.D. in Statistics, MIT",
    accomplishments: [
      "Developed Netflix's content classification algorithm",
      "Published research on personalization at scale",
      "Adjunct Professor at UCLA"
    ]
  },
  {
    id: "mentor-4",
    name: "James Wilson",
    role: "Cybersecurity Expert",
    companyLogo: "CyberShield Inc.",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256",
    expertise: ["Network Security", "Penetration Testing", "Security Architecture"],
    bio: "James specializes in identifying vulnerabilities in systems and developing robust security protocols to prevent cyber attacks.",
    education: "B.S. in Computer Science, Georgia Tech",
    accomplishments: [
      "CISSP and CEH certified",
      "Former security consultant for Fortune 500 companies",
      "Regular contributor to security conferences"
    ]
  },
  {
    id: "mentor-5",
    name: "Elena Rodriguez",
    role: "Frontend Engineering Lead",
    companyLogo: "Airbnb",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256",
    expertise: ["React", "UI/UX Design", "Performance Optimization"],
    bio: "Elena leads frontend development teams creating beautiful, accessible, and high-performance web applications.",
    education: "M.S. in Human-Computer Interaction, Carnegie Mellon",
    accomplishments: [
      "Redesigned Airbnb's booking experience",
      "Open source contributor to major frontend frameworks",
      "Mentor for Women Who Code"
    ]
  },
  {
    id: "mentor-6",
    name: "David Kim",
    role: "Product Manager",
    companyLogo: "Spotify",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=256",
    expertise: ["Product Strategy", "User Research", "Agile Methodologies"],
    bio: "David specializes in building digital products that users love. He has a background in both engineering and design.",
    education: "MBA, Harvard Business School",
    accomplishments: [
      "Launched Spotify's podcast discovery features",
      "Former startup founder (acquired by Spotify)",
      "Author of 'Product Management in the Age of AI'"
    ]
  }
];

const OdinTalks = () => {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);


  useEffect(() => {
    const fetchWebinars = async () => {
      const webinars = await getWebinars({
        pageNumber: pageNumber,
        pageSize: 10,
        isOdintalk: true,
      });
      setWebinars(webinars);
      setLoading(false);
    };
    fetchWebinars();
  }, [pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "OdinTalks - Meet Our Mentors";
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pb-16">
        <div className="py-16 bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Stay current with the latest insights on our Blog!</h1>
            <p className="text-xl text-center max-w-2xl mx-auto mb-8">
              From the latest trends to best practices, read everything about Data Science, Web Development, Digital Marketing, and Power BI here.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar) => (
              <Link key={webinar.id} to={`/webinars/${webinar.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative rounded overflow-hidden shadow">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex items-center justify-between">
                      <div>
                        <h3 className=" font-semibold text-black">{webinar.title}</h3>
                        <h3 className="text-gray-700">{webinar.instructor}</h3>
                      </div>
                      {/* <img
                        src={webinar.companyLogo}
                        alt={`${webinar.company} logo`}
                        className="h-10 w-auto object-contain"
                      /> */}
                    </div>
                  </div>

                </Card>
              </Link>
            ))}
          </div>
          <PaginationComponent
            currentPage={pageNumber}
            setCurrentPage={setPageNumber}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OdinTalks;