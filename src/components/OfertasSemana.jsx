import { CardProduto } from "./CardProduto";
import ImageCell11white from "../assets/celulares/iphones/11 W.webp";
import ImageCellXRbranco from "../assets/celulares/iphones/XR WHITE.webp";
import ImageCellXiaomi12 from "../assets/celulares/xiaomi/note12.jpg";
import ImageCellXiaomi12s from "../assets/celulares/xiaomi/note12s.webp";

export function OfertasSemana() {
  return (
    <div className="px-8">
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl pb-2 font-medium border-b-4 border-[#ee6c09]">
            Ofertas da Semana
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex gap-10 flex-wrap justify-center"
        >
          <CardProduto
            imagem={ImageCellXRbranco}
            celular={"Apple IPhone XR 64GB"}
            precoAtual={"1.749,99"}
            precoTotal={"1.899,99"}
            cor={"Branco"}
            informacao={"SEMINOVO"}
          />
          <CardProduto
            imagem={ImageCellXiaomi12}
            celular={"Redmi Note 12 128GB"}
            precoAtual={"1.249,99"}
            precoTotal={"1.300,00"}
            informacao={"4GB de Mémoria RAM"}
            cor={"Preto"}
          />
          <CardProduto
            imagem={ImageCell11white}
            celular={"Apple iPhone 11 64GB"}
            precoAtual={"2.499,99"}
            precoTotal={"2.699,99"}
            informacao={"SEMINOVO"}
            cor={"Branco"}
          />
          <CardProduto
            imagem={ImageCellXiaomi12s}
            celular={"Redmi Note 12s 256GB"}
            precoAtual={"1.599,99"}
            precoTotal={"1.899"}
            informacao={"8GB de Mémoria RAM"}
            cor={"Preto"}
          />
        </div>
      </div>
    </div>
  );
}
