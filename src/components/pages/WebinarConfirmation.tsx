import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getWebinarById } from '@/components/data/webinars';
import { Check, Calendar, Download, Mail } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { formatDate } from '@/components/utils/dateUtils';

type RegistrationData = {
  fullName: string;
  email: string;
  company?: string;
  jobTitle?: string;
  marketingConsent: boolean;
}

const WebinarConfirmation = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get registration data and payment status from localStorage
    const storedData = localStorage.getItem('webinarRegistrationData');
    const paymentStatus = localStorage.getItem('webinarPaymentCompleted');

    if (storedData) {
      setRegistrationData(JSON.parse(storedData));
    }
    if (paymentStatus === 'true') {
      setPaymentCompleted(true);
    }
  }, []);

  const webinar = getWebinarById(id || '');

  if (!webinar || !registrationData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="heading-lg mb-4">Invalid Confirmation</h1>
        <p className="mb-8">We couldn't find your registration details. Please try registering again.</p>
        <Button onClick={() => router.push('/webinars')}>Back to Webinars</Button>
      </div>
    );
  }

  const handleAddToCalendar = () => {
    // Implement calendar integration logic here
    console.log('Add to calendar clicked');
  };

  const handleSaveDetails = () => {
    // Implement save details logic here
    console.log('Save details clicked');
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-3">
            <Check className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <h1 className="heading-md mb-2">Registration Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          {registrationData.fullName}, you're all set for the webinar
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-lg mb-4">Webinar Details</h3>
          <div className="space-y-3">
            <p className="font-medium">{webinar.title}</p>
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
              <div>
                <p>{formatDate(new Date(webinar.date))}</p>
                <p>{webinar.time} ({webinar.duration})</p>
              </div>
            </div>
            <p className="text-sm">
              Instructor: {webinar.instructor}
            </p>
            {webinar.isPaid && (
              <p className="text-sm font-medium text-green-600">
                Payment: {paymentCompleted ? 'Completed' : 'Not Required'}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-8 max-w-md mx-auto">
          <p className="text-center">
            We've sent a confirmation email to <strong>{registrationData.email}</strong> with calendar invitation and webinar access link.
          </p>

          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="inline-flex items-center"
              onClick={handleAddToCalendar}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center"
              onClick={handleSaveDetails}
            >
              <Download className="h-4 w-4 mr-2" />
              Save Details
            </Button>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-medium mb-2">What's Next?</h3>
          <ul className="text-sm text-muted-foreground space-y-2 mb-4">
            <li>Check your email for confirmation and webinar access details</li>
            <li>Add the event to your calendar so you don't miss it</li>
            <li>Prepare any questions you have for the Q&A session</li>
          </ul>

          <Button
            onClick={() => router.push('/webinars')}
            variant="default"
          >
            Browse More Webinars
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebinarConfirmation;
