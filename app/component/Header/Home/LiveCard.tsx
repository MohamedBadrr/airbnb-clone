import { LiveItem } from "@/@types";
import home1 from "@/assets/home1.jpg";
import home2 from "@/assets/home2.jpg";
import Image from "next/image";

const LiveCard = ({ img, title }: LiveItem) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={home2} alt="LiveCard-Img" fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveCard;
