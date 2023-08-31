import Image from "next/image";
import Logo from "../assets/logo.png";

import { useState } from "react";

import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="Nav" className="z-50 py-4 px-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer w-36">
          <Link href="/">
            <Image src={Logo} alt="Logo Goistore" />
          </Link>
        </div>
        <div className="lg:hidden">
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 bottom-0 bg-black z-40 w-64 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="p-8 space-y-4 text-2xl">
              <li className="cursor-pointer text-white duration-300">
                <Link href="/">Página Inicial</Link>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <Link href="/produtos">Nossos Produtos</Link>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <Link href="/sobre">Sobre Nós</Link>
              </li>
              <li className="cursor-pointer text-white duration-300">
                <Link href="/clientes">Nossos Clientes</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 font-medium text-center items-center text-lg">
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <Link href="/produtos">Nossos Produtos</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300">
              <Link href="/clientes">Nossos Clientes</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger lg:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </div>
      </div>
    </section>
  );
}
