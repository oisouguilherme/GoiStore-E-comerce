import Image from "next/image";
import ImageSobreMim from '../../assets/sobremim.png'
export function SobreMim() {
  return (
    <div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 py-12 px-2">
        <div className="flex justify-center">
          <Image
            src={ImageSobreMim}
            alt="Imagem da Loja"
            className="w-96"
          />
        </div>
        <div className="sm:text-lg space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold">Quem Somos</h2>
          <p>
            Ítalo, o visionário fundador da GoiStore, traz consigo uma rica bagagem de experiência na área de vendas e empreendedorismo.
            Com uma trajetória sólida, ele já esteve à frente de diversos empreendimentos relacionados ao setor de design, onde desenvolveu uma visão aguçada para identificar tendências e oferecer produtos inovadores aos clientes. 
          </p>
          <p className="font-medium">
            Guiado por sua determinação e visão inspiradora, Ítalo tem uma perspectiva clara para o futuro da GoiStore.
          </p>
          <p>
            Além de sua atuação empreendedora, Ítalo demonstra uma busca constante pelo conhecimento e crescimento pessoal. Atualmente, ele está dedicado a seus estudos no campo do Direito, ampliando suas habilidades e ampliando sua compreensão sobre questões jurídicas. 
          </p>
        </div>
      </div>
    </div>
  );
}
