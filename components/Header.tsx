import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const listMenu = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Contacto",
    link: "/contact",
  },
];

const Header = ({ initialBg }) => {
  const [overlay, setOverlay] = useState(false);

  const changes = {
    initialBg: initialBg,
  };

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
        className={`top-0 w-full z-10 flex items-center text-white pr-4 pl-12 sm:pr-12 fixed transition-colors ${
          fix
            ? "sm:bg-[#E11F25] bg-[#E11F25]"
            : `bg-[#E11F25] sm:${changes.initialBg}`
        }`}
      >
        <div
          className={`bg-[#E11F25] h-20 flex items-center pl-0 sm:pl-10 pr-10 transition-all ${
            fix ? "" : "sm:mt-5"
          } `}
        >
          <h2 className="text-4xl font-bold font-roboto text-white">LOGO</h2>
        </div>
        <div className="text-[1.1rem] h-full flex ml-auto">
          <p>+51 999 999 999 | legal@williamslex.com</p>
        </div>
        <div
          onClick={() => setOverlay(!overlay)}
          className="self-start bg-[#222] ml-auto px-[0.6rem] h-20 flex group cursor-pointer"
        >
          <span className="relative">
            <div className="w-5 h-[2px]"></div>
            <div className="w-5 h-[2px] bg-white absolute bottom-4 group-hover:bottom-[0.85rem] transition-all"></div>
            <div className="w-5 h-[2px] bg-white absolute bottom-[1.4rem]"></div>
            <div className="w-5 h-[2px] bg-white absolute bottom-[1.75rem] group-hover:bottom-[1.85rem] transition-all"></div>
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
            <Link href={`/${link}`}>
              <a className="z-[90] relative pb-2 group">
                {name}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all h-[1px] bg-white"></div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;