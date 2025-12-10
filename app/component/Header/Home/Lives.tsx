import MainHeading from "../../MainHeading";
import { getLives } from "@/services/getLives";
import LiveCard from "./LiveCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Lives = async () => {
  const livesData = await getLives();
  return (
    <section className="pt-6 mb-3">
      <div className="container">
        <MainHeading title="Lives Only" />
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {livesData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="  items-center flex justify-center">
                  <LiveCard key={index} img={item.img} title={item.title} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Lives;
