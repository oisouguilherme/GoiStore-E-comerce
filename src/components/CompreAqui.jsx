import Image from "next/image";

import {
  IconInstagram,
  IconWhatsApp,
} from "@/assets/Icons";

export function CompreAqui({
  imagem,
  celular,
  cor,
  precoAtual,
  precoTotal,
  informacao,
  hidden,
}) {
  return (
    <div className="max-w-md sm:max-w-6xl mx-auto flex flex-col items-center sm:flex-row px-4 py-8 sm:py-12 bg-white rounded-2xl z-20 gap-8">
      <div className="md:w-1/2">
        <Image src={imagem} alt={celular} className="w-64 sm:w-96" />
      </div>
      <div className="max-w-lg md:w-1/2 flex flex-col gap-1 sm:gap-4">
        <h2 className="text-2xl">{celular}</h2>
        <div className="gap-4 w-12 pt-2 hidden sm:flex">
          <a
            href="https://www.instagram.com/goistore_buritismg/"
            target="_blank"
          >
            <IconInstagram />
          </a>
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5538998078611&e=AT3XJ32cFgpph_egVBov2Agyb2Yxjra_xHkuoDDOQ-NYVf9m2_D4atYnvCPLFEl4zzAMIOitQScTLKEMc8_eI0r_75UA7m-c"
            target="_blank"
          >
            <IconWhatsApp />
          </a>
        </div>
        <div className={hidden}>
          <p className="pb-2 text-sm sm:text-base">Cores disponiveis:</p>
          <div className="flex gap-4 text-sm sm:text-base">
            <p className="border-2 border-black py-2 px-4 rounded-2xl">{cor}</p>
          </div>
        </div>
        <div className={hidden}>
          <p className="text-sm sm:text-base">Informações:</p>
          <p className="text-sm sm:text-base">{informacao}</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm sm:text-base">Preço:</p>
          <div className="text-xs sm:text-sm">
            <p className="text-zinc-500 line-through text-sm">
              DE R$ {precoTotal}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-orange-500">
                R$ {precoAtual}
              </p>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          href="https://wa.me/5538998078611?text=Seja+bem+vindo+a+GoiStore%21+Digite+aqui+o+seu+Produto+de+Interesse%3A++"
          className="bg-[#ee6c09] hover:bg-opacity-90 duration-200 text-white text-xl font-bold text-center rounded-xl py-3"
        >
          Compra agora
        </a>
      </div>
    </div>
  );
}
