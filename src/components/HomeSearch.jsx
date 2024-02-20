"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";

export default function HomeSearch() {
    const [loading,setLoading]=useState(false)
  const [input, setInput] = useState("");
  const router=useRouter();
  const handleSumbit = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const handlerandomSearch=async (e)=>{
    setLoading(true)
    const response =await fetch ('https://random-word-api.herokuapp.com/word')
    .then((res)=> res.json())
    .then((data) => data[0]);
    if(!response) return;
    router.push(`/search/web?searchTerm=${response}`);  
    setLoading(false)

  }
  return (
    <>
      <form
        onSubmit={handleSumbit}
        className="flex w-full mx-auto max-w-[90%] border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl
       focus-within:shadow-md hover:shadow-md transition-shadow mt-5 rounded-full outline-none cursor-pointer"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg text-gray-500 mr-3" />
      </form>
      <div
        className="flex flex-col space-x-2 space-y-2 justify-center sm:space-y-0
      sm:flex-row sm:space-x-2 mt-8"
      >
        <button
          className="bg-[rgb(248,249,250)] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300
        hover:shadow-md w-36 h-10 transition-shadow"
        onClick={handleSumbit}
        >
          Google Search
        </button>
        <button
        disabled={loading}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300
        hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        onClick={handlerandomSearch}
        >
          {loading ? "Loading...":"I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
