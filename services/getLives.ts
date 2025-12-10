import { LiveData } from "@/@types";

export const getLives = async (): Promise<LiveData> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error from catch getLives", error);
    throw new Error("error from catch getLives");
  }
};
