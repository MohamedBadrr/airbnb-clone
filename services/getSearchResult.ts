import { SearchResultData } from "@/@types";

export const getSearchResult = async (): Promise<SearchResultData> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error from catch getLives", error);
    throw new Error("error from catch getSearchResult");
  }
};
