import { Exploredata } from "@/@types";

export const getExplories = async (): Promise<Exploredata> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error from catch getLives", error);
    throw new Error("error from catch getLives");
  }
};
