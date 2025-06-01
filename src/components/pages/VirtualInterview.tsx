import React, { useEffect, useState } from 'react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/components/ui/dialog";
import { Mic, Video, Play, Pause, MessageSquare, Airplay, Share2 } from 'lucide-react';

const VirtualInterview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const questions = [
    "Tell me about yourself and your background in education?",
    "Why are you interested in joining this company?",
    "How do you stay updated with the latest educational trends and technologies?",
    "Where do you see yourself in 5 years in your career?",
    "Why should we hire you?",
"Tell me about a time you failed. What did you learn?",
"What do you know about our company and why do you want to work here?",
"What are your short-term and long-term career goals?",
"Have you ever missed a deadline? What did you do?"

  ];

  const handleStartInterview = () => {
    setCurrentQuestion(0);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gradient-to-br from-primary-800 to-primary-700 text-white">
          <div className="container text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 rounded-full p-3">
                <Airplay className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              Virtual Interview Practice
            </h1>
            <p className="text-lg text-center max-w-2xl mx-auto mb-8 text-slate-300">
              Prepare for your OdinSchool interview with our AI-powered virtual
              interview simulator. Practice common interview questions and
              receive instant feedback.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Start Interview
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <Video className="text-primary-600 w-6 h-6" />
                    </div>
                    <CardTitle>1. Simulate an Interview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Answer common interview questions in a realistic setting
                      with video and audio recording.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="text-primary-600 w-6 h-6" />
                    </div>
                    <CardTitle>2. Get Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Receive AI-powered analysis of your responses, body
                      language, and speaking patterns.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <Share2 className="text-primary-600 w-6 h-6" />
                    </div>
                    <CardTitle>3. Share with Mentors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Optionally share your interview recordings with mentors
                      for personalized coaching.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-6">
                    Practice Interview
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Step into a simulated interview with our AI interviewer. A simple way to practice, improve, and boost your confidence.
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg">Begin Practice Session</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Practice Interview</DialogTitle>
                        <DialogDescription>
                          Question {currentQuestion + 1} of {questions.length}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="py-6">
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                          <p className="text-gray-800 font-medium">
                            {questions[currentQuestion]}
                          </p>
                        </div>

                        <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative mb-4">
                          <p className="text-white">
                            Your camera will appear here
                          </p>

                          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="bg-white"
                              onClick={toggleRecording}
                            >
                              {isRecording ? (
                                <Pause className="mr-2" />
                              ) : (
                                <Play className="mr-2" />
                              )}
                              {isRecording ? "Pause" : "Record"}
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="bg-white"
                              disabled={isRecording}
                            >
                              <Mic className="mr-2" />
                              Audio Only
                            </Button>
                          </div>
                        </div>
                      </div>

                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={handleNextQuestion}
                          disabled={currentQuestion >= questions.length - 1}
                        >
                          Next Question
                        </Button>
                        <Button type="submit">Finish Practice</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="lg:col-span-3">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Upcoming Open Roles</CardTitle>
                      <CardDescription>
                        Prepare for interviews for these specific positions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="p-3 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="font-medium">
                            Educational Content Developer
                          </div>
                          <div className="text-sm text-gray-500">
                            Create engaging learning materials
                          </div>
                        </li>
                        <li className="p-3 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="font-medium">
                            Learning Experience Designer
                          </div>
                          <div className="text-sm text-gray-500">
                            Design user-centered learning journeys
                          </div>
                        </li>
                        <li className="p-3 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="font-medium">Course Mentor</div>
                          <div className="text-sm text-gray-500">
                            Guide students through their learning
                          </div>
                        </li>
                        <li className="p-3 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="font-medium">
                            Educational Data Analyst
                          </div>
                          <div className="text-sm text-gray-500">
                            Drive insights from learning data
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Open Positions
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VirtualInterview;
