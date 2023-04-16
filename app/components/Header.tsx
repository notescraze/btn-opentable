"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="h-64 bg-gradient-to-r from-nihyaku-15 to-nihyaku-20 p-2">
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        {/* SEARCH BAR */}
        <div className="text-left py-3 m-auto flex justify-center">
          <input
            className="bg-[hsl(200,30%,20%)] rounded text-lg mr-3 w-74 p-2 w-[450px]"
            type="text"
            placeholder="Search ..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            onClick={() => {
              if (location === "banana") return;
              router.push("/search");
            }}
            className="rounded bg-[hsl(0,30%,30%)] hover:bg-[hsl(0,50%,50%)] px-9 py-2 "
          >
            Let's go
          </button>
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  );
}
