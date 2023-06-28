import { CardProduto } from "./CardProduto";

export function ProdutosMain(){
  return(
    <div>
       <div className="px-8">
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div className="flex justify-between">
          <h2 className="text-xl font-medium pb-1 border-b-4 border-[#ff6500]">IPhone</h2>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
      </div>
    </div>
    </div>
  )
}