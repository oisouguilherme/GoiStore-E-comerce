import Image from 'next/image'
import ImageCategory from '../../assets/category.webp'

export function CardCategory(){
  return(
    <div className='w-80 relative rounded-xl overflow-hidden shadow-black shadow-md'>
      <Image src={ImageCategory}/>
      <a href="#" className='absolute bottom-3 left-20 bg-white text-[#ee6c09] hover:scale-105 duration-300 px-6 py-2 rounded-md font-bold text-sm'>Ver produtos</a>
    </div>
  )
}