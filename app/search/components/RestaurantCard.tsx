import Link from "next/link";
import React from "react";

export default function RestaurantCard() {
  return (
    <div className="border-b flex flex-col lg:flex-row pb-3 lg:pb-0 bg-nihyaku-20 lg:items-center">
      <img
        className="w-full h-28 lg:h-40 lg:w-44 object-cover"
        src="/cropped-1366-768-1308387.jpeg"
        alt=""
      />
      <div className="mx-5">
        <h2 className="text-3xl">Goodddy Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="flex mb-2 text-[hsl(50,90%,50%)]">*****</div>
          <p className="ml-2 text-sm">Exceptional</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-white bg-[hsl(100,70%,50%)] rounded-2xl text-center">
          <Link href="">View More Info</Link>
        </div>
      </div>
    </div>
  );
}
