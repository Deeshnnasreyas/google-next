import HomeHeader from "@/components/HomeHeader";
import React from "react";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";
export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <div className="flex flex-col mt-24 items-center">
        <Image
          src='https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png'
          width={300}
          alt="Googlelogo"
          height={100}
          priority
style={{width:'auto',height:'auto'}}
          />
        <HomeSearch/>
      </div>
    </div>
  );
}
