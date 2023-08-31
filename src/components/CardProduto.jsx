import Image from "next/image";
import { useState } from "react";
import { CompreAqui } from "./CompreAqui";

export function CardProduto({
  desconto,
  celular,
  precoAtual,
  precoTotal,
  precoDividido,
  imagem,
  cor,
  informacao,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div data-aos="fade-down" data-aos-delay="200">
      <div
        onClick={openModal}
        className="w-64 p-4 bg-gray-50 shadow-xl cursor-pointer"
      >
        <div className="relative h-64 overflow">
          <p className="absolute bg-gray-500 px-2 text-white font-medium text-sm rounded-full top-2 left-2">
            {desconto}
          </p>
          <Image src={imagem} alt={celular} className="object-contain h-full" />
        </div>
        <p className="pb-4 pt-2">{celular}</p>
        <div className="flex flex-col">
          <p className="text-sm text-zinc-500 line-through">R$ {precoTotal}</p>
          <p className="text-2xl font-bold text-orange-500">R$ {precoAtual}</p>
          <p className="text-sm text-zinc-500">À vista no PIX</p>
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
              cor={cor}
              informacao={informacao}
              hidden={"hidden sm:block"}
            />
            <p
              onClick={closeModal}
              className="absolute top-3 right-6 text-xl font-medium cursor-pointer"
            >
              X
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
