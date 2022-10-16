import React from "react";

const ServiceItem = ({ image, title, content, classNamePlus }) => {
  return (
    <div
      className={`flex flex-col justify-center bg-[#222] text-white text-center px-10 h-[25rem] ${classNamePlus}`}
    >
      <img src={image} alt="" className="w-20 h-20 mx-auto mb-8" />
      <h5 className="uppercase font-bold font-roboto text-[1.25rem] mb-4">
        {title}
      </h5>
      <p className="text-[1rem] opacity-70">{content}</p>
    </div>
  );
};

export default ServiceItem;
