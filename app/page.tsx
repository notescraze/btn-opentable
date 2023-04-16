import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <div className="flex justify-center flex-wrap lg:justify-start">
          <RestaurantCard />
        </div>
      </main>
    </>
  );
}
