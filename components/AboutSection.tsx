import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row ">
      <div className="flex-1 flex justify-center items-center bg-cover bg-[url('https://williamslex.com/wp-content/themes/WW-wp/images/bckHome-about.jpg')]">
        <div className="bg-white w-[21.875rem] h-[21.875rem] lg:w-[25rem] lg:h-[25rem] flex items-center text-center lg:py-[3.5rem] my-12">
          <div className="border-y-[0.2rem] border-black px-10 w-full py-4 lg:py-10">
            <h3 className="uppercase font-bold font-roboto text-[1.875rem] leading-[1.05] text-[#222] mb-10">
              Su Aliado
              <br />
              Jurídico-Empresarial
              <br />
              de mayor confianza.
            </h3>
            <div className="relative group border-[1.1px] border-[#222] inline-flex cursor-pointer">
              <button className="uppercase bg-[#222] text-white font-bold text-xs tracking-[.25em] font-roboto px-5 py-3">
                Contáctenos
              </button>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-0 w-0 group-hover:w-full group-hover:h-full transition-all duration-200 ease-in-out"></div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="flex-1">
        <div className=" text-center py-16 px-[0.9375rem] lg:px-32 ">
          <p className="text-[#e21f26] italic mb-5">
            Soluciones legales creativas y efectivas
          </p>
          <h3 className="text-[2.125rem] lg:text-[2.5rem] font-roboto font-bold leading-[1.02] mb-5 text-[#222]">
            SOBRE WILLIAMS & WILLIAMS
          </h3>
          <p className="text-[#444]">
            Con una completa orientación a brindar soluciones legales creativas
            y efectivas, somos los aliados legales y de negocios de cada uno de
            nuestros clientes. La contundente capacidad jurídica y calidad de
            atención, ofrecida por los miembros de Williams & WIlliams, nos ha
            valido una reputación impecable en la atención de casos de gran
            complejidad.
          </p>
          <h5 className="text-[1.375rem] font-roboto font-bold my-4 text-[#222]">
            LA PERSONALIZACIÓN ES EL FACTOR CLAVE…
          </h5>
          <p className="text-[#444]">
            …por lo que al ser Wiliams & Williams una boutique legal nos permite
            un acercamiento único, de forma tal que sus asuntos se vuelven
            nuestros.
          </p>

          <h5 className="text-[1.375rem] font-roboto font-bold my-4 text-[#222]">
            APORTAMOS VALOR A SU OPERACIÓN
          </h5>
          <p className="text-[#444]">
            En <span className="font-bold">Williams & Williams</span> atendemos
            una clientela diversa, desde empresas multinacionales, entidades
            estatales, organizaciones sin fines de lucro, hasta emprendedores,
            buscando siempre un solo objetivo, aportar valor en las operaciones
            de cada uno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
