import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import logo from "../images/Williams-logo-N2a.png";
import Image from "next/image";

const listMenu = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "ÁREAS DE PRÁCTICA",
    link: "https://williamslex.com/areas-de-practica/",
  },
  {
    name: "EQUIPO",
    link: "https://williamslex.com/equipo/",
  },
  {
    name: "LA FIRMA",
    link: "/",
  },
  {
    name: "CONTACTO",
    link: "/contact",
  },
];

interface HeaderProps {
  smallBgColor?: string;
}

const Header: React.FC<HeaderProps> = ({ smallBgColor }) => {
  const [overlay, setOverlay] = useState(false);

  const [fix, setFix] = useState(false);
  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 150) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixed);
    return () => {
      document.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <>
      <nav
        className={`top-0 w-full z-10 flex items-center text-white pr-4 px-4 md:px-12 fixed transition-colors ${
          fix ? "sm:bg-[#E11F25] bg-[#E11F25]" : `bg-[#E11F25] ${smallBgColor}`
        }`}
      >
        <div
          className={`bg-[#E11F25] h-20 flex items-center pl-0  transition-all ${
            fix ? "" : "sm:mt-5"
          } `}
        >
          <a href="/">
            <div className="w-[16.875rem]">
              <Image src={logo} alt="" />
            </div>
            {/* <a className="text-4xl font-bold font-roboto text-white">LOGO</a> */}
          </a>
        </div>
        <div className="text-[1.1rem] h-full hidden sm:flex ml-auto">
          <p className="text-center">+51 926 819 555 | legal@williamslex.com</p>
        </div>
        <div
          onClick={() => setOverlay(!overlay)}
          className={`self-start bg-[#222] ml-auto px-[0.6rem] h-20 ${
            fix ? "h-[3.9rem]" : ""
          }  flex group cursor-pointer transition-all`}
        >
          <span className="relative">
            <div className="w-5 h-[2px]"></div>
            <div className="w-5 h-[2px] bg-white absolute bottom-4 xl:group-hover:bottom-[0.95rem] transition-all"></div>
            <div className="w-5 h-[2px] bg-white absolute bottom-[1.4rem]"></div>
            <div className="w-5 h-[2px] bg-white absolute bottom-[1.75rem] xl:group-hover:bottom-[1.85rem] transition-all"></div>
          </span>
        </div>
      </nav>
      <aside
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 ${
          overlay ? "w-full duration-500" : "w-0 duration-700"
        } -translate-y-1/2 h-screen bg-[#222] opacity-90 z-20 transition-all `}
      ></aside>

      <div
        onClick={() => setOverlay(!overlay)}
        className={`fixed top-4 right-4 sm:top-8 sm:right-12 w-[2.875rem] h-[2.875rem] bg-[#151515] transition-opacity  ${
          overlay
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 pointer-events-none duration-200"
        } z-30 text-white flex items-center justify-center text-xl cursor-pointer hover:bg-white hover:text-black transition-colors`}
      >
        <IoClose />
      </div>
      <ul
        className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 text-white z-[60] fixed text-center text-[1.8rem] uppercase font-roboto font-bold  ${
          overlay
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 pointer-events-none duration-200"
        }`}
      >
        {listMenu.map(({ name, link }, index) => (
          <li className="w-full z-[70] mb-4" key={index}>
            <a href={link} className="z-[90] relative pb-2 group">
              {name}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all h-[1px] bg-white"></div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
