import Header from "@/components/Header";
import { TitlePrincipal } from "@/components/Utils/TitlePrincipal";
import Image from "next/image";
import Depoimento from "../assets/depoimentos/depoimento1.png";
import Depoimento2 from "../assets/depoimentos/depoimento2.png";
import Depoimento3 from "../assets/depoimentos/depoimento3.png";
import Depoimento4 from "../assets/depoimentos/depoimento4.png";
import Depoimento5 from "../assets/depoimentos/depoimento5.png";
import Depoimento6 from "../assets/depoimentos/depoimento6.png";
import { Footer } from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";


export default function clientes() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Head>
        <title>Seja Nosso Cliente - GoiStore</title>
      </Head>
      <Header />
      <TitlePrincipal title={"Depoimentos de Clientes Satisfeitos"} />
      <p
        className="max-w-2xl mx-auto text-center italic px-2 text-sm sm:text-base"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        "Junte-se à nossa família de clientes satisfeitos e descubra uma
        experiência única em telecomunicações. Na{" "}
        <span className="text-orange-500 font-bold text-lg">GoiStore</span>, não
        apenas oferecemos os melhores produtos e serviços de telefone, mas
        também construímos relacionamentos duradouros baseados na confiança
        mútua. Faça parte da nossa jornada e experimente o futuro das
        comunicações hoje mesmo."
      </p>
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-center pb-32 pt-12">
        <Image
          src={Depoimento}
          alt="Imagem de Clientes Satisfeitos"
          className="w-80"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Image
          src={Depoimento2}
          alt="Imagem de Clientes Satisfeitos"
          className="w-80"
          data-aos="fade-up"
          data-aos-delay="250"
        />
        <Image
          src={Depoimento3}
          alt="Imagem de Clientes Satisfeitos"
          className="w-80"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <Image
          src={Depoimento4}
          alt="Imagem de Clientes Satisfeitos"
          className="w-80 object-cover"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Image
          src={Depoimento5}
          alt="Imagem de Clientes Satisfeitos"
          className="w-80"
          data-aos="fade-up"
          data-aos-delay="250"
        />
        <Image
          src={Depoimento6}
          alt="Imagem de Clientes Satisfeitos"
          className="w-80"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
      <Footer />
    </div>
  );
}
