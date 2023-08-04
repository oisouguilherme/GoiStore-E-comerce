import Image from "next/image";
import Mulher from "../assets/mulherphone.png";

export function Banner() {
  return (
    <div className="bg-[url('/bgPhone.webp')] bg-cover bg-center w-full">
      <div className="bg-black bg-opacity-75">
        <div className="md:h-[600px] grid gap-12 md:grid-cols-2 max-w-6xl mx-auto px-4">
          <div className="text-white flex flex-col justify-center space-y-4 px-2">
            <h2 className="font-medium text-sm sm:text-base pt-12">
              Tecnologia de Ponta ao Seu Alcance: <br />
              iPhones Incríveis!
            </h2>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Descubra os <span className="text-[#ee6c09]">iPhones</span> mais modernos e desejados em nossa <span className="text-[#ee6c09]">loja</span>!
            </h1>
          </div>
          <div className="flex items-end justify-center md:justify-end">
            <Image src={Mulher} alt="Banner" className="w-64 md:w-96 " />
          </div>
        </div>
      </div>
    </div>
  );
}
