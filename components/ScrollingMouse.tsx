'use client'
import Image from 'next/image'
import mouseIcon from "@/public/icons/mouseIcon.png";
import {useEffect, useRef, useState} from "react";

export default function ScrollingMouse() {
    let [mouse , setMouse]=useState(true);
    let mouseRef=useRef(null);
    function handleScroll(){
        setMouse(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
    })

    return (
       mouse && <Image src={mouseIcon} className={`animate-float object-contain max-sm:hidden mt-5`} alt="Mouse Icon" ref={mouseRef} width={56} height={56}/>
    );
}