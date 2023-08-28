import logo from "../public/logo.png"
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
    </main>
  )
}
