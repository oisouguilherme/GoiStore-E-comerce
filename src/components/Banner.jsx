import Image from "next/image";
import banner from '../assets/banner.png'

export function Banner(){
  return(
    <Image src={banner} alt="Banner" className="w-full"/>
  )
}