import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { BannerSobre } from "@/components/SobreNos/BannerSobre";
import { NossosServicos } from "@/components/SobreNos/NossosServicos";
import { SobreEmpresa } from "@/components/SobreNos/SobreEmpresa";
import { SobreMim } from "@/components/SobreNos/SobreMim";
import { TitlePrincipal } from "@/components/Utils/TitlePrincipal";

export default function Sobre() {
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
