
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, DollarSign, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Webinar } from '@/data/webinars';
import { formatDate } from '@/utils/dateUtils';

interface WebinarCardProps {
  webinar: Webinar;
}

const WebinarCard = ({ webinar }: WebinarCardProps) => {
  const isPast = webinar.status === 'past';
  
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-md ${isPast ? 'opacity-75' : ''}`}>
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={webinar.image} 
          alt={webinar.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 m-2 space-x-2">
          {webinar.isPaid ? (
            <Badge variant="default" className="bg-purple-600">
              <DollarSign className="h-3 w-3 mr-1" />
              Paid
            </Badge>
          ) : (
            <Badge variant="default" className="bg-green-600">Free</Badge>
          )}
          
          <Badge variant="default" className={`${isPast ? 'bg-gray-600' : 'bg-blue-600'}`}>
            {isPast ? 'Past' : 'Upcoming'}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground mb-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(new Date(webinar.date))}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{webinar.duration}</span>
        </div>
        <CardTitle className="line-clamp-2 text-xl">{webinar.title}</CardTitle>
        <CardDescription className="flex items-center mt-1">
          <Tag className="h-4 w-4 mr-1 text-muted-foreground" />
          <span>{webinar.category}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{webinar.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2">
        <div className="text-sm">
          Instructor: <span className="font-medium">{webinar.instructor}</span>
        </div>
        <Link 
          to={`/webinars/${webinar.id}`}
          className="text-primary hover:underline font-medium"
        >
          {isPast ? 'View Details' : 'Register Now'}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WebinarCard;
