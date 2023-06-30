import { CardProduto } from "./CardProduto";
import ImageIphone from "../assets/tel.jpg";
import { Link } from "react-scroll";
export function OfertasSemana() {
  return (
    <div className="px-8">
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl text-white pb-2 font-medium border-b-4 border-[#ee6c09]">
            Ofertas da Semana
          </h2>
          <Link to="nossosprodutos" smooth={true}>
            <p className="font-bold text-sm sm:text-base text-white cursor-pointer">Ver todos</p>
          </Link>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
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
          <CardProduto
            desconto={"33%"}
            imagem={ImageIphone}
            celular={"Apple iPhone 14 128GB Roxo"}
            precoAtual={"5.099"}
            precoTotal={"7.599"}
            precoDividido={"516,74"}
          />
        </div>
      </div>
    </div>
  );
}
