import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ProdutosMain } from "@/components/ProdutosMain";
import { TitlePrincipal } from "@/components/Utils/TitlePrincipal";

export default function Produtos(){
  return(
    <div>
      <Header/>
      <TitlePrincipal title={"Explorar Nossa Coleção"}/>
      <ProdutosMain/>
      <Footer/>
    </div>
  )
}