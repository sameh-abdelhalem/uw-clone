"use client";
import { SearchSvg, LogoSvg, ArrowSvg, HoverArrowSvg } from "@/utils/svgs";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="fixed w-full bg-white ">
      <header className="p-4  text-darkGray antialiased border-b border-gray-300 md:px-8 ">
        <div className="flex justify-between xl:max-w-[85%] xl:mx-auto">
          <div className="flex space-x-4 md:space-x-0">
            {/* Hamburger Menu */}
            <div className={`md:hidden `}>
              <button
                id="menu-btn"
                type="button"
                className={`block hamburger lg:hidden focus:outline-none z-40 ${
                  isOpen && "open"
                }`}
                onClick={openMenuHandler}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
            <div className="flex space-x-4">
              {/* logo */}
              <Link href="/" className="w-20 self-center">
                <LogoSvg />
              </Link>
              <div className="self-center">
                <div className="hidden  space-x-4  md:flex font-medium">
                  <Link href="#" className=" hover:text-navGreen flex group">
                    <p>Find Talent</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      role="img"
                      className="ml-1 w-4 group-hover:rotate-180 transition-all duration-150"
                    >
                      <path
                        vector-effect="non-scaling-stroke"
                        stroke="var(--icon-color, #001e00)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                        d="M18 10l-6 5-6-5"
                      ></path>
                    </svg>
                  </Link>
                  <Link href="#" className=" hover:text-navGreen flex group">
                    <p>Find Work</p>
                    <HoverArrowSvg />
                  </Link>
                  <Link href="#" className=" hover:text-navGreen flex group">
                    <p>Why Upwork</p>
                    <HoverArrowSvg />
                  </Link>
                  <Link href="#" className=" hover:text-navGreen flex group">
                    <p>Enterprise</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 ">
            <Link href={"/signup"} className="md:hidden">
              Sign up
            </Link>
            <div className="self-center lg:hidden">
              <SearchSvg className={"w-6 "} />
            </div>
            <div className=" hidden self-center lg:border-2 lg:border-gray-300 lg:rounded-full  lg:p-[1px] lg:flex lg:justify-between group lg:hover:bg-gray-200">
              <div className="pl-2 flex  hover:!bg-gray-50  group-hover:bg-gray-200 rounded-full group">
                <SearchSvg className={"w-6 "} />
                <input
                  maxlength="100"
                  autocomplete="off"
                  type="search"
                  name="q"
                  data-cy="search-input"
                  placeholder="Search"
                  aria-label="Search"
                  className="flex space-x-2  pl-2  rounded-full focus:border-gray-500 hover:!bg-gray-50 group-hover:bg-gray-200 focus:outline-none group-focus:outline-gray-900"
                ></input>
              </div>

              <button className="hidden lg:flex lg:border-l-2 hover:bg-gray-50 hover:rounded-full px-2 py-1 ">
                <div className="flex items-center ">
                  <p className="pl-4">Talent</p>
                  <ArrowSvg />
                </div>
              </button>
            </div>
            <Link href={"/signup"} className="hidden md:flex self-center">
              Log in
            </Link>
            <Button className={"hidden"}>Sign Up</Button>
          </div>
        </div>
      </header>
      <nav className="md:p-4  text-darkGray antialiased md:px-8 xl:max-w-[85%] xl:mx-auto ">
        <div className="hidden  space-x-4  md:flex font-medium">
          <Link href="#" className=" hover:text-navGreen hover:underline">
            Development & IT
          </Link>
          <Link href="#" className=" hover:text-navGreen hover:underline">
            AI Services
          </Link>
          <Link href="#" className=" hover:text-navGreen hover:underline">
            Design & Creative
          </Link>
          <Link href="#" className=" hover:text-navGreen hover:underline">
            Admin & Customer Support
          </Link>
          <Link href="#" className=" group flex">
            <p>More</p>
            <ArrowSvg />
          </Link>
        </div>
      </nav>
    </div>
  );
}
