import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
export default function SearchHeader() {
  return (
    <header className="stcky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
            width={120}
            alt="Googlelogo"
            height={40}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer"/>
         <div>
         <button
         className="bg-blue-500 outline-none text-white px-6 py-2 font-medium
      rounded-md hover:brightness-105
     hover:shadow-md transition-shadow ml-2"
       >
         Sign in
       </button>
         </div>
        </div>
      </div>
    </header>
  );
}
