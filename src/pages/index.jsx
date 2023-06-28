import { Banner } from '@/components/Banner'
import Header from '@/components/Header'
import { OfertasSemana } from '@/components/OfertasSemana'
import Image from 'next/image'
import Banner2 from '../assets/banner2.jpg'
import { Category } from '@/components/Category'
import { MaisVendidos } from '@/components/MaisVendidos'
import { ProdutosMain } from '@/components/ProdutosMain'
import { Footer } from '@/components/Footer'
import { Beneficios } from '@/components/Beneficios'
import { CompreAqui } from '@/components/CompreAqui'
import { ButtonWhatsApp } from '@/components/ButtonWhatsApp'
export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <div className='bg-gradient-to-t from-white to-black'>
      <OfertasSemana/>
      <Image src={Banner2} alt='banner' className='max-w-6xl w-full mx-auto rounded-2xl relative'/>
      <Category/>
      <CompreAqui/>
      <MaisVendidos/>
      <ProdutosMain/>
      <Beneficios/>
      <ButtonWhatsApp/>
      </div>
      <Footer/>
    </>
  )
}
