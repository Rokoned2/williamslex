import React from "react";

const VideoIntroductionSection = () => {
  return (
    <section className="w-full relative text-white ">
      <video
        src="https://williamslex.com/wp-content/themes/WW-wp/video/vid-WILLIAMS-N3.mp4"
        muted
        loop
        autoPlay
        className="w-full object-cover -z-10 border-b-[1rem] border-[#E21F26]"
      ></video>
    </section>
  );
};

export default VideoIntroductionSection;
