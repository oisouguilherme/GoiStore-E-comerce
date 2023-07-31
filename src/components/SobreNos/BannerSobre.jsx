import Image from "next/image";
import IphoneImage from "../../assets/iphoneImage.png";

export function BannerSobre() {
  return (
    <div className="bg-gradient-to-r from-[#ee6c09] to-orange-300 w-full">
      <div className="md:h-[600px] grid gap-12 md:grid-cols-2 md:px-32">
        <div className="text-black flex flex-col justify-center space-y-4 px-2">
          <h2 className="font-medium text-sm sm:text-base pt-12 text-white">
            Descubra o Futuro da Tecnologia em Nossos Celulares!
          </h2>
          <h1 className="text-3xl sm:text-5xl font-bold">
            <span>Bem-vindo</span> à nossa loja, onde a inovação encontra a praticidade.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <Image src={IphoneImage} alt="Banner" className="w-full" />
        </div>
      </div>
    </div>
  );
}
