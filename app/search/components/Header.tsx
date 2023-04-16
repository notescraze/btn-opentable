import React from "react";

export default function Header() {
  return (
    <div className="p-2 bg-gradient-to-r from-[hsl(200,50%,20%)] to-[hsl(200,50%,30%)]">
      <div className="text-left py-3 m-auto flex justify-center">
        <input
          className="rounded text-lg mr-3 w-74 p-2 w-[450px]"
          type="text"
        />
        <button className="rounded bg-[hsl(0,30%,30%)] hover:bg-[hsl(0,50%,50%)] px-9 py-2 ">
          Let's go
        </button>
      </div>
    </div>
  );
}
