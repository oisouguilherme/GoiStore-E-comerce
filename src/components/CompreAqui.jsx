import Image from "next/image";
import Telefone from '../assets/tel.jpg'
import { IconFacebook, IconInstagram, IconTikTok, IconTwitter } from "@/assets/Icons";
export function CompreAqui(){
  return(
    <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row px-4 py-12 bg-white rounded-2xl">
      <div className="md:w-1/2 max-w-lg">
        <Image src={Telefone}/>
      </div>
      <div className="max-w-lg md:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl">Apple iPhone 14 128GB Roxo</h2>
        <div className="flex gap-4 w-12 pt-2">
            <a href="#">
              <IconInstagram />
            </a>
            <a href="#">
              <IconFacebook/>
            </a>
            <a href="#">
              <IconTwitter />
            </a>
            <a href="#">
              <IconTikTok />
            </a>
          </div>
        <div >
          <p className="pb-2">Escolha a Capacidade:128GB</p>
          <div className="flex gap-4">
            <p className="border-2 border-black py-2 px-4 rounded-2xl">128GB</p>
            <p className="border-2 py-2 px-4 rounded-2xl">256GB</p>
          </div>
        </div>
        <div>
          <p className="pb-2">Escolha a Cor: Roxo</p>
          <div className="flex gap-4">
            <p className="border-2 border-black py-2 px-4 rounded-2xl">Roxo</p>
            <p className="border-2 py-2 px-4 rounded-2xl">Preto</p>
            <p className="border-2 py-2 px-4 rounded-2xl">Azul</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p>Preço:</p>
          <div className="text-sm">
            <p className="text-red-600 font-bold line-through text-xs">DE R$7.599</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">R$ 5.099</p>
              <p className="bg-green-500 w-fit px-2 rounded-full text-xs text-white font-bold">-33%</p>
            </div>
            <p className="pb-2">Em até 12x de R$ 516,74</p>
            <p className="text-xs bg-gray-600 rounded-3xl text-center font-bold text-white">R$ 2.500 de desconto</p>
          </div>

        </div>
          <a href="#" className="bg-[#ee6c09] text-white font-bold text-center rounded-xl py-2">Compra agora</a>

      </div>
    </div>
  )
}