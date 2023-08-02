import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import { OfertasSemana } from "@/components/OfertasSemana";
import Image from "next/image";
import { Category } from "@/components/Category";
import { MaisVendidos } from "@/components/MaisVendidos";
import { ProdutosMain } from "@/components/ProdutosMain";
import { Footer } from "@/components/Footer";
import { Beneficios } from "@/components/Beneficios";
import { CompreAqui } from "@/components/CompreAqui";
import { ButtonWhatsApp } from "@/components/ButtonWhatsApp";
import ImagePhone from "../assets/tel.jpg";
import Head from "next/head";
import { IconWhatsApp } from "@/assets/Icons";
export default function Home() {
  return (
    <>
      <Head>
        <title>GoiStore - A Teconologia Move o Mundo</title>
      </Head>
      <Header />
      <Banner />
      <OfertasSemana />
      <div className="bg-[url('/banner2.jpg')] bg-cover max-w-6xl mx-auto rounded-lg overflow-hidden">
        <div className="bg-black bg-opacity-70 h-96 flex flex-col gap-8 justify-center items-center">
          <h2 className="text-[#ee6c09] font-bold text-3xl sm:text-4xl text-center max-w-xl px-2">
            Transforme seu mundo com a inovação dos iPhones <br />{" "}
            <span className="text-white">A revolução na palma da sua mão!</span>
          </h2>
          <a href="https://wa.me/5538998078611?text=Seja+bem+vindo+a+GoiStore%21+Digite+aqui+o+seu+Produto+de+Interesse%3A++" target="_blank" className="flex gap-2 items-center justify-center bg-[#ee6c09] px-20 py-3 text-white font-medium uppercase rounded-lg hover:scale-105 duration-300">
            <IconWhatsApp /> WhatsApp
          </a>
        </div>
      </div>
      <Category />
      <CompreAqui
        celular={"Apple iPhone 14 128GB Roxo"}
        imagem={ImagePhone}
        precoAtual={"5.099"}
        precoTotal={"7.599"}
        precoDividido={"516,74"}
        desconto={"33%"}
        cor={"Roxo"}
      />
      <MaisVendidos />
      <ProdutosMain />
      <Beneficios />
      <ButtonWhatsApp />
      <Footer />
    </>
  );
}
