import Image from "next/image";
import ImageEmpresa from "../../assets/italo.png";
import Link from "next/link";
import Head from "next/head";
export function SobreEmpresa() {
  return (
    <div>
      <Head>
        <title>Sobre Nós - GoiStore</title>
      </Head>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 py-12 px-2">
        <div
          className="sm:text-lg space-y-4 text-center"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h2 className="text-2xl sm:text-4xl font-bold">
            Conheça a Nossa História
          </h2>
          <p>
            Em 2023, nascia a GoiStore com o firme propósito de revolucionar a
            experiência de compra de celulares e acessórios.
          </p>
          <p className="font-medium">
            Em pouco tempo, conquistamos uma base sólida de clientes leais e
            satisfeitos. Através do foco em marcas de renome como Iphone e
            Xiaomi, nossos clientes encontram em nossa loja uma seleção
            diversificada de smartphones, atendendo a todas as suas necessidades
            tecnológicas.
          </p>
          <p>
            Olhando para o futuro, a GoiStore está empenhada em se tornar um
            ponto de referência no mercado de venda de celulares.
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
        <div
          className="flex justify-center"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <Image
            src={ImageEmpresa}
            alt="Imagem da Loja"
            className="w-full object-contain"
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
