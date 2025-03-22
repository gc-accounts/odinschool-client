
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
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/courses/:id/lessons/:lessonId" element={<CourseLesson />} />
            <Route path="/about" element={<About />} />
            
            {/* Webinar Routes */}
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/webinars/:id" element={<WebinarDetail />} />
            <Route path="/webinar-registration/:id" element={<WebinarRegistration />} />
            <Route path="/webinar-checkout/:id" element={<WebinarCheckout />} />
            <Route path="/webinar-confirmation/:id" element={<WebinarConfirmation />} />
            
            {/* Salary Calculator Route */}
            <Route path="/salary-calculator" element={<SalaryCalculator />} />
            
            {/* Resume Builder Route */}
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
