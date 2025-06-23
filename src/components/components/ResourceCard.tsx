import React, { useState } from 'react';
import { Download, FileText, File, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import Image from 'next/image';

interface ResourceCardProps {
  resource: {
    id: string;
    documentId?: string;
    poster?: string | null;
    video?: string | null;
    category?: string | null;
    title: string;
    description: string;
    fileFormat?: string;
    fileSize?: string;
    createdAt: string;
    popularity?: number;
    tags?: string[];
    downloadUrl?: string | null;
  };
  formatDate: (dateString: string) => string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, formatDate }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Only apply hover effect if video is available
  const hoverProps = resource.video ? {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  } : {};

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div 
        className="aspect-video overflow-hidden bg-gray-100 relative"
        {...hoverProps}
      >
        {isHovering && resource.video ? (
          <video
            src={resource.video}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {resource.poster && !imageError ? (
              <Image
                src={resource.poster}
                alt={`${resource.title} thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
                width={500}
                height={500}
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center p-4">
                  <FileText className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <span className="text-gray-500 text-sm">No preview available</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {resource.category || 'Uncategorized'}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FileText className="w-4 h-4 mr-1" />
            <span>{resource.fileFormat || 'Unknown'}</span>
          </div>
          <div className="flex items-center">
            <File className="w-4 h-4 mr-1" />
            <span>{resource.fileSize || 'N/A'}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatDate(resource.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <Download className="w-4 h-4 mr-1" />
            <span>{(resource.popularity || 0).toLocaleString()}</span>
          </div>
        </div>

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      
      {/* Only show download button if download URL exists */}
        <CardFooter className="px-6 pb-6 pt-0">
          <Button 
            className="w-full gap-2" 
            onClick={() => window.open(resource.downloadUrl!, '_blank')}
            disabled={!resource.downloadUrl}
          >
            <Download className="h-4 w-4" />
            Download Now
          </Button>
        </CardFooter>
    </Card>
  );
};

export default ResourceCard;