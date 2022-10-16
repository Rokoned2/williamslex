import React from "react";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#f8f8f8] ">
      <div className="lg:flex xl:w-[73.125rem] mx-auto">
        <div className="flex-1 px-3">
          <h4 className="font-roboto text-[#222] font-bold text-[1.375rem] mb-8">
            INFORMACIÓN DE CONTACTO
          </h4>
          <h4 className="text-[#e21f26] mb-5 font-bold text-4xl">LOGO</h4>
          <div className="text-[1.125rem]">
            <p>Vía Israel, P.H. Street Mall,</p>
            <p>Piso 5, Oficina 522</p>
            <p>Ciudad de Panamá, República de Panamá</p>

            <p className="my-4">Panamá: +51 999 999 999</p>
            <p>info@email.com</p>
          </div>
          <div>
            <div className="">
              <ImFacebook className="text-white" />
            </div>
            <div>
              <ImLinkedin2 className="text-white" />
            </div>
            <div>
              <ImTwitter className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form action="" className="pl-3 pr-5">
            <input
              className="p-3 w-full border-b-2 border-black outline-0 bg-transparent"
              placeholder="Nombre *"
              type="text"
            />
            <input
              className="p-3 mt-4 w-full border-b-2 border-black outline-0 bg-transparent"
              placeholder="Email *"
              type="text"
            />
            <input
              className="p-3 mt-4 w-full border-b-2 border-black outline-0 bg-transparent"
              placeholder="Teléfono *"
              type="text"
            />
            <textarea
              className="resize-none pt-3 px-3 h-[12.5rem] mt-4 w-full border-b-2 border-black outline-0 bg-transparent"
              placeholder="Mensaje *"
            />
            <button className="bg-black text-white mt-4 block w-full py-3 hover:bg-[#444] transition-colors ">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
