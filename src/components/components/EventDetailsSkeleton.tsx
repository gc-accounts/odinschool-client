// src/components/skeletons/EventDetailsSkeleton.tsx
import React from 'react';

const EventDetailsSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 bg-white shadow-lg rounded-xl p-8 md:p-12 animate-pulse'>
        {/* Left Column Skeleton */}
        <div className='md:col-span-8'>
          {/* Image Placeholder */}
          <div className="relative w-full h-96 mb-6 rounded-md overflow-hidden bg-gray-200 shadow-md"></div>
          
          {/* Title Placeholder */}
          <div className="h-10 w-3/4 bg-gray-300 rounded mb-4"></div>
          <div className="h-8 w-1/2 bg-gray-300 rounded mb-4"></div>
          
          {/* Description Placeholder */}
          <div className="h-6 w-full bg-gray-300 rounded mb-2"></div>
          <div className="h-6 w-11/12 bg-gray-300 rounded mb-2"></div>
          <div className="h-6 w-5/6 bg-gray-300 rounded mb-6"></div>

          {/* Instructor Placeholder */}
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
        </div>

        {/* Right Column Skeleton */}
        <div className='md:col-span-4'>
          <div className='p-6 rounded-md border border-gray-300 bg-gray-100'>
            <div className="h-8 w-2/3 bg-gray-300 rounded mb-5"></div> {/* Event Details heading */}
            <div className="space-y-4">
              <div className="h-5 w-full bg-gray-200 rounded"></div>
              <div className="h-5 w-full bg-gray-200 rounded"></div>
              <div className="h-5 w-full bg-gray-200 rounded"></div>
              <div className="h-5 w-full bg-gray-200 rounded"></div>
              <div className="h-5 w-full bg-gray-200 rounded"></div>
              <div className="h-5 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Events Button Placeholder */}
      <div className="mt-10 text-center">
        <div className="h-12 w-48 mx-auto bg-blue-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default EventDetailsSkeleton;