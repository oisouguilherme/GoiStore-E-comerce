import { CardProduto } from "./CardProduto";
import ImageCell11black from '../assets/celulares/iphones/11 B.webp'
import ImageCell11white from '../assets/celulares/iphones/11 W.webp'
import ImageCell14 from '../assets/celulares/iphones/14.webp'
import ImageCell14Pro from '../assets/celulares/iphones/14 PRO.webp'
import ImageCellXR from '../assets/celulares/iphones/XR.webp'
import ImageCellXRbranco from '../assets/celulares/iphones/XR WHITE.webp'


export function MaisVendidos() {
  return (
    <section
      id="maisvendidos"
      className=" mt-12 bg-gradient-to-b md:bg-gradient-to-r from-black to-gray-100 max-w-6xl mx-auto rounded-xl flex flex-col md:flex-row "
    >
      <div className="text-white md:w-96 p-8 space-y-4 flex items-center md:items-start flex-col">
        <h2 className="text-2xl">Os produtos mais vendidos da sua coleção</h2>
        <p className="text-sm">
          <span className="text-[#ee6c09] font-medium">Top Vendas!</span><br />
          Os queridinhos da coleção, prontos para você levar. Não
          perca! Estoque limitado.
        </p>
        <a
          href="https://wa.me/5538998078611?text=Seja+bem+vindo+a+GoiStore%21+Digite+aqui+o+seu+Produto+de+Interesse%3A++" target="_blank"
          className="bg-[#ee6c09] text-white hover:text-black duration-300 px-8 py-2 rounded-md font-bold text-sm text-center cursor-pointer uppercase"
        >
          fale conosco
        </a>
      </div>
      <div data-aos="fade-up"
      data-aos-delay="300" className="flex flex-wrap p-4 justify-center gap-4 w-full">
      <CardProduto
            imagem={ImageCell11black}
            celular={"Apple iPhone 11 64GB"}
            precoAtual={"3.150,00"}
            precoTotal={"3.599,99"}
            cor={"Preto"}
            informacao={"1 ano de garantia Apple"}
            />
        <CardProduto
          imagem={ImageCell14}
          celular={"Apple iPhone 14 128GB"}
          precoAtual={"4.699,99"}
          precoTotal={"5.199"}
          cor={"Preto Fosco"}
            informacao={"1 ano de garantia Apple"}
        />
        <CardProduto
          imagem={ImageCellXR}
          celular={"Apple iPhone XR 64GB"}
          precoAtual={"2.199,99"}
          precoTotal={"2.599"}
          cor={"Preto"}
          informacao={"1 ano de garantia Apple"}
        />
      </div>
    </section>
  );
}
