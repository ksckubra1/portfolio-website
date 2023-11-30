'use client';
import { motion } from "framer-motion";
import Header from "../components/Header"
import works from "../data/works.json"
import Link from "next/link";
export default function Works() {
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
        <div className="w-screen bg-[#292828] justify-center flex flex-col items-center px-4 lg:px-0">
            <Header />
            <div className="flex-col flex py-14">
                <span className="font-bold lg:text-2xl w-full h-14 flex items-center text-[#e7e5e5] bottom-1">PROJELER</span>

                <motion.div
                    variants={parentVariant}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true }}

                    className="grid md:grid-cols-2 xl:grid-cols-3 max-w-7xl gap-4 grid-cols-1">
                    {
                        works.map(work => {
                            return <Link key={work.id} href={`/work/${work.id}`}>
                                <motion.img className="h-full w-full object-cover"
                                    variants={childVariant}
                                    src={work.images[0]} alt="" />
                            </Link>
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}