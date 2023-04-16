import Link from "next/link";
import React from "react";

export default function RestaurantCard() {
  return (
    <div className="w-[100%] lg:w-[30%] xl:w-1/5 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/milestones-grill">
        <img
          className="w-full object-cover h-36"
          src="/cropped-1366-768-1308387.jpeg"
          alt=""
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Pizza Special</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex capitalize">
            <p className="text-reg font-light mr-3">Summer</p>
            <p className="mr-3">$$$$</p>
            <p>Virtual World</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
