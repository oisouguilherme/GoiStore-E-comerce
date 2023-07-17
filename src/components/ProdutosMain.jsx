import { CardProduto } from "./CardProduto";
import ImageIphone from "../assets/tel.jpg";

export function ProdutosMain() {
  return (
    <section id="nossosprodutos">
      <div className="px-8">
        <div className="max-w-6xl mx-auto py-12 space-y-12">
          <div className="flex justify-between">
            <h2 className="text-xl sm:text-2xl font-medium pb-1 border-b-4 border-[#ff6500]">
              CELULARES
            </h2>
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
    </section>
  );
}
