import Link from "next/link";
import NavBar from "../../../components/NavBar";

export default function Menu() {
  return (
    <>
      <NavBar />
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
      <div className="flex justify-center">
        <div className="flex w-full lg:w-2/3 -mt-11 mx-3">
          <div className="bg-[hsl(200,30%,15%)] w-[100%] rounded p-3 shadow">
            {/* RES NAV */}
            <nav className="flex text-reg border-b pb-2">
              <Link href="/restaurant/milesstone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milesstone-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RES NAV */} {/* MENU */}
            <main className="mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className="border rounded p-3 w-[49#] mb-3">
                    <h3 className="font-bold text-lg">Pecking Duck</h3>
                    <p className="font-light mt-1 text-sm">A duck</p>
                    <p className="mt-7">$80</p>
                  </div>
                  {/* MENU CARD */}
                </div>
              </div>
            </main>
            {/* MENU */}
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
    </>
  );
}
