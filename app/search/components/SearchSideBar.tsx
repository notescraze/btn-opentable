import React from "react";

export default function SearchSideBar() {
  return (
    <div className="flex justify-between lg:justify-start flex-col lg:w-1/5">
      <div className="border-b border-white pb-4 bg-nihyaku-15 rounded-t-xl p-2">
        <h1 className="mb-2 font-bold">Region</h1>
        <div className="flex flex-row flex-wrap">
          <p className="font-light text-reg mr-2">Toronto</p>
          <p className="font-light text-reg mr-2">Montreal</p>
          <p className="font-light text-reg mr-2">Kingston</p>
        </div>
      </div>
      <div className="border-b border-white pb-4 bg-nihyaku-15 rounded-b-xl p-2">
        <h1 className="mb-2 font-bold">Cuisine</h1>
        <div className="flex flex-row flex-wrap">
          <p className="font-light text-reg mr-2">Mexican</p>
          <p className="font-light text-reg mr-2">Korean</p>
          <p className="font-light text-reg mr-2">Italian</p>
        </div>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border-t border-l border-b w-full text-reg font-light rounded-l p-2 bg-[hsl(100,10%,40%)] hover:bg-[hsl(100,20%,60%)]">
            $$$
          </button>
          <button className="border-t border-b w-full text-reg font-light p-2 bg-[hsl(200,10%,40%)] hover:bg-[hsl(200,20%,60%)]">
            $$$
          </button>
          <button className="border-t border-r border-b w-full text-reg font-light rounded-r p-2 bg-[hsl(300,10%,40%)] hover:bg-[hsl(300,20%,60%)]">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
