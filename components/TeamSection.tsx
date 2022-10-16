import "swiper/css";
import "swiper/css/pagination";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Parallax, Pagination } from "swiper";

const team = [
  {
    image:
      "https://williamslex.com/wp-content/uploads/2018/09/profile-cN-YasserW.jpg",
    name: "John Doe",
    title: "Abogado Senior",
  },
  {
    image:
      "https://williamslex.com/wp-content/uploads/2018/09/profile-cN-JuanCarlosW-2.jpg",
    name: "John Doe",
    title: "Abogado Senior",
  },
  {
    image:
      "https://williamslex.com/wp-content/uploads/2018/09/profH-crop-N-YulissaW-2.jpg",
    name: "John Doe",
    title: "Abogado Senior",
  },
  {
    image:
      "https://williamslex.com/wp-content/uploads/2018/09/profH-crop-N-Veronica.jpg",
    name: "John Doe",
    title: "Abogado Senior",
  },
  {
    image:
      "https://williamslex.com/wp-content/uploads/2018/09/profH-crop-N-MaLourdes.jpg",
    name: "John Doe",
    title: "Abogado Senior",
  },
];

const TeamSection = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="relative">
      <div className="text-center">
        <p className="italic "></p>
        <p className="text-[#e21f26] italic mb-4 mt-20">
          Nuestros clientes son la prioridad
        </p>
        <h2 className="uppercase font-roboto font-bold text-[2.5rem] mb-16 text-[#222]">
          Equipo
        </h2>
      </div>
      <Swiper
        className=" w-[83.33333333%] "
        navigation={{ prevEl, nextEl }}
        speed={2000}
        parallax={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={true}
        modules={[Autoplay, Navigation, Parallax, Pagination]}
      >
        {team.map(({ image, name, title }, index) => (
          <SwiperSlide
            className="flex flex-col text-center cursor-pointer "
            key={index}
          >
            <div className=" w-full flex-1">
              {image ? (
                <img className="object-cover w-full" src={image} alt="" />
              ) : (
                <img
                  className="object-cover w-full"
                  src="https://pvrklaw.com/wp-content/uploads/2019/01/man-dummy.jpg"
                  alt=""
                />
              )}
              <div></div>
            </div>
            <h5 className="tracking-[0.2rem] uppercase font-roboto font-bold mt-4 mb-2 text-[1rem]">
              {name}
            </h5>
            <h5 className="font-roboto text-md text-[1rem]">{title}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
