// import { motion } from "framer-motion"
'use client';

import { motion } from "framer-motion";

export default function About() {
    return (
        <div id="about" className="text-white w-screen flex flex-col lg:flex-row lg:h-screen">
            <div className="lg:flex h-full items-center hidden justify-end w-full lg:w-2/6 bg-[#171717] lg:bg-[#292828] ">
                <motion.img
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ ease: "linear", duration: .3 }}
                    className="md:h-[650px] w-full p-6 lg:p-0 h-full object-cover -mr-56 pt-10 z-30" src="images/portfolioImage3.jpg" alt="" />
            </div>
            <div className="h-full lg:w-4/6 justify-center py-10 bg-[#171717] items-center lg:gap-10 flex flex-col">
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ ease: "linear", duration: .3 }}
                    className="flex gap-8 pt-3 lg:pt-0">
                    <img className="lg:w-52 w-40 object-contain" src="/images/merhaba.png" alt="" />
                    <img className="lg:w-52 w-40 object-contain" src="/images/group4.png" alt="" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ ease: "linear", duration: .5 }}
                    className="lg:w-[440px] p-5 lg:p-0 flex lg:text-xl text-xs flex-col gap-6">
                    <span className="">
                        Ben Kübra Kuşcu. Temmuz 1997 doğumluyum. Bandırma Onyedi Eylül Üniversitesi , Erdek Meslek Yüksek Okulu Yönetim ve Organizasyon bölümü Yerel yönetimler programı mezunuyum. 2020 yılında mezun oldum. <br />
                    </span>
                    <span className="">
                        Yazılıma, web sitesinde görselliğe ve proje tasarlamaya ilgi duyuyordum. Daha sonrasında frontend developer olma yolunda ilerlemeye başladım. Html, Css ve Javascript sertifikası aldım. Daha sonra Tailwindcss, Next.js ve React.js’e yöneldim.
                    </span>

                </motion.div>
            </div>
        </div >
    )
}