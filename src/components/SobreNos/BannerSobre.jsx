import Image from "next/image";
import ImagePhone from '../../assets/iphoneImage.png'

export function BannerSobre() {
  return (
    <div className="bg-[url('/bgPhone.webp')] bg-cover w-full">
      <div className="bg-black bg-opacity-90">
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 items-center justify-center py-16 px-4">
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
              className="w-96 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
