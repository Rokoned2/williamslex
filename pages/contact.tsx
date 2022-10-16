import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Header from "../components/Header";

const contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });
  return (
    <>
      <Header />
      <section className="mt-44">
        <div className="max-w-[43.75rem] mx-auto mt-20 mb-32 w-[90%]">
          <h2 className="text-5xl font-roboto font-bold text-[#222] mb-12">
            Contacto
          </h2>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <h3 className="text-[1.6rem] font-bold font-roboto text-[#222] mb-6">
                Nuestras oficinas:
              </h3>
              <div className="text-[1.125rem] text-[#444]">
                <p>Vía Israel, P.H. Street Mall, Piso 5, Oficina 522</p>
                <p>Ciudad de Panamá, República de Panamá</p>

                <h3 className="text-[1.6rem] font-bold font-roboto text-[#222] my-5">
                  Llámenos:
                </h3>
                <p>Número: +51 999 999 999</p>
              </div>
            </div>
            <div className="flex-1 py-6 sm:py-0">
              {!isLoaded ? (
                <div className="w-full h-[28.4375rem]"> </div>
              ) : (
                <GoogleMap
                  zoom={10}
                  center={{ lat: 44, lng: -80 }}
                  mapContainerClassName="w-full h-[28.4375rem] "
                ></GoogleMap>
              )}
            </div>
          </div>
          <div className=" ">
            <h2 className="text-[1.6rem] font-bold font-roboto text-[#222] mb-4">
              Escríbanos:
            </h2>

            <form action="" className="text-[1.125rem]">
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
    </>
  );
};

export default contact;
