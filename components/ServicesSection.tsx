import React from "react";
import ServicesItem from "./ServiceItem";

const practiceAreas = [
  { name: "Inversión Extranjera y Comercio Internacional", link: "/" },
  { name: "Derecho Inmobiliario y Bienes Raíces", link: "/" },
  { name: "Derecho Ambiental", link: "/" },
  { name: "Derecho Financiero, Bancario y Valores", link: "/" },
  { name: "Propiedad Intelectual y Registros Sanitarios", link: "/" },
  { name: "Litigación y Arbitrajes", link: "/" },
  { name: "Derecho Laboral", link: "/" },
  { name: "Derecho Corporativo", link: "/" },
  { name: "Derecho Comercial", link: "/" },
  { name: "Derecho Tributario", link: "/" },
  { name: "Migración y Naturalización", link: "/" },
  { name: "Contratación Pública", link: "/" },
  { name: "Planificación Patrimonial y Sucesoria", link: "/" },
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
              "flex-1 sm:border-r-[1px] border-b-[1px] border-neutral-700				"
            }
          />
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-prioridad.png"
            }
            title={"PRIORIZAMOS"}
            content={
              "Nuestros clientes son la prioridad, por ello siempre respondemos a sus necesidades y presiones, y nos mantenemos accesibles por distintos medios."
            }
            classNamePlus={"flex-1 border-b-[1px] border-neutral-700	"}
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-relaciones.png"
            }
            title={"CONSTRUIMOS RELACIONES DURADERAS  "}
            content={"Vemos sus problemas inmediatos y prevemos a largo plazo."}
            classNamePlus={
              "flex-1 sm:border-r-[1px] border-b-[1px] sm:border-b-0 border-neutral-700				"
            }
          />
          <ServicesItem
            image={
              "https://williamslex.com/wp-content/uploads/2018/09/icon-w-perspectiva.png"
            }
            title={"PERSPECTIVA INTERNACIONAL CON UN ENFOQUE LOCAL"}
            content={
              "Aplicamos nuestro conocimiento de las grandes empresas internacionales con una visión local para ayudar a resolver los desafíos de su negocio."
            }
            classNamePlus={"flex-1"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
