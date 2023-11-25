import EsiLogo from '@/public/EsiLogo.png'
import goalIcon from "@/public/icons/targetArrow.svg"
import codeIcon1 from "@/public/codeIcons/code1.png"
import codeIcon2 from "@/public/codeIcons/code2.png"
import mouseIcon from "@/public/icons/mouseIcon.png"

import Image from 'next/image'
export default function Hero() {
    return (
        <section id="overview" className="flex flex-col relative mt-36 max-sm:mt-20 w-3/4 max-sm:w-[80%]">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:inline-flex">
            <div className="flex flex-col justify-start gap-6 max-sm:gap-5">
                <div className="flex flex-col justify-start gap-4 max-sm:gap-3">
                    <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 rounded-xl border-2 border-black border-solid bg-[#8a220233] max-sm:px-2 max-sm:py-1 px-4 py-2 font-bold text-7xl max-sm:text-4xl shadow-buttonShadow">
                        ESI
                    </div>
                        <p className="font-bold text-7xl max-sm:text-4xl">
                            Projects
                        </p>
                    </div>
                    <p className="w-1/2 max-sm:w-full text-xl max-sm:text-[1rem] max-sm: font-semibold">
                        Empowering Your Coding Odyssey: Discover,
                        Learn, and Excel through a Treasury of Student
                        Projects and Assignments.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-2 ">

                    <div className="flex items-center gap-4 max-sm:gap-3">
                            <Image src={goalIcon} alt="Goals Icon" className="object-cover w-10 h-10" width={43} height={42}/>
                        <div className="flex items-center gap-2">
                            <div className="drop-shadow-lightShadow">
                                <div className="inline-flex px-2 py-1 justify-center items-center gap-2 rounded-lg border-2 border-solid border-black bg-[#37ABDB]">
                                    <p className="text-xl max-sm:text-sm font-extrabold">Explore</p>
                                </div>
                            </div>
                            <p className="text-xl max-sm:text-sm font-semibold">different assignments and Projects</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-sm:gap-3">
                            <Image src={goalIcon} alt="Goals Icon" className="object-cover w-10 h-10" width={43} height={42}/>
                        <div className="flex items-center gap-2">
                            <div className="drop-shadow-lightShadow">
                                <div className="inline-flex px-2 py-1 justify-center items-center gap-2 rounded-lg border-2 border-solid border-black bg-[#FFCCC4]">
                                    <p className="text-xl max-sm:text-sm font-extrabold">Understand</p>
                                </div>
                            </div>
                            <p className="text-xl max-sm:text-sm font-semibold">how students developed it</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-sm:gap-3">
                            <Image src={goalIcon} alt="Goals Icon" className="object-cover w-10 h-10" width={43} height={42}/>
                        <div className="flex items-center gap-2">
                            <div className="drop-shadow-lightShadow">
                                <div className="inline-flex px-2 py-1 justify-center items-center gap-2 rounded-lg border-2 border-solid border-black bg-[#B0EFC6]">
                                    <p className="text-xl max-sm:text-sm font-extrabold">Develop</p>
                                </div>
                            </div>
                            <p className="text-xl max-sm:text-sm font-semibold">your own project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center max-sm:hidden">
                <Image className="animate-float object-contain" src={EsiLogo} alt="Esi Logo" width={424} height={351} />
                <Image alt="" src={codeIcon2} className="max-sm:hidden absolute scale-[80%] right-[3rem] top-[13rem] -z-10" />
                <Image alt="" src={codeIcon1} className="max-sm:hidden absolute scale-[80%] right-[-9rem] top-[0rem] -z-10" />
            </div>
        </div>
            <div className="inline-flex flex-col items-center gap-4">
                <div className="mt-20">
                    <div className="inline-flex py-1 px-3 items-center justify-center gap-2 rounded-lg border-black border-solid border-2 shadow-buttonShadow bg-[#E8CDBE]">
                        <p className="text-[1rem] font-semibold ">This project is made by students & for students</p>
                    </div>
                </div>
                {/*<Image src={mouseIcon} alt="Mouse Icon" width={56} height={56}/>*/}
            </div>
        </section>
    );
}