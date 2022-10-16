import React from "react";
import ServicesItem from "./ServiceItem";

const practiceAreas = [
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
  { name: "Foreign Investment and International Trade", link: "/" },
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row ">
      <div className="flex-1 pt-4 pb-20  md:pt-[4.4rem]">
        <div className="px-[0.9375rem] md:ml-[8.33333333%] lg:ml-[16.33333333%]">
          <p className="italic text-[#e21f26]">
            Brindamos soluciones claras, en apego a las leyes
          </p>
          <h3 className="text-2xl font-roboto font-bold text-[1.75rem] mb-14 mt-10 text-[#222]">
            ÁREAS DE PRACTICA
          </h3>
          <ul>
            {practiceAreas.map(({ name, link }, index) => (
              <li className="mb-[0.625rem]" key={index}>
                <a
                  className="bg-no-repeat bg-left bg-[url('https://williamslex.com/wp-content/themes/WW-wp/images/icon-checkBullet.png')] pl-6 text-[1.0625rem] hover:text-[#e21f26]"
                  href={link}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex-col">
        <div className="flex flex-col sm:flex-row">
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-agilidad.png"
            }
            title={"AGILIDAD Y CREATIVIDAD"}
            content={
              "Buscamos soluciones originales a través de diversos enfoques, innovadores o no tan obvios , lo que solo se logra con un conocimiento profundo de las leyes y su entorno comercial."
            }
            classNamePlus={
              "sm:border-r-[1px] border-b-[1px] border-neutral-700				"
            }
          />
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-agilidad.png"
            }
            title={"AGILIDAD Y CREATIVIDAD"}
            content={
              "Buscamos soluciones originales a través de diversos enfoques, innovadores o no tan obvios , lo que solo se logra con un conocimiento profundo de las leyes y su entorno comercial."
            }
            classNamePlus={"border-b-[1px] border-neutral-700	"}
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-agilidad.png"
            }
            title={"AGILIDAD Y CREATIVIDAD"}
            content={
              "Buscamos soluciones originales a través de diversos enfoques, innovadores o no tan obvios , lo que solo se logra con un conocimiento profundo de las leyes y su entorno comercial."
            }
            classNamePlus={
              "sm:border-r-[1px] border-b-[1px] sm:border-b-0 border-neutral-700				"
            }
          />
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-agilidad.png"
            }
            title={"AGILIDAD Y CREATIVIDAD"}
            content={
              "Buscamos soluciones originales a través de diversos enfoques, innovadores o no tan obvios , lo que solo se logra con un conocimiento profundo de las leyes y su entorno comercial."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
