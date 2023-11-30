import Link from "next/link";

export default function Header() {
    return (
        <div className="w-screen border-b border-white/20">
            <div className="h-16 flex justify-between text-white xl:px-80 px-10 items-center text-sm bg-[#171717]">
                <Link href={"/"} className="">ANASAYFA</Link>
                <Link href={"/#about"} className="">HAKKIMDA</Link>
                <Link href={"/work"} className="">PROJELER</Link>
            </div>
        </div>
    )
}