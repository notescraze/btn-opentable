export default function Home() {
  return (
    <main className="bg-[hsl(200,30%,5%)] min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-[hsl(200,30%,10%)]">
        {/* NavBAR */}
        <nav className="bg-[hsl(200,30%,15%)] flex justify-between items-center">
          <a
            href=""
            className="font-bold text-[hsl(200,30%,90%)] text-2xl bg-[hsl(200,90%,15%)] rounded ml-5"
          >
            Open Table
          </a>
          <div>
            <div className="flex my-1 mx-3">
              <button className="bg-[hsl(50,30%,30%)] hover:bg-[hsl(50,50%,50%)] border p-2 rounded mr-3">
                Sign In
              </button>
              <button className="bg-[hsl(250,30%,30%)] hover:bg-[hsl(250,50%,50%)] border p-2 rounded">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        {/* NavBar */}
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center h-full flex justify-center items-center bg-gradient-to-r from-[hsl(200,50%,20%)] to-[hsl(200,50%,30%)]">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */}
        {/* DESCRIPTION */}
        <div className="flex m-auto w-2/3 justify-between items-start -mt-11">
          <div className="bg-[hsl(200,30%,15%)] w-[70%] rounded p-3 shadow">
            {/* RES NAV */}
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* RES NAV */}
            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milestone Grill</h1>
            </div>
            {/* TITLE */}
            {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p className="text-[hsl(50,90%,50%)]">*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 reviews</p>
              </div>
            </div>
            {/* RATING */}
            {/* Description */}
            <div className="mt-4">
              <p className="text-lg font-li">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis eum tempore praesentium labore consectetur odio tenetur
                nihil deleniti nesciunt perferendis?
              </p>
            </div>
            {/* Description */}
            {/* Images */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                7 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 h-32 mr-1 mb-1"
                  src="/cropped-1366-768-1308387.jpeg"
                  alt=""
                />
                <img
                  className="w-56 h-32 mr-1 mb-1"
                  src="/cropped-1366-768-1308741.jpg"
                  alt=""
                />
                <img
                  className="w-56 h-32 mr-1 mb-1"
                  src="/cropped-1366-768-1309239.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* Images */}
            {/* Reviews */}
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
        </div>
        {/* DESCRIPTION */}
        {/* Reservation card */}
        <div className="w-[27%] relative text-reg">
          <div className="fixed w-[15%] bg-white rounded p-3 shadow">
            <div className="text-center border-b pb-2 font-bold">
              <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
          </div>
        </div>
        {/* Reservation card */}
      </main>
    </main>
  );
}
