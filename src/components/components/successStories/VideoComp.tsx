import React from "react";
import Image from "next/image";


interface VideoCompProps {
  url: string;
  thumbnail: string
}
const VideoComp = ({ url, thumbnail }: VideoCompProps) => {
  const [playVideo, setPlayVideo] = React.useState(false);

  return (
    <div className="rounded-xl overflow-hidden relative aspect-video border border-white">
      {playVideo ? (
        <video
          controls
          autoPlay
          className="w-full h-full rounded-xl"
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setPlayVideo(true)}
        >
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            fill
            className="rounded-xl object-cover"
          />
          <Image
            src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
            alt="Play Button"
            width={60}
            height={60}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      )}
    </div>
  );
};

export default VideoComp;
