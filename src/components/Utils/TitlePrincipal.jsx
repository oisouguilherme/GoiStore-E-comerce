export function TitlePrincipal ({title}){
  return(
    <div className="max-w-6xl mx-auto text-center px-4 py-8 flex justify-center">
      <div className="flex flex-col items-start">
        <h2 className="font-bold text-4xl pb-2 text-orange-500 uppercase">
          {title}
        </h2>     
      </div>
    </div>
  )
}