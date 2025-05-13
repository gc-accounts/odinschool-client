import React from 'react';

const WhoCanApply = () => {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-100 rounded-xl p-6 md:p-10 shadow-sm">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who can apply</h2>
          <p className="text-gray-700 mb-4">
            Join this certification program in Applied Generative AI if you fulfill the following pre-requisites:
          </p>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">✔️</span>
              A Bachelor’s Degree
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">✔️</span>
              A background in Mathematics or Computer Science (Preferable)
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1617445460394-8b677aa636bb?auto=format&fit=crop&w=400&q=80"
            alt="Student with laptop"
            className="w-64 md:w-80 h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
