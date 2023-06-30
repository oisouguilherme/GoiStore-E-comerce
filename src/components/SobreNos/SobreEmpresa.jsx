import Image from "next/image";
import ImageBanner from "../../assets/banner.png";
import Link from "next/link";
import Head from "next/head";
export function SobreEmpresa() {
  return (
    <div>
      <Head>
        <title>Sobre Nós - GoiStore</title>
      </Head>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 py-12 px-2">
        <div className="sm:text-lg space-y-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            aspernatur debitis quibusdam, cum similique ea voluptas quis eaque
            dolor, repellat nobis harum itaque perferendis laborum consequuntur
            officiis adipisci tenetur rerum.
          </p>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quo asperiores aliquid fugiat error voluptates.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            accusantium, blanditiis quidem in nobis voluptates possimus nemo
            amet corrupti aperiam eius, incidunt qui. Atque, laboriosam cum!
            Consequatur, eaque. Magnam, placeat.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/"
              className="border-2 border-[#ee6c09] hover:bg-[#ee6c09] hover:text-white duration-300 text-[#ee6c09] px-6 py-1 font-medium rounded-xl"
            >
              VOLTAR A LOJA
            </Link>
            <a
              target="_blank"
              href="https://wa.me/5538998078611"
              className="border-2 bg-[#ee6c09] hover:bg-white hover:text-[#ee6c09] duration-300 border-[#ee6c09] text-white px-6 py-1 font-medium rounded-xl"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>
        <Image src={ImageBanner} alt="Imagem da Loja" />
      </div>
    </div>
  );
}
