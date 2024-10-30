"use client";
import { useState } from "react";
import SearchBar from "./_components/SearchBar";
import Script from "next/script";
import Map from "./_components/Map";
import { MdLocationPin } from "react-icons/md";

export default function Home() {
  const [first, setfirst] = useState("second");
  return (
    <div className="flex-center h-screen">
      <div className="flex shadow-lg flex-col items-center justify-between h-3/5 w-1/2 ">
        <div className="flex flex-col ">
          <h2 className="text-xl text-black font-semibold">Welcome to</h2>
          <div className="flex">
            <h1 className="text-4xl text-tertiary font-black">RideOn</h1>
            <MdLocationPin className="text-primary ml-3 animate-bounce text-4xl" />
          </div>
        </div>
        <SearchBar />
        <Map />
      </div>
    </div>
  );
}
