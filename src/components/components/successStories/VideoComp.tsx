
import React from "react";
import Image from "next/image";

const VideoComp = ({ url }) => {
  const [playVideo, setPlayVideo] = React.useState(false);
  return (
    <div className="rounded-xl overflow-hidden relative aspect-video border border-white">
      {playVideo ? (
        <iframe
          className="w-full h-full rounded-xl"
          src={url}
          title="Python Analysis on AirBnB"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setPlayVideo(true)}
        >
          <Image
            src={"https://strapi.odinschool.com/uploads/Python_Analysis_on_Air_Bn_B_20_1_4183a90b2f.webp"}
            alt="Python Analysis on AirBnB Video"
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
export default VideoComp