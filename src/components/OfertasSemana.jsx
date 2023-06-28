import { CardProduto } from "./CardProduto";

export function OfertasSemana() {
  return (
    <div className="px-8">
      <div className="max-w-6xl mx-auto py-12 space-y-12">
        <div className="flex justify-between">
          <h2 className="text-xl text-white pb-2 font-medium border-b-4 border-[#ee6c09]">Ofertas da Semana</h2>
          <p className="font-bold text-white">Ver todos</p>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
      </div>
    </div>
  );
}
