import { CardProduto } from "./CardProduto";
import ImageIphone from "../assets/tel.jpg";
import { Link } from "react-scroll";

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
      <div className="flex flex-wrap p-4 justify-center gap-4 w-full">
        <CardProduto
          desconto={"33%"}
          imagem={ImageIphone}
          celular={"Apple iPhone 14 128GB Roxo"}
          precoAtual={"5.099"}
          precoTotal={"7.599"}
          precoDividido={"516,74"}
        />
        <CardProduto
          desconto={"33%"}
          imagem={ImageIphone}
          celular={"Apple iPhone 14 128GB Roxo"}
          precoAtual={"5.099"}
          precoTotal={"7.599"}
          precoDividido={"516,74"}
        />
        <CardProduto
          desconto={"33%"}
          imagem={ImageIphone}
          celular={"Apple iPhone 14 128GB Roxo"}
          precoAtual={"5.099"}
          precoTotal={"7.599"}
          precoDividido={"516,74"}
        />
      </div>
    </section>
  );
}
