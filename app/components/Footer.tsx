export default function Footer() {
    return (
        <div className="w-full h-72 flex flex-col bg-[#171717] lg:px-20">
            <div className="flex gap-1 flex-col flex-1 justify-center items-center py-5">
                <div className="lg:w-72 w-60 bg-[#A9131E] flex justify-center items-center h-16">
                    <span className="font-bold text-2xl">Get in touch..</span>
                </div>
                <div className="text-6xl text-white">CONTACT</div>
            </div>
            <div className="flex justify-center h-10 gap-4">
                <img className="w-12 h-12" src="/images/instagram-icon.png" alt="" />
                <div className="flex gap-7">
                    <img className="w-6 h-6 mt-3" src="/images/github-icon.png" alt="" />
                    <img className="w-6 h-6 mt-3" src="/images/linkedin-icon.png" alt="" />
                </div>
            </div>
            <div className="flex h-20 text-[8px] lg:text-lg items-center text-white px-10 lg:p-0 justify-between">
                <span className="">kubrakuscu7910@gmail.com</span>
                <div className="flex gap-2">
                    <span>Made by Kübra Kuşcu with</span>
                    <img className="h-3 mt-2" src="/images/heart-icon.png" alt="" />
                </div>
            </div>
        </div>
    )
}