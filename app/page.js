import logo from "../public/logo.png"
import goalIcon from "../public/icons/targetArrow.svg"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen w-full ">
      <div className='m-auto container'>
        <div className='navbar m-auto w-5/6 mt-3 rounded-full h-16 flex items-center justify-between drop-shadow-lg border-solid border-black border-2  '>
          <Image src={logo} className="w-16 ml-10"></Image>
          <p className="monaSans font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">FAQ</p>
          <p className="monaSans font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Overview</p>
          <p className="monaSans font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Insight</p>
          <button className=" monaSans bg-neutral-800 text-white p-1 mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-2  transition-all duration-500 hover:bg-orange-200 hover:text-black"> contribute </button>
        </div>
      </div>
      <div className="container m-auto flex flex-row  ">

        <div className="container px-20 py-11 basis-2/3 ">

          <div className=" monaSans text-7xl font-black flex flex-row items-center">
            <div className=" EsiTitle mx-4 rounded-3xl border-solid border-black border-4 px-3 py-1">
              <h1>ESI</h1>
            </div> 
            <span>Projects</span>
          </div>

          <h1 className="hubotSans text-2xl font-bold mx-5 my-3 ">
            Empowering Your Coding Odyssey: Discover, 
            Learn, and Excel through a Treasury of Student
            Projects and Assignments.
          </h1>

          <div className="monaSans mx-5 text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-11 mx-2"></Image>
            <div className=" mx-2 bg-green-300 px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Explore</h1>
            </div> 
            <span>different assignments and Projects.</span>
          </div>

          <div className="monaSans mx-5 text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-11 mx-2"></Image>
            <div className=" mx-2 bg-red-300 px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Understand</h1>
            </div> 
            <span>how students developed it. </span>
          </div>

          <div className="monaSans mx-5 text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-11 mx-2"></Image>
            <div className=" mx-2 bg-blue-300 px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Develop</h1>
            </div> 
            <span>your own project.</span>
          </div>

        </div>
        <div className="container basis-1/3">

        </div>
      </div>
    </main>
  )
}
