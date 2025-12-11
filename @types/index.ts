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
export type ListingCardItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export type Exploredata = ExploreItem[]
export type LiveData = LiveItem[]
export type SearchResultData = ListingCardItem[];