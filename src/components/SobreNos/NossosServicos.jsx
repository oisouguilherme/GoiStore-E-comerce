import {
  IconPhone,
  IconPalette,
  IconAcessorios,
  IconTools,
} from "@/assets/Icons";

export function NossosServicos() {
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-4 text-center py-12 px-2">
        <h2 className="text-2xl sm:text-4xl font-bold ">
          Conheça Nossas Categorias
        </h2>
        <p className="text-xl sm:text-2xl border-y-2 py-1 w-fit mx-auto">
          Produtos que Conectam
        </p>
        <div className="flex flex-wrap justify-center gap-12 pt-12">
          <div
            className="w-80 flex flex-col items-center space-y-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-gray-100 p-6 rounded-full">
              <IconPhone />
            </div>
            <p className="font-medium text-lg">Smartphones Avançados</p>
            <p>
              Explore nossa coleção de smartphones de última geração, projetados
              para oferecer o máximo em desempenho e funcionalidade.
            </p>
          </div>
          <div
            className="w-80 flex flex-col items-center space-y-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-gray-100 p-6 rounded-full">
              <IconAcessorios />
            </div>
            <p className="font-medium text-lg">Acessórios Essenciais</p>
            <p>
              Encontre os acessórios perfeitos para o seu dispositivo, desde
              capas elegantes a fones de ouvido de alta qualidade.
            </p>
          </div>
          <div
            className="w-80 flex flex-col items-center space-y-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="bg-gray-100 p-6 rounded-full">
              <IconTools />
            </div>
            <p className="font-medium text-lg">Experiência Completa</p>
            <p>
              Além de Produtos Incríveis, Oferecemos Serviços Exclusivos para
              Você
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
