

export default function Home() {
  return (
    <div className="w-screen lg:h-screen h-[100dvh] bg-[#171717] flex">
      <div className="w-2/6 hidden lg:flex flex-col">
        <img className="h-[450px] w-[550px] p-10 justify-center" src="images/BLA-BLA.png" alt="" />
        <div className="flex-1 flex justify-end">
          <div className="inline-flex -mr-60 pt-10 z-30 flex-col gap-5">
            <span className="text-[34px] text-white">MERHABA BEN</span>
            <div className="text-7xl text-white">KÜBRA KUŞCU</div>
            <span className="w-[420px] justify-center flex text-2xl font-[500] bg-[#A9131E] rounded-md py-4 text-[#171717]">FRONTEND DEVELOPER</span>

          </div>
        </div>
      </div>
      <div className="lg:flex-1 flex-col ">
        <div className="h-16 flex justify-between text-white xl:px-60 px-10 items-center text-sm bg-[#424141]">
          <div className="flex flex-col gap-2">
            <div className="">ANASAYFA</div>
            <div className="h-1 w-18 rounded-full bg-[#A9131E]"></div>
          </div>
          <div className="">HAKKINDA</div>
          <div className="">PROJELER</div>
          <div className="">BLOG</div>
        </div>
        <div className="bg-no-repeat flex w-full object-cover overflow-hidden lg:h-[calc(100vh-4rem)] h-[calc(100dvh-4rem)] bg-[url('/images/portfolioImage.jpeg')]"></div>
      </div>
    </div>
  )
}