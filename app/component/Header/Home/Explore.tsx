import MainHeading from "../../MainHeading";
import { getExplories } from "@/services/getExplories";
import ExploreCard from "./components/ExploreCard";
import liverpool from "@/assets/liverpool.jpg";

const Explore = async () => {
  const exploreData = await getExplories();
  console.log(exploreData);

  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title="Explore Nearby" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item, index) => (
            <ExploreCard
              key={index}
              img={liverpool}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
