import React from "react";

export default function Header() {
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center h-full flex justify-center items-center bg-gradient-to-r from-[hsl(200,50%,20%)] to-[hsl(200,50%,30%)]">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          Milestones Grill (Toronto)
        </h1>
      </div>
    </div>
  );
}
