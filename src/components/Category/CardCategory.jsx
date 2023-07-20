import Image from "next/image";
import { Link } from "react-scroll";

export function CardCategory({ image }) {
  return (
    <div className="w-80 relative rounded-xl overflow-hidden">
      <Image src={image} />
      <Link
        smooth={true} 
        to="nossosprodutos"
        className="absolute top-3 right-4 bg-white hover:bg-black text-[#ee6c09] hover:scale-105 duration-300 px-6 py-2 rounded-md font-bold text-sm uppercase cursor-pointer"
      >
        Ver produtos
      </Link>
    </div>
  );
}
