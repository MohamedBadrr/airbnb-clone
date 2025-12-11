import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] ">
      <Image
        src={
          "https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80"
        }
        alt="banner-image"
        className="object-cover object-left"
        fill
      />
      <div className="absolute top-1/2 w-full text-center space-y-3 ">
        <p className="text-sm sm:text-lg  font-bold">
          Not Sure where to go? Perfect.
        </p>
        <Link href={"/search"}>
          <Button className="rounded-full shadow-md! px-9 cursor-pointer">
            I am flexible
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
