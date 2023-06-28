import { IconStar } from "@/assets/Icons";
import Image from "next/image";
import Celular from '../assets/tel.jpg'
export function CardProduto(){
  return(
    <div className="w-64 p-4 bg-gray-50 shadow-xl cursor-pointer">
      <div className="relative">
        <p className="absolute bg-gray-500 px-2 text-white font-medium text-sm rounded-full top-2 left-2">37%</p>
        <Image src={Celular} alt="Iphone"/>
      </div>
      <p className="pb-4 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="flex gap-2 items-center">
        <p className="text-lg font-bold">R$9.465</p>
        <p className="text-sm text-red-500 font-bold line-through	">R$11.499</p>
      </div>
      <p className="text-sm"><strong>12x</strong> de <strong>R$768,82 sem juros</strong></p>
      <div className="text-yellow-200 flex items-center">
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <p className="text-gray-300 px-2">(5.0)</p>
      </div>
    </div>
  )
}