import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import { OfertasSemana } from "@/components/OfertasSemana";
import { Category } from "@/components/Category";
import { MaisVendidos } from "@/components/MaisVendidos";
import { Footer } from "@/components/Footer";
import { Beneficios } from "@/components/Beneficios";
import { CompreAqui } from "@/components/CompreAqui";
import { ButtonWhatsApp } from "@/components/ButtonWhatsApp";
import ImagePhone from "../assets/tel.jpg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GoiStore - A Teconologia Move o Mundo</title>
      </Head>
      <Header />
      <Banner />
      <OfertasSemana />
        <div className="h-fit flex flex-col gap-8 justify-center items-center">
          <video src="/video.mp4" autoPlay={true} muted loop className=" h-[450px] max-w-6xl w-full object-cover object-top rounded-lg">aa</video>
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
      <Beneficios />
      <ButtonWhatsApp />
      <Footer />
    </>
  );
}
