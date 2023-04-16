import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-nihyaku-15 flex justify-between items-center lg:rounded-2xl lg:my-2 lg:mx-2">
      <Link
        href=""
        className="font-bold text-2xl px-2 bg-nihyaku-8 rounded ml-5"
      >
        Open Table
      </Link>
      <div>
        <div className="flex my-1 mx-3">
          <button className="bg-[hsl(50,30%,30%)] hover:bg-[hsl(50,50%,50%)] border py-1 px-5 rounded mr-3">
            Sign In
          </button>
          <button className="bg-[hsl(250,30%,30%)] hover:bg-[hsl(250,50%,50%)] border px-5 py-1 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
