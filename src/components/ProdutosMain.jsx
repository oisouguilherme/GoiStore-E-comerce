import { CardProduto } from "./CardProduto";
import IPhone11b from "../assets/celulares/iphones/11 B.webp";
import IPhone11W from "../assets/celulares/iphones/11 W.webp";
import IPhone12B from "../assets/celulares/iphones/12 B.webp";
import IPhone12P from "../assets/celulares/iphones/12 P.webp";
import IPhone12W from "../assets/celulares/iphones/12 W.webp";
import IPhone12PM from "../assets/celulares/iphones/12 PRO MAX.webp";
import IPhone12PM2 from "../assets/celulares/iphones/12 PRO.webp";
import IPhone13PMG from "../assets/celulares/iphones/13 PROMAX GREEN.webp";
import IPhone13PM from "../assets/celulares/iphones/13 PROMAX.webp";
import IPhone13R from "../assets/celulares/iphones/13 ROSE.webp";
import IPhone13 from "../assets/celulares/iphones/13.webp";
import IPhone14PRO from "../assets/celulares/iphones/14 PRO.webp";
import IPhone14PRO2 from "../assets/celulares/iphones/14 PRO2.webp";
import IPhoneXRED from "../assets/celulares/iphones/XR RED.webp";
import IPhoneXRW from "../assets/celulares/iphones/XR WHITE.webp";
import IPhoneXR from "../assets/celulares/iphones/XR.webp";

import Xiaomi12L from "../assets/celulares/xiaomi/12lite.webp";
import Xiaomi13L from "../assets/celulares/xiaomi/13lite.webp";
import XiaomiNote12 from "../assets/celulares/xiaomi/note12branco.jpg";
import XiaomiNote12P from "../assets/celulares/xiaomi/note12propreto.webp";
import XiaomiNote12Pro from "../assets/celulares/xiaomi/note12pro.jpg";
import XiaomiNote122 from "../assets/celulares/xiaomi/note12.jpg";
import XiaomiNote12s from "../assets/celulares/xiaomi/note12s.webp";
import XiaomiPocoX5 from "../assets/celulares/xiaomi/pocoX5Pro.webp";
import XiaomiPad from "../assets/celulares/xiaomi/RedmiPad.jpg";

export function ProdutosMain() {
  return (
    <section id="nossosprodutos">
      <div className="px-8">
        <div className="max-w-6xl mx-auto py-12 space-y-12">
          <div className="flex justify-between">
            <h2 className="text-xl sm:text-2xl font-medium pb-1 border-b-4 border-[#ff6500]">
              Nossos Produtos
            </h2>
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            <CardProduto
              imagem={IPhone11b}
              celular={"Apple iPhone 11 64GB"}
              precoAtual={"3.150,00"}
              precoTotal={"3.599"}
              cor={"Preto"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={XiaomiNote122}
              celular={"REDMI NOTE 12 128GB"}
              precoAtual={"1.699,99"}
              precoTotal={"1.899"}
              cor={"Preto"}
              informacao={"8GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={IPhone11W}
              celular={"Apple iPhone 11 128GB"}
              precoAtual={"3.499,99"}
              precoTotal={"3.899"}
              cor={"Branco"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhone12B}
              celular={"Apple iPhone 12 128GB"}
              precoAtual={"3.800,00"}
              precoTotal={"4.199"}
              cor={"Preto"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={XiaomiNote12Pro}
              celular={"REDMI NOTE 12 PRO 128GB"}
              precoAtual={"1.869,99"}
              precoTotal={"2.199"}
              cor={"Branco"}
              informacao={"6GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={XiaomiNote12s}
              celular={"REDMI NOTE 12S 256BG"}
              precoAtual={"1.599,99"}
              precoTotal={"2.199"}
              cor={"Preto"}
              informacao={"8GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={IPhone12P}
              celular={"Apple iPhone 12 128GB"}
              precoAtual={"3.200,00"}
              precoTotal={"3.599"}
              cor={"Roxo"}
              informacao={""}
            />
            <CardProduto
              imagem={IPhone12W}
              celular={"Apple iPhone 12 128GB"}
              precoAtual={"3.200,00"}
              precoTotal={"3.599"}
              cor={"Branco"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhone12PM}
              celular={"Apple iPhone 12 PRO MAX"}
              precoAtual={"5.099,99"}
              precoTotal={"5.899"}
              cor={"Branco"}
              informacao={"128GB"}
            />
            <CardProduto
              imagem={Xiaomi13L}
              celular={"MI 13 LITE 128GB 5G"}
              precoAtual={"2.549,99"}
              precoTotal={"3.199"}
              cor={"Rosa"}
              informacao={"8GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={IPhone13PMG}
              celular={"Apple iPhone 13 PRO MAX"}
              precoAtual={"5.500,00"}
              precoTotal={"6.199"}
              cor={"Verde"}
              informacao={"128GB"}
            />
            <CardProduto
              imagem={IPhone12PM2}
              celular={"Apple iPhone 12 PRO MAX"}
              precoAtual={"5.099,99"}
              precoTotal={"5.899"}
              cor={"Prateado"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhone13R}
              celular={"Apple iPhone 13 128GB"}
              precoAtual={"3.800,00"}
              precoTotal={"4.199"}
              cor={"Rosa"}
              informacao={"Seminovo"}
            />
            <CardProduto
              imagem={IPhone13}
              celular={"Apple iPhone 13 128GB"}
              precoAtual={"4.299,99"}
              precoTotal={"4.899"}
              cor={"Preto"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhone14PRO}
              celular={"Apple iPhone 14 PRO 128GB"}
              precoAtual={"6.299,99"}
              precoTotal={"6.799"}
              cor={"Prateado"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhone14PRO2}
              celular={"Apple iPhone 14 PRO MAX"}
              precoAtual={"6.499,99"}
              precoTotal={"7.199"}
              cor={"Branco"}
              informacao={"128GB"}
            />
            <CardProduto
              imagem={IPhoneXRED}
              celular={"Apple iPhone XR 64GB"}
              precoAtual={"2.199,99"}
              precoTotal={"2.599"}
              cor={"Vermelho"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhone13PM}
              celular={"Apple iPhone 13 PRO MAX"}
              precoAtual={"6.199,99"}
              precoTotal={"6.599"}
              cor={"Prateado"}
              informacao={"128GB"}
            />
            <CardProduto
              imagem={IPhoneXRW}
              celular={"Apple iPhone XR 64GB"}
              precoAtual={"2.199,99"}
              precoTotal={"2.499"}
              cor={"Branco"}
              informacao={"1 ano de garantia Apple"}
            />
            <CardProduto
              imagem={IPhoneXR}
              celular={"Apple iPhone XR 64GB"}
              precoAtual={"1.749,99"}
              precoTotal={"2.199"}
              cor={"Preto"}
              informacao={"Seminovo"}
            />

            <CardProduto
              imagem={Xiaomi12L}
              celular={"MI 12 LITE 128GB 5G"}
              precoAtual={"2.499,99"}
              precoTotal={"2.899"}
              cor={"Preto"}
              informacao={"8GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={XiaomiNote12}
              celular={"REDMI NOTE 12 128BG"}
              precoAtual={"1.249,99"}
              precoTotal={"1.599"}
              cor={"Prateado"}
              informacao={"4GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={XiaomiNote12P}
              celular={"REDMI NOTE 12 PRO 25GB"}
              precoAtual={"1.699,99"}
              precoTotal={"1.899"}
              cor={"Preto"}
              informacao={"8GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={XiaomiPocoX5}
              celular={"POCO X5 PRO 256GB"}
              precoAtual={"2.399,99"}
              precoTotal={"2.599"}
              cor={"Azul"}
              informacao={"8GB de Mémoria RAM"}
            />
            <CardProduto
              imagem={XiaomiPad}
              celular={"REDMI PAD 128GB"}
              precoAtual={"1.549,99"}
              precoTotal={"1.799"}
              cor={"Prateado"}
              informacao={"4GB de Mémoria RAM"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
