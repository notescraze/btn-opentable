import NavBar from "../components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="flex justify-center lg:mt-2">
        <div className="flex w-full flex-col lg:flex-row lg:w-3/4 lg:justify-between lg:items-start lg:border lg:border-white m-3 lg:rounded-2xl">
          <SearchSideBar />
          <div className="lg:mx-6 w-full lg:w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </div>

      {/* NEW */}
    </>
  );
}
