import { CardCategory } from "./CardCategory";

export function Category(){
  return(
    <div className="max-w-6xl mx-auto flex gap-12 justify-center flex-wrap py-12 px-1">
      <CardCategory/>
      <CardCategory/>
      <CardCategory/>
    </div>
  )
}