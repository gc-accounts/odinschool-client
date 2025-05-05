import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OrganizationLogos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const logos = [...Array(60)].map((_, index) => ({
    id: index + 1,
    name: `Company ${index + 1}`,
    logo: `https://source.unsplash.com/random/200x100?sig=${index + 1}`,
  }));

  const repeatedLogos = [...logos, ...logos];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-12 bg-white overflow-hidden relative">
      {/* Inline animation keyframes */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-logos {
          animation: scrollLeft 60s linear infinite;
        }
        .scrolling-logos:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">500+ Hiring Organizations</h2>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="scrolling-logos flex min-w-max">
            <div className="grid grid-rows-3 gap-4 grid-flow-col auto-cols-max">
              {repeatedLogos.map((logo) => (
                <Card
                  key={`${logo.id}-${Math.random()}`}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow w-[180px] h-[100px]"
                >
                  <CardContent className="flex items-center justify-center p-4 h-full">
                    <img
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationLogos;
