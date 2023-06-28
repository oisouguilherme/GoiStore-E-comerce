import { IconStar } from "@/assets/Icons";
import Image from "next/image";
import { useState } from "react";
import { CompreAqui } from "./CompreAqui";

export function CardProduto({desconto, celular, precoAtual, precoTotal, precoDividido, imagem}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="w-64 p-4 bg-gray-50 shadow-xl cursor-pointer"
      >
        <div className="relative">
          <p className="absolute bg-gray-500 px-2 text-white font-medium text-sm rounded-full top-2 left-2">
            {desconto}
          </p>
          <Image src={imagem} alt={celular} />
        </div>
        <p className="pb-4 pt-2">{celular}</p>
        <div className="flex gap-2 items-center">
          <p className="text-lg font-bold">{precoAtual}</p>
          <p className="text-sm text-red-500 font-bold line-through	">
            {precoTotal}
          </p>
        </div>
        <p className="text-sm">
          <strong>12x</strong> de <strong>R$ {precoDividido} sem juros</strong>
        </p>
        <div className="text-yellow-200 flex items-center">
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <p className="text-gray-300 px-2">(5.0)</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex px-2 items-center justify-center z-50">
          <div
            className="bg-black bg-opacity-75 absolute inset-0"
            onClick={closeModal}
          ></div>
          <div className="z-10 relative">
            <CompreAqui
              celular={celular}
              imagem={imagem}
              precoAtual={precoAtual}
              precoTotal={precoTotal}
              precoDividido={precoDividido}
              desconto={desconto}
              cor={"Roxo"}
              hidden={"hidden sm:block"}
            />
            <p onClick={closeModal} className="absolute top-3 right-6 text-xl font-medium cursor-pointer">X</p>
          </div>
        </div>
      )}
    </div>
  );
}
