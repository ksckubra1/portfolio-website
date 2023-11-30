'use client';
import Link from "next/link";
import Header from "../../components/Header"
import works from "@/app/data/works.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react";
import { IWork } from "@/app/data/works";
import { motion } from "framer-motion";

export default function Work({ params }: { params: { id: number } }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderElem = useRef<HTMLDivElement>(null)

    const targetWork: IWork = (works as IWork[]).find(work => work.id == params.id) || { id: 0 } as IWork

    if (targetWork.id == 0) {
        return <div className="w-screen bg-[#282828] flex items-center flex-col"
        >
            <Header />
            <div className="flex h-screen justify-center items-center">
                <span className="text-xl text-white">Proje Bulunamadı..</span>
            </div>
        </div>
    }

    type slide = {
        type: string
        src: string
    }

    const videoList: slide[] = targetWork?.videos?.map(video => {
        return {
            type: "video",
            src: video
        } as slide
    }) || []

    const imageList: slide[] = targetWork?.images?.map(image => {
        return {
            type: "image",
            src: image
        } as slide
    }) || []


    const slideList: slide[] = [...videoList, ...imageList]

    const prevBtn = () => {
        if (currentSlide == 0) {
            return
        }

        setCurrentSlide(v => v - 1)
        sliderElem.current?.scrollTo({
            behavior: "smooth",
            left: sliderElem.current.scrollLeft - sliderElem.current.offsetWidth,
            top: 0
        })
    }

    const nextBtn = () => {
        if (currentSlide == slideList.length - 1) {
            return
        }

        setCurrentSlide(v => v + 1)
        sliderElem.current?.scrollTo({
            behavior: "smooth",
            left: sliderElem.current.offsetWidth + sliderElem.current.scrollLeft,
            top: 0
        })
    }

    return (
        <div className="w-screen bg-[#282828] flex items-center flex-col"
        >
            <Header />
            <div className="max-w-7xl w-full px-4 lg:p-0 my-20">
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    className="w-full relative bg-black aspect-video">
                    <div ref={sliderElem} className="w-full aspect-video flex overflow-hidden" id="slider">
                        {slideList.map((slide, i) => {
                            if (slide.type == "image") {
                                return <img id={`slide-${i}`} key={`slide-${i}`} className="w-full flex-shrink-0" src={slide.src} alt="" />
                            }
                            if (slide.type == "video") {
                                return <video controls id={`slide-${i}`} key={`slide-${i}`} className="w-full flex-shrink-0" src={slide.src} />
                            }
                        })}
                    </div>
                    {
                        currentSlide != 0 &&
                        <FontAwesomeIcon onClick={prevBtn} className="cursor-pointer h-20 w-20 absolute bottom-72 left-10 text-[#494848] z-50" icon={faChevronLeft} />
                    }
                    {
                        currentSlide != slideList.length - 1 &&
                        <FontAwesomeIcon onClick={nextBtn} className="cursor-pointer h-20 w-20 absolute bottom-72 right-10 text-[#494848] z-50" icon={faChevronRight} />
                    }
                </motion.div>
                <motion.div
                    initial={{
                        y: 30,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    className={`text-white flex flex-col py-4 gap-2${targetWork.demo ? "  gap-5" : ""}`}>
                    <div className="flex flex-col gap-2">
                        <span className="lg:text-3xl">{targetWork?.title}</span>
                        <span className="lg:text-2xl text-sm">{targetWork?.subtitle}</span>
                    </div>
                    <div className="flex justify-between gap-4 lg:gap-10">
                        {
                            targetWork.demo && <Link href={targetWork?.demo} className="flex-1 h-10 lg:h-12 bg-[#5D5D5D] justify-center items-center flex rounded-md">
                                Demo
                            </Link>
                        }
                        {
                            targetWork.github && <Link href={targetWork?.github} className="flex-1 h-10 lg:h-12 bg-[#A9131E] rounded-md justify-center items-center flex ">
                                GitHub
                            </Link>
                        }
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Kullanılan Teknolojiler</span>
                        <ul className="flex flex-col px-4">
                            {
                                targetWork?.tech?.map((tec, index) => {
                                    return (
                                        <li key={index} className="list-disc">
                                            {tec}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}