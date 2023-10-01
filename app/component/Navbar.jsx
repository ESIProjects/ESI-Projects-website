"use client"
import logo from "../../public/icons/logo.png"
import menu from "../../public/icons/menu.png"
import React from "react"
import Image from "next/image"



const Navbar =()=>{
    const [menuOpen , setmenuOpen]= React.useState(false);
    const toggle = ()=>{
        setmenuOpen(!menuOpen);
    }
    return(
        <div className='m-auto  container '>
            <div className='navbar m-auto w-5/6 mt-4 rounded-full h-16 flex items-center justify-between mediumShadow border-solid border-black border-2  '>
                <Image src={logo} className="w-16 ml-10"></Image>
                <a className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Home</a>
                <a href="#contribute" className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Contribute</a>
                <a href="#insights" className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Insights</a>
                <a href="#faq" className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">FAQ</a>
                <button className=" monaSans hidden md:block bg-neutral-800 text-white p-1 mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-2  transition-all duration-500 hover:bg-orange-200 hover:text-black"><a href="https://github.com/ESIProjects/ESI-Projects">contribute </a> </button>
                <button className="bg-orange-200 rounded-lg border-solid border-black border-2 p-1 mr-6 md:hidden">
                <Image onClick={toggle} src={menu} className="w-8"></Image>
                </button>
            </div>
            {/* mobile menu*/}
            {menuOpen &&  <div className="items-center justify-between  w-full md:hidden absolute ">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-black border-2 rounded-lg firstColor md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 firstColor rounded hover:bg-gray-800 hover:text-white  ">Home</a>
                    </li>
                    <li>
                        <a href="#contribute" onClick={toggle} className="block py-2 pl-3 pr-4 firstColor rounded hover:bg-gray-800 hover:text-white  ">contribute</a>
                    </li>
                    <li>
                        <a href="#insights" onClick={toggle} className="block py-2 pl-3 pr-4 firstColor rounded hover:bg-gray-800 hover:text-white  ">insights</a>
                    </li>
                    <li>
                        <a href="#faq" onClick={toggle} className="block py-2 pl-3 pr-4 firstColor rounded hover:bg-gray-800 hover:text-white  ">FAQ</a>
                    </li>
                </ul>
            </div>
            }
        </div>
    );
}
export default Navbar;
