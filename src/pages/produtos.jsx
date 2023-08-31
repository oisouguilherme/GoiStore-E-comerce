import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ProdutosMain } from "@/components/ProdutosMain";
import { TitlePrincipal } from "@/components/Utils/TitlePrincipal";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";

export default function Produtos() {
  useEffect(() => {
    AOS.init(); // Inicialize o AOS
  }, []);
  return (
    <>
      <Head>
        <title>Nossos Produtos - GoiStore</title>
      </Head>
      <Header />
      <TitlePrincipal title={"Explorar Nossa Coleção"} />
      <ProdutosMain />
      <Footer />
    </>
  );
}
