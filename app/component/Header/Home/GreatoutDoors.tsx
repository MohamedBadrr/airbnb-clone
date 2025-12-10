import Image from "next/image";
import Link from "next/link";

type GreatoutDoorsProps = {
  img: string;
  title: string;
  desc: string;
  linkText: string;
};
const GreatoutDoors = ({ img, title, desc, linkText }: GreatoutDoorsProps) => {
  return (
    <section className="mb-3">
      <div className="container relative cursor-pointer pt-6">
        <div className="relative h-96 min-w-[300px]">
          <Image
            src={img}
            fill
            className="rounded-2xl -z-10 object-cover"
            alt="GreatestOutdoors-Img"
          />
        </div>
        <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{desc}</p>
          <Link
            href="/"
            className="text-sm w-fit px-2 py-2 rounded-lg mt-5 block text-white bg-primary hover:bg-primary/90"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreatoutDoors;
