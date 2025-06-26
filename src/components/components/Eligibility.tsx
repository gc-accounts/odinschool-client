import React from 'react';
// import Image from 'next/image'; // Not used in this component, can be removed if not needed elsewhere

interface CardsProps {
  sectionClass?: string;
}

const data = [
  {
    id: 1,
    title: `Join the <br/>Bridge course`,
    description: ""
  },
  {
    id: 2,
    title: 'Get hands-on with the basics',
    description: ''
  },
  {
    id: 3,
    title: 'Get eligible for the Data Science Elite course*',
    description: ''
  },
];

const Eligibility = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-white'}`}> {/* Changed background to white for clarity */}
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2">
            Level Up for the <span className="text-primary-600">Elite Course</span>
          </h2>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-0'>
          {data.map((item, index) => (
            <>
              <div className='relative bg-blue-600 p-8 rounded-lg text-white flex items-center justify-center text-center w-60 h-40 shadow-lg flex-shrink-0'> {/* Adjust padding and width/height as needed */}
                <div>
                <p className='font-semibold text-md leading-tight mb-2'><span dangerouslySetInnerHTML={{ __html: item.title }} /></p>
                <p className='text-sm'>{item.description}</p>
                </div>
              </div>
              {index < data.length - 1 && (
                <div className="relative flex items-center justify-center h-full mx-2 md:mx-4">
                  {/* Arrow for larger screens (horizontal) */}
                  <div className="hidden md:block w-16 h-1 bg-gray-300 relative">
                    <div className="absolute top-1/2 -right-1.5 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-300"></div>
                  </div>
                  {/* Arrow for smaller screens (vertical) */}
                  <div className="block md:hidden h-16 w-1 bg-gray-300 relative">
                    <div className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-300"></div>
                  </div>
                </div>
              )}

            </>
          ))}
        </div>
        <p className='text-sm text-gray-600 text-center mt-6 italic'>*Your fast-pass to the Data Science Elite program. Prove you're ready. Get rewarded.</p>
      </div>
    </section>
  );
};

export default Eligibility;