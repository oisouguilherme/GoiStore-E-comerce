import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import { OfertasSemana } from "@/components/OfertasSemana";
import { Category } from "@/components/Category";
import { MaisVendidos } from "@/components/MaisVendidos";
import { Footer } from "@/components/Footer";
import { Beneficios } from "@/components/Beneficios";
import { CompreAqui } from "@/components/CompreAqui";
import { ButtonWhatsApp } from "@/components/ButtonWhatsApp";
import Head from "next/head";
import ImageCell14Pro from "../assets/celulares/iphones/14 PRO.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init(); // Inicialize o AOS
  }, []);
  return (
    <>
      <Head>
        <title>GoiStore - A Teconologia Move o Mundo</title>
      </Head>
      <Header />
      <Banner />
      <OfertasSemana />
      <div className="h-fit flex flex-col gap-8 justify-center items-center">
        <video
          src="/video.mp4"
          autoPlay={true}
          muted
          loop
          className=" h-[450px] max-w-6xl w-full object-cover object-right sm:object-top rounded-lg "
        ></video>
      </div>
      <Category />
      <CompreAqui
        celular={"Apple iPhone 14 P/MAX 128GB"}
        imagem={ImageCell14Pro}
        precoAtual={"6.299,99"}
        precoTotal={"7.599"}
        informacao={"1 Ano de Garantia Apple"}
        cor={"Prateado"}
      />
      <MaisVendidos />
      <Beneficios />
      <ButtonWhatsApp />
      <Footer />
    </>
  );
}
