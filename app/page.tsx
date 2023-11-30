'use client';
import { motion } from 'framer-motion'
import About from './components/About'
import Works from './components/Works'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="w-screen bg-[#171717] flex">
        <div className="w-2/6 lg:flex hidden flex-col">
          <img className="hidden lg:flex h-[450px]w-[550px] p-10 justify-center" src="images/BLA-BLA.png" alt="" />
          <div className="flex-1 flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "linear", duration: .3 }}
              className="inline-flex -mr-60 pt-10 z-30 flex-col items-start gap-5">
              <span className="text-[34px] tracking-[4px] text-white">MERHABA BEN</span>
              <div className="text-7xl font-black text-white">KÜBRA KUŞCU</div>
              <span className="px-6 flex text-2xl bg-[#A9131E] py-4 font-bold tracking-[5px] text-[#ffffff]">FRONTEND DEVELOPER</span>

            </motion.div>
          </div>
        </div>
        <div className="lg:flex-1 flex-col ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", duration: .3 }}
            className="h-16 flex justify-between text-white xl:px-60 px-10 items-center text-sm bg-[#292828]">
            <Link href={"/"} className="">ANASAYFA</Link>
            <Link href={"/#about"} className="">HAKKIMDA</Link>
            <Link href={"/work"} className="">PROJELER</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ ease: "linear", duration: .3 }}
            className="bg-no-repeat w-screen bg-cover flex lg:h-[calc(100vh-4rem)] lg:w-full h-[400px] bg-[url('/images/portfolioImage4.jpeg')]">

            <div className="z-30 lg:hidden w-full flex flex-col gap-5 justify-end ">
              <span className="text-md text-white pl-16">MERHABA BEN</span>
              <div className="text-3xl text-white pl-16">KÜBRA KUŞCU</div>
              <span className="w-full justify-center flex text-2xl bg-[#A9131E] py-4 text-[#171717]">FRONTEND DEVELOPER</span>

            </div>
          </motion.div>
        </div>
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Works />

      </div>
    </>

  )
}