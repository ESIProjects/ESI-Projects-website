import codeIcon1 from "@/public/codeIcons/code1.png"
import codeIcon2 from "@/public/codeIcons/code2.png"
import Image from "next/image";

export default function Overview() {
    return (
        <section id="overview" className="Overview w-[80rem] h-[45rem] max-sm:w-[90%] max-sm:h-[34.5rem] flex flex-col items-center justify-center relative">
            <div className="frame25 w-[40rem] h-[35rem] max-sm:w-[90%] max-sm:h-[34.5rem] inline-flex flex-col justify-center items-center gap-9 mt-[7.31rem] max-sm:mt-[13rem]">
            <div className="groupe30 relative flex justify-center items-center">
                <div className="frame22 bg-[#F9F7F6] flex p-2 justify-center items-center gap-2 absolute top-[-2.5rem]">
                    <p className="text-[#3D3D3D] text-5xl max-sm:text-2xl font-extrabold underline">ESI Projects</p>
                </div>
                <div className="frame23 inline-flex pt-8 px-4 pb-2 justify-center items-center gap-2 border-2 border-solid border-black shadow-buttonShadow bg-[#F9F7F6]">
                    <p className="text-center text-2xl max-sm:text-[0.8rem] font-semibold">
                        It&apos;s the place where you can find previous projects developed by students for different assignments and labs in the computer science engineering classes taken at Higher National School of Computer Science (Ecole Nationale Supérieure d'Informatique (Ex. INI)).
                    </p>
                </div>

            </div>
                <Image alt="" src={codeIcon1} className="max-sm:hidden absolute scale-[110%] right-10 top-[10rem] -z-10" />
                <Image alt="" src={codeIcon2} className="max-sm:hidden absolute scale-[110%] left-10 bottom-[-4rem] -z-10" />
            <div className="frame24 flex flex-col justify-start gap-2">
                <div className="frame20 flex max-sm:flex-col max-sm:gap-4 w-[38.9rem] max-sm:w-[20.4rem] justify-between items-center">
                    <div className="frame19 flex flex-col justify-start gap-3">
                        <h3 className="text-4xl max-sm:text-xl font-extrabold underline text-[#3D3D3D]">Github Repository</h3>
                        <p className="text-xl max-sm:text-sm font-semibold">Simply the projects are for now organized in a GitHub repository where projects aka TPs are organized by level and by course.</p>
                    </div>
                    <button className="groupe31 w-[9.6rem] h-[3.7rem] max-sm:w-auto max-sm:h-auto flex-shrink-0 inline-flex justify-center items-center gap-2 max-sm:px-4 max-sm:py-2 py-3 px-6 rounded-md bg-[#119CD7] border-2 border-black border-solid shadow-buttonShadow hover:opacity-90 hover:scale-95 hover:outline-0 hover:shadow-none active:shadow-none transition">
                        <a href="https://github.com/ESIProjects/ESI-Projects" className="text-2xl max-sm:text-[1rem] font-extrabold">Explore</a>
                    </button>
                </div>
                <div className="frame21 flex max-sm:flex-col max-sm:gap-4 justify-between items-center w-[38.9rem] max-sm:w-[20.4rem]">
                    <div className="frame18 flex flex-col justify-start gap-3">
                        <h3 className="text-4xl max-sm:text-xl font-extrabold underline text-[#3D3D3D]">Contribution</h3>
                        <p className="text-xl max-sm:text-sm font-semibold">If you have a project or “TP” and you want to share it with us through google form.</p>
                    </div>
                    <button className="groupe32 w-[9.6rem] h-[3.7rem] max-sm:w-auto max-sm:h-auto flex-shrink-0 inline-flex justify-center items-center gap-2 max-sm:px-4 max-sm:py-2 py-3 px-6 rounded-md bg-[#B0EFC6] border-2 border-black border-solid shadow-buttonShadow hover:opacity-90 hover:scale-95 hover:outline-0 hover:shadow-none active:shadow-none transition">
                        <a  className="text-2xl max-sm:text-[1rem] font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLScUQ5toGjDysObDA_wD3QnYdMyh70-1MArTPkVXGkfSIqX--Q/viewform">Contribute</a>
                    </button>
                </div>
            </div>
            </div>
        </section>
    );
}