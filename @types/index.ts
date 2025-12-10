import { StaticImageData } from "next/image";

export type ExploreItem = {
  img: string | StaticImageData;
  location: string;
  distance: string;
};

export type LiveItem = {
  img: string | StaticImageData;
  title: string;
}
export type Exploredata = ExploreItem[]
export type LiveData = LiveItem[]