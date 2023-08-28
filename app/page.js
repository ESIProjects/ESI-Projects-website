import logo from "../public/logo.png"
import goalIcon from "../public/icons/targetArrow.svg"
import codeIcon1 from "../public/codeIcons/code1.png"
import EsiLogo from "../public/EsiLogo.png"
import menu from "../public/icons/menu.png"
import scroll from "../public/icons/arrowDown.png"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden  ">
      <div class="fixed bottom-3 left-0 right-0 flex items-center justify-center">
        <Image src={scroll} className=" animate-bounce w-11"></Image>
      </div>
      <div className='m-auto  container'>
        <div className='navbar m-auto w-5/6 mt-3 rounded-full h-16 flex items-center justify-between drop-shadow-lg border-solid border-black border-2  '>
          <Image src={logo} className="w-16 ml-10"></Image>
          <p className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">FAQ</p>
          <p className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Overview</p>
          <p className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Insight</p>
          <button className=" monaSans hidden md:block bg-neutral-800 text-white p-1 mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-2  transition-all duration-500 hover:bg-orange-200 hover:text-black"> contribute </button>
          <button className="bg-orange-200 rounded-lg border-solid border-black border-2 p-1 mr-6 lg:hidden">
            <Image src={menu} className="w-8"></Image>
          </button>
        </div>
      </div>

      <div className="container m-auto flex flex-col lg:flex-row ">

        <div className="container px-6 lg:px-20 py-11 basis-2/3  ">

          <div className=" monaSans text-5xl md:text-7xl font-black flex flex-row items-center">
            <div className=" EsiTitle mx-2 md:mx-4 rounded-3xl border-solid border-black border-4 px-3 py-1">
              <h1>ESI</h1>
            </div> 
            <span>Projects</span>
          </div>

          <h1 className="hubotSans mx-9 text-xl md:text-2xl font-bold md:mx-5 my-3 ">
            Empowering Your Coding Odyssey: Discover, 
            Learn, and Excel through a Treasury of Student
            Projects and Assignments.
          </h1>

          <div className="hubotSans mx-1 md:mx-5 text-base md:text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-8 h-8 lg:h-11  lg:w-11 mx-2"></Image>
            <div className=" mx-1 md:mx-2 bg-green-300 px-1 md:px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Explore</h1>
            </div> 
            <span>different assignments and Projects.</span>
          </div>

          <div className="hubotSans mx-1 md:mx-5 text-base md:text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-8 h-8 lg:h-11  lg:w-11 mx-2"></Image>
            <div className=" mx-1 md:mx-2 bg-red-300 px-1 md:px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Understand</h1>
            </div> 
            <span>how other students developed it. </span>
          </div>

          <div className="hubotSans mx-1 md:mx-5 text-base md:text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-8 h-8 lg:h-11 lg:w-11 mx-2"></Image>
            <div className=" mx-1 md:mx-2 bg-blue-300 px-1 md:px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Develop</h1>
            </div> 
            <span>your own amazing projects .</span>
          </div>

        </div>
        <div className="lg:container basis-1/3 relative flex items-center lg:m-0 m-auto  ">
          <Image src={EsiLogo} className="relative z-10 w-44 md:w-72 topDownAnimation" ></Image>
          <Image src={codeIcon1} className="absolute scale-110 lg:scale-100 left-16 top-20 lg:left-0  lg:top-10"></Image>
          <Image src={codeIcon1} className="absolute scale-110 lg:scale-100 right-16 bottom-28 lg:right-24 lg:bottom-10"></Image>
        </div>
      </div>
      <div className=" m-auto flex justify-center items-center w-fit lg:w-1/2 hubotSans h-10  bg-neutral-700 text-sm px-4 lg:px-0 lg:text-lg text-white font-bold rounded-full border-2 border-solid">
          <p>This project is made by students & for students.  </p>
        </div>
    </main>
  )
}
