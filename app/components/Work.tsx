
import works from "../data/works.json"
export default function Work() {
  return (
    <div className="w-screen flex flex-col bg-[#292828] xl:h-screen">
      <div className="h-20 justify-between bg-[#171717] sm:px-24 md:px-5 xl:px-[325px] px-5  flex items-center border-white/20 border-t">
        <span className=" font-bold lg:text-2xl text-[#e7e5e5] bottom-1">PROJELER</span>
        <span className="text-white text-sm lg:text-lg">Tümünü İncele</span>
      </div>
      <div className="flex-1 p-4 items-center py-10 justify-center flex">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 max-w-7xl gap-4 grid-cols-1">
          {
            works.slice(0, 9).map(work => {
              return <img src={work.banner} alt="" />
            })
          }
        </div>
      </div>

    </div>
  )
}