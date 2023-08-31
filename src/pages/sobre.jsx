import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { NossosServicos } from "@/components/SobreNos/NossosServicos";
import { SobreEmpresa } from "@/components/SobreNos/SobreEmpresa";
import { SobreMim } from "@/components/SobreNos/SobreMim";
import { TitlePrincipal } from "@/components/Utils/TitlePrincipal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Sobre() {
  useEffect(() => {
    AOS.init(); // Inicialize o AOS
  }, []);
  
  return (
    <div>
      <Header />
      <TitlePrincipal title={"Nossa História de Sucesso"}/>
      <SobreEmpresa />
      <NossosServicos />
      <SobreMim />
      <Footer />
    </div>
  );
}
