import { CardProduto } from "./CardProduto";

export function MaisVendidos(){
  return(
    <div className=" mt-12 bg-gradient-to-b md:bg-gradient-to-r from-black to-gray-100 max-w-6xl mx-auto rounded-xl flex flex-col md:flex-row ">
      <div className="text-white md:w-96 p-8 space-y-4 flex items-center md:items-start flex-col">
        <h2 className="text-2xl">Os produtos mais vendidos da sua coleção</h2>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
        <a href="#" className="bg-white hover:scale-105 duration-300 px-8 py-2 rounded-md font-bold text-sm text-center text-black">Ver mais produtos</a>
      </div>
      <div className="flex flex-wrap p-4 justify-center gap-4 w-full">
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
      </div>
    </div>
  )
}