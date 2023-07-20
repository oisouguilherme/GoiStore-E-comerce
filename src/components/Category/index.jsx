import { CardCategory } from "./CardCategory";
import ImageCelular from '../../assets/celular.png'
import ImageSom from '../../assets/som.png'
import ImageRelogio from '../../assets/relogio.png'

export function Category(){
  return(
    <div className="max-w-6xl mx-auto flex gap-12 justify-center flex-wrap py-12 px-1">
      <CardCategory image={ImageCelular}/>
      <CardCategory image={ImageRelogio}/>
      <CardCategory image={ImageSom}/>
    </div>
  )
}