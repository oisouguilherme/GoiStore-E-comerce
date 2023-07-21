import Image from "next/image";
import ImageEmpresa from "../../assets/sabreEmpresa.png";
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
            Conheça a Nossa História
          </h2>
          <p>
            Em 2023, nasceu a "GoiStore" com uma visão audaciosa:
            revolucionar a comunicação e conectividade.
          </p>
          <p className="font-medium">
            De loja local a operações em várias cidades, nosso crescimento foi
            impulsionado pela excelência no atendimento ao cliente e produtos
            inovadores.
          </p>
          <p>
            Olhando para o futuro, continuamos comprometidos com a inovação e
            evolução. Com uma equipe talentosa, estamos prontos para liderar o
            caminho e criar um mundo mais conectado e inteligente.
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
        <Image src={ImageEmpresa} alt="Imagem da Loja" />
      </div>
    </div>
  );
}
