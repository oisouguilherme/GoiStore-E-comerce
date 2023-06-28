import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from '../assets/logo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <section
      id="Nav"
      className=" z-50 py-2 px-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer w-44">
          <Link href="#">
            <Image src={Logo} alt="Logo Goistore" />
          </Link>
        </div>
        <div className="lg:hidden">
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 bottom-0 bg-black w-64 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="p-4 space-y-4">
              <li className="cursor-pointer font-bold text-white duration-300">
                <Link href="https://zunicseguros.com.br/">Home</Link>
              </li>
              <li className="cursor-pointer font-bold text-white duration-300">
                Mais vendidos
              </li>
              <li className="cursor-pointer font-bold text-white duration-300">
                Quem Somos
              </li>
              <li className="cursor-pointer font-bold text-white duration-300">
                Seguradoras
              </li>
              <li className="cursor-pointer font-bold text-white duration-300">
                Contatos
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 font-medium text-center items-center text-lg">
            <li className="cursor-pointer duration-300">
              <Link href="https://zunicseguros.com.br/">Página Inicial</Link>
            </li>
            <li className="cursor-pointer duration-300">
              Sobre Nós
            </li>
            <li className="cursor-pointer duration-300">
              Mais Vendidos
            </li>
            <li className="cursor-pointer duration-300">
              Nossos Produtos
            </li>
          </ul>
        </div>
        <div className="hamburger lg:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </div>
    </section>
  );
}
