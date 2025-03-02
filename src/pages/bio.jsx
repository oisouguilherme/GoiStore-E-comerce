import Image from "next/image";
import ImageMain from "../assets/bgMain.jpg";
import Logo from "../assets/logo.png";
import { IconInstagram } from "@/assets/Icons";
import Link from "next/link";

export default function Bio() {
  const iphones = [
    {
      model: "iPhone 16",
      image: "https://m.media-amazon.com/images/I/41CEGtQGb7L._AC_SX679_.jpg",
    },
    {
      model: "iPhone 16 Pro",
      image: "https://m.media-amazon.com/images/I/41Sy9dCGubL._AC_SX679_.jpg",
    },
    {
      model: "iPhone 15",
      image: "https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX679_.jpg",
    },
    {
      model: "iPhone 13",
      image: "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg",
    },
    {
      model: "iPhone 11",
      image:
        "https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_SX342_SY445_.jpg",
    },
  ];

  const WhatsAppLink = ({ model }) => {
    const message = encodeURIComponent(
      `Olá, estou interessado no ${model}. Ainda está disponível?`
    );
    return `https://wa.me/5538998078611?text=${message}`;
  };

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="relative">
        <Image src={ImageMain} alt="Banner principal" />
        <div className="px-2 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Logo"
            className="bg-white rounded-full w-24 h-24 flex object-contain items-center justify-center overflow-hidden absolute -bottom-10"
          />
        </div>
      </div>
      <div className="px-2 flex flex-col items-center pt-12">
        <div className="pb-5 space-y-5 w-full text-center">
          <h1 className="text-zinc-200 text-3xl">GoiStore 🚀</h1>
          <p className="text-zinc-300 text-lg">
            Clique em um dos celulares abaixo para falar conosco no WhatsApp! 📲
          </p>
          <div className="flex gap-2 flex-wrap items-center uppercase">
            <p className="bg-zinc-50 text-xs px-2 rounded-lg">🍏 Apple</p>
            <p className="bg-zinc-50 text-xs px-2 rounded-lg">📱 IPhone</p>
            <p className="bg-zinc-50 text-xs px-2 rounded-lg">💻 Macbook</p>
            <p className="bg-zinc-50 text-xs px-2 rounded-lg">📟 iPad</p>
          </div>
        </div>
        <a
          href="https://www.instagram.com/goistore_buritismg/"
          target="_blank"
          className="text-white hover:text-[#ee6c09] py-8 border-y w-full flex gap-1 items-center justify-center"
        >
          <IconInstagram size={32} />
        </a>
        <div className="grid grid-cols-2 gap-4 px-2 w-full pt-5">
          {iphones.map((iphone, index) => (
            <a
              key={index}
              href={WhatsAppLink({ model: iphone.model })}
              target="_blank"
              className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
            >
              <Image
                src={iphone.image}
                alt={iphone.model}
                width={120}
                height={120}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end pb-2 justify-center">
                <span className="text-white text-xl font-bold">
                  {iphone.model} 🔥
                </span>
              </div>
            </a>
          ))}
        </div>
        <Link
          href={"/sobre"}
          className="bg-[#ee6c09] text-white w-full py-2 text-center rounded-xl my-8 uppercase"
        >
          conheça nossa loja
        </Link>
      </div>
    </div>
  );
}
