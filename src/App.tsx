import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CourseLesson from "./pages/CourseLesson";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Webinars from "./pages/Webinars";
import WebinarDetail from "./pages/WebinarDetail";
import WebinarRegistration from "./pages/WebinarRegistration";
import WebinarCheckout from "./pages/WebinarCheckout";
import WebinarConfirmation from "./pages/WebinarConfirmation";
import SalaryCalculator from "./pages/SalaryCalculator";
import ResumeBuilder from "./pages/ResumeBuilder";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SuccessStories from "./pages/SuccessStories";
import HireTalent from "./pages/HireTalent";
import BecomeAMentor from "./pages/BecomeAMentor";
import NewsRoom from "./pages/NewsRoom";
import ReferralProgram from "./pages/ReferralProgram";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import FreeResources from "./pages/FreeResources";
import CourseCheckout from "./pages/CourseCheckout";
import CourseCheckoutCertificate from "./pages/CourseCheckoutCertificate";
import LearningHub from "./pages/LearningHub";
import FreeCourseDetail from "./pages/FreeCourseDetail";
import CoursesInCities from "./pages/CoursesInCities";
import ExpertDetail from "./pages/ExpertDetail";
import Careers from "./pages/Careers";
import VirtualInterview from "./pages/VirtualInterview";
import Resources from "./pages/Resources";
import TrainYourTeam from "./pages/TrainYourTeam";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import CollegeStudents from "./pages/CollegeStudents";
import SpecializedCourses from "./pages/SpecializedCourses";
import OdinTalks from "./pages/OdinTalks";
import MentorDetail from "./pages/MentorDetail";
import FunWithStatistics from "./pages/FunWithStatistics";
import DataScienceCareerGuide from "./pages/DataScienceCareerGuide";
import CourseDetail2 from "./pages/CourseDetail2";

const queryClient = new QueryClient();

// Convert from arrow function to regular function component to ensure proper React component structure
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/courses2/:id" element={<CourseDetail2 />} />
            <Route path="/courses/:id/lessons/:lessonId" element={<CourseLesson />} />
            <Route path="/course-checkout/:id" element={<CourseCheckout />} />
            <Route path="/course-checkout-certificate/:id" element={<CourseCheckoutCertificate />} />
            <Route path="/about" element={<About />} />

            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/odintalks" element={<OdinTalks />} />
            <Route path="/mentor/:id" element={<MentorDetail />} />
            <Route path="/fun-with-statistics/*" element={<FunWithStatistics />} />
            <Route path="/data-science-career-guide" element={<DataScienceCareerGuide />} />

            {/* Specialized Courses Route */}
            <Route path="/specialized-courses" element={<SpecializedCourses />} />

            {/* Expert Detail Route */}
            <Route path="/expert/:id" element={<ExpertDetail />} />

            {/* Learning Hub Routes */}
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/learning-hub/:courseId" element={<FreeCourseDetail />} />

            {/* Courses in Cities Route */}
            <Route path="/courses-in-cities" element={<CoursesInCities />} />

            {/* Resources Route */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/train-your-team" element={<TrainYourTeam />} />
            <Route path="/college-students" element={<CollegeStudents />} />

            {/* New Routes for News and Reviews */}
            <Route path="/news" element={<News />} />
            <Route path="/reviews" element={<Reviews />} />

            {/* Webinar Routes */}
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/webinars/:id" element={<WebinarDetail />} />
            <Route path="/webinar-registration/:id" element={<WebinarRegistration />} />
            <Route path="/webinar-checkout/:id" element={<WebinarCheckout />} />
            <Route path="/webinar-confirmation/:id" element={<WebinarConfirmation />} />

            {/* Tools Routes */}
            <Route path="/salary-calculator" element={<SalaryCalculator />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/virtual-interview" element={<VirtualInterview />} />

            {/* Blog and Resources */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/free-resources" element={<FreeResources />} />

            {/* Career and Company Pages */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/hire-talent" element={<HireTalent />} />
            <Route path="/become-a-mentor" element={<BecomeAMentor />} />
            <Route path="/news" element={<NewsRoom />} />
            <Route path="/referral-program" element={<ReferralProgram />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
