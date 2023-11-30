
import Link from "next/link"
import works from "../data/works.json"
import { motion } from "framer-motion"
import { useState } from "react"
export default function Work() {
  const [projeId, setProjeId] = useState(null)

  const parentVariant = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .1,
        when: "beforeChildren"
      }
    }
  }
  const childVariant = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <div className="w-screen flex flex-col bg-[#292828] xl:h-screen">
      <div className="h-20 justify-between bg-[#171717] sm:px-24 md:px-5 xl:px-[325px] px-5  flex items-center border-white/20 border-t">
        <span className=" font-bold lg:text-2xl text-[#e7e5e5] bottom-1">PROJELER</span>
        <Link href={"/work"} className="text-white text-sm lg:text-lg">Tümünü İncele</Link>
      </div>
      <div className="flex-1 p-4 items-center py-10 justify-center flex">
        <motion.div
          variants={parentVariant}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 max-w-7xl gap-4 grid-cols-1">
          {
            works.slice(0, 9).map(work => <Link key={work.id} href={`/work/${work.id}`}>
              <motion.img className="h-full w-full object-cover"
                variants={childVariant}
                src={work.images[0]} alt="" />
            </Link>
            )
          }

        </motion.div>
      </div>

    </div>
  )
}