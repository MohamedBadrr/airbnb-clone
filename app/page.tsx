import Banner from "./component/Header/Home/Banner";
import Explore from "./component/Header/Home/Explore";
import GreatoutDoors from "./component/Header/Home/GreatoutDoors";
import Lives from "./component/Header/Home/Lives";

export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <Lives />
      <GreatoutDoors
        img="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="The Greatest Outdoors"
        desc="Wishlists curated by Airbnb"
        linkText="Get Inspired"
      />
    </main>
  );
}
