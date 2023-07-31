import Image from "next/image";
import ImagePhone from '../../assets/iphoneImage.png'

export function BannerSobre() {
  return (
    <div className="bg-[url('/bgPhone.webp')] bg-cover w-full">
      <div className="md:h-[600px] bg-black bg-opacity-90 grid gap-12 md:grid-cols-2 md:px-32">
        <div className="text-white flex flex-col justify-center space-y-4 px-2">
          <h2 className="font-medium text-sm sm:text-base pt-12 text-orange-500">
            Descubra o Futuro da Tecnologia em <br />Nossos Celulares!
          </h2>
          <h1 className="text-3xl sm:text-5xl font-bold">
            <span>Bem-vindo</span> à nossa loja, onde a inovação encontra a
            praticidade.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={ImagePhone}
            alt="Banner"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
