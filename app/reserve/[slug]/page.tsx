import NavBar from "../../components/NavBar";

export default function Reserve() {
  return (
    <>
      {/* NavBAR */}
      <NavBar />
      {/* NavBar */}
      <div>
        <div className="py-9 w-full lg:w-3/5 m-auto">
          {/* HEADER */}
          <div className="m-5">
            <h3 className="font-bold">You're almost done!</h3>
            <div className="mt-1 flex">
              <img
                src="/cropped-1366-768-1308741.jpg"
                className="w-32 h-18 object-cover rounded"
                alt=""
              />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">
                  Ayame Restaurant of Giggles
                </h1>
                <div className="flex-mt-3">
                  <p className="mr-6">Teus, 22, 2023</p>
                  <p className="mr-6">7:30 PM</p>
                  <p className="mr-6">3 people</p>
                </div>
              </div>
            </div>
          </div>
          {/* HEADER */} {/* Form */}
          <div className="mt-10 flex flex-wrap justify-between w-full lg:w-[520px]">
            <input
              type="text"
              placeholder="First name"
              className="border rounded mx-3 p-3 w-full lg:w-[236px] text-black mb-4"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border rounded mx-3 p-3 w-full lg:w-[236px] text-black mb-4"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border rounded mx-3 p-3 w-full lg:w-[236px] text-black mb-4"
            />
            <input
              type="text"
              placeholder="Email"
              className="border rounded mx-3 p-3 w-full lg:w-[236px] text-black mb-4"
            />
            <input
              type="text"
              placeholder="Occation (optional)"
              className="border rounded mx-3 p-3 w-full lg:w-[236px] text-black mb-4"
            />
            <input
              type="text"
              placeholder="Request (optional)"
              className="border rounded mx-3 p-3 w-full lg:w-[236px] text-black mb-4"
            />
            <button className="bg-red-600 w-full mx-3 p-3 text-white font-bold rounded disabled:bg-gray-300">
              Complete reservation
            </button>
          </div>
          {/* Form */}
        </div>
      </div>
    </>
  );
}
