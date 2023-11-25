"use client";
import logo from "@/public/icons/logo.png";
import menu from "@/public/icons/menu.png";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {useScrollDirection} from "@/hooks/useScrollDirection";

export default function NavBar() {
    const scrollDirection = useScrollDirection();

  return (
    <nav className={`z-10 flex sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} bg-white gap-24 justify-between items-center py-4 px-12 max-sm:px-10 border-solid border-b-2 border-black w-full transition-all duration-500`}>
      <div className="flex items-center flex-col max-sm:flex-shrink-0">
        <Image
          src={logo}
          alt="ESI Logo"
          className=" max-sm:w-[50px] max-sm:h-[50px]"
          width={160}
          height={160}
        />
      </div>
      <div className="flex gap-20 items-center w-screen justify-around">
        <a
            href="#overview"
            className="hidden md:block font-bold text-xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg hover-underline-animation">
          Overview
        </a>
        <a
          href="#insights"
          className="hidden md:block font-bold text-xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg hover-underline-animation"
        >
          Insights
        </a>
        <a
          href="#faq"
          className="hidden md:block font-bold text-xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg hover-underline-animation"
        >
          FAQ
        </a>
        <a
          href="#contact"
          className="hidden md:block font-bold text-xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg hover-underline-animation"
        >
          Contact Us
        </a>
      </div>
      <button className="hidden md:inline-flex justify-center items-center rounded-full bg-[#E8CDBE] px-5 py-2 border-2 border-solid border-black shadow-buttonShadow hover:opacity-90 hover:scale-95 hover:outline-0  hover:shadow-none active:shadow-none transition">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScUQ5toGjDysObDA_wD3QnYdMyh70-1MArTPkVXGkfSIqX--Q/viewform"
          className="font-bold text-xl"
        >
          contribute
        </a>
      </button>
      <div className="md:hidden">
          <DropdownMenu>
              <DropdownMenuTrigger>
                  <Image
                      alt="Toggle button"
                      src={menu}
                      className="hidden max-sm:block"
                      width={300}
                      height={300}
                  />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                  <DropdownMenuItem>
                      <a
                          href="#overview"
                      >
                          Overview
                      </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                      <a
                          href="#insights"
                      >
                          Insights
                      </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem><a
                      href="#faq"
                  >
                      FAQ
                  </a></DropdownMenuItem>
                  <DropdownMenuItem><a
                      href="#contact"
                  >
                      Contact Us
                  </a></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel><a href="https://docs.google.com/forms/d/e/1FAIpQLScUQ5toGjDysObDA_wD3QnYdMyh70-1MArTPkVXGkfSIqX--Q/viewform">Contribute</a></DropdownMenuLabel>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
    </nav>
  );
}
