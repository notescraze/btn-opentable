import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";

export default function Restaurant() {
  return (
    <div>
      <NavBar />
      <Header />
      {/* DESCRIPTION */}
      <div className="flex justify-center">
        <div className="flex mx-3 w-full lg:w-4/5 lg:-mt-11 flex-col-reverse lg:flex-row lg:justify-between">
          <div className="bg-[hsl(200,30%,15%)] rounded p-3 shadow">
            <RestaurantNavBar />
            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milestone Grill</h1>
            </div>
            {/* TITLE */} {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p className="text-[hsl(50,90%,50%)]">*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 reviews</p>
              </div>
            </div>
            {/* RATING */} {/* Description */}
            <div className="mt-4">
              <p className="text-lg font-li">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis eum tempore praesentium labore consectetur odio tenetur
                nihil deleniti nesciunt perferendis?
              </p>
            </div>
            {/* Description */} {/* Images */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                7 photos
              </h1>
              <div className="flex flex-col lg:flex-row lg:flex-wrap">
                <img
                  className="w-full lg:w-44 h-32 mr-1 mb-1 object-cover"
                  src="/cropped-1366-768-1308387.jpeg"
                  alt=""
                />
                <img
                  className="w-full lg:w-44 h-32 mr-1 mb-1 object-cover"
                  src="/cropped-1366-768-1308741.jpg"
                  alt=""
                />
                <img
                  className="w-full lg:w-44 h-36 lg:h-32 mr-1 mb-1 object-cover"
                  src="/cropped-1366-768-1309239.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* Images */} {/* Reviews */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* ReviewCard */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">AM</h2>
                      </div>
                      <p className="text-center">Aqua Minato</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">
                          <p className="text-[hsl(50,90%,50%)]">*****</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Sunt, quod.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ReviewCard */}
              </div>
            </div>
            {/* Reviews */}
          </div>
          {/* Reservation card */}
          <div className="text-reg relative">
            <div className="sticky top-3 bg-[hsl(200%,30%,10%)] p-3">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select
                  name=""
                  className="px-1 py-3 text-black border-b font-light"
                  id=""
                >
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[40%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 px-1 text-black border-b font-light w-20"
                  />
                </div>
                <div className="flex flex-col w-[40%]">
                  <label htmlFor="">Time</label>
                  <select
                    name=""
                    className="pt-3 pb-4 px-1 text-black border-b font-light"
                  >
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a time
                </button>
              </div>
            </div>
          </div>
          {/* Reservation card */}
        </div>
      </div>

      {/* DESCRIPTION */}
    </div>
  );
}
