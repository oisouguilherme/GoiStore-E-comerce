import { CardCategory } from "./CardCategory";
import ImageCelular from "../../assets/celular.png";
import ImageSom from "../../assets/som.png";
import ImageRelogio from "../../assets/relogio.png";

export function Category() {
  return (
    <div className="max-w-6xl mx-auto flex gap-12 justify-center flex-wrap py-12 px-1">
      <div data-aos="fade-down" data-aos-delay="300">
        <CardCategory image={ImageCelular} />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <CardCategory image={ImageRelogio} />
      </div>
      <div data-aos="fade-down" data-aos-delay="300">
        <CardCategory image={ImageSom} />
      </div>
    </div>
  );
}
