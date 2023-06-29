import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { NossosServicos } from "@/components/SobreNos/NossosServicos";
import { SobreEmpresa } from "@/components/SobreNos/SobreEmpresa";
import { SobreMim } from "@/components/SobreNos/SobreMim";

export default function Sobre() {
  return (
    <div>
      <Header />
      <Banner />
      <SobreEmpresa />
      <NossosServicos />
      <SobreMim />
      <Footer />
    </div>
  );
}
