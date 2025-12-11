import { format } from "date-fns";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { getSearchResult } from "@/services/getSearchResult";
import { Button } from "@/components/ui/button";
import SearchCard from "../component/search/SearchCard";
import Map from "../component/search/Map";
type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
  typeOfReservation: string;
  customDates: string;
};

const SearchResults = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const {
    location,
    endDate,
    numOfGuests,
    startDate,
    customDates,
    typeOfReservation,
  } = await searchParams;

  // console.log("Location:", location);
  // console.log("endDate:", endDate);
  // console.log("startDate:", startDate);
  // console.log("numOfGuests:", numOfGuests);
  // console.log(
  //   "customDates:",
  //   JSON.parse(customDates).map((d: string) => new Date(d))
  // );
  console.log("typeOfReservation:", typeOfReservation);
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const searchResultData = await getSearchResult();
  return (
    <>
      <Header
        placeholder={
          location && range && numOfGuests
            ? `${location} | ${range} | ${numOfGuests} guests`
            : ""
        }
      />
      <main>
        <section>
          <div className="container flex">
            <div className="pt-14 pr-4">
              <p className="text-xs">
                300+ Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6 ">
                Stays in {location ?? "favorite location"}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <Button
                    type="button"
                    className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"
                    key={filter}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div>
                {searchResultData.map((listing) => (
                  <SearchCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>
            <div className="hidden xl:inline-flex xl:min-w-[600px]">
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResults;

const filters = [
  "Cancellation Flexibility",
  "Type of Place",
  "Price",
  "Rooms and Beds",
  "More filters",
];
