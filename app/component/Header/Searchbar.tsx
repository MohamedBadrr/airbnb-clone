"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Calendar, DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { enUS } from "date-fns/locale";
import { format, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import useStore from "@/store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReservationTypeTabs from "./ReservationTypeTabs";
import GuestsSelector from "./GuestsSelector";
const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { updateField } = useStore();
  const [typeReservation, setTypeReservation] = useState("range");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [numOfGuests, setNumOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelectRange = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  const dayContentRenderer = (day: Date) => {
    const isSelected = selectedDates.some((d) => isSameDay(d, day));
    return (
      <div
        className={`${
          isSelected ? "bg-red-400 text-white rounded-full" : "bg-white"
        } w-full h-full flex items-center justify-center text-w`}
      >
        {format(day, "d")}
      </div>
    );
  };
  const handleSelectCustom = (date: Date) => {
    const isAlreadySelected = selectedDates.some((d) => isSameDay(d, date));
    if (isAlreadySelected) {
      setSelectedDates(selectedDates.filter((d) => !isSameDay(d, date)));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleOnSave = () => {
    setSearch("");
    updateField("startDate", startDate);
    updateField("endDate", endDate);
    updateField("location", search);
    updateField("customDates", selectedDates);
    updateField("numOfGuests", numOfGuests);
    updateField("typeOfReservation", typeReservation);
    setSearch("");
    router.push("/search");
  };
  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
          type="text"
          placeholder={placeholder || "Start Search"}
          className="text-sm w-full  text-gray-600 placeholder-gray-400 grow pl-5 pe-1 bg-transparent outline-none"
        />
        <SearchIcon
          size={30}
          className="hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      {search && (
        <div className="absolute w-[110%]! bg-white  items-center justify-center flex flex-col top-[110%] left-[50%] translate-x-[-50%]">
          <ReservationTypeTabs
            typeReservation={typeReservation}
            setTypeReservation={setTypeReservation}
          />

          {typeReservation === "range" ? (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelectRange}
              locale={enUS}
              rangeColors={["#ff5a5f"]}
              minDate={new Date()}
              className="flex flex-col-reverse! md:flex-row! items-center! px-2! my-2! border-b-2 justify-center!"
            />
          ) : (
            <div className="w-full bg-white flex items-center justify-center">
              <Calendar
                date={new Date()}
                onChange={handleSelectCustom}
                locale={enUS}
                color="black"
                dayContentRenderer={dayContentRenderer}
                minDate={new Date()}
              />
            </div>
          )}

          <GuestsSelector
            numOfGuests={numOfGuests}
            setNumOfGuests={setNumOfGuests}
          />

          <div className="flex gap-3 items-center  bg-white p-5">
            <Button
              type="button"
              variant={"outline"}
              className="grow cursor-pointer w-full"
              onClick={() => setSearch("")}
            >
              Cancel
            </Button>

            <Link
              href={{
                pathname: "/search",
                query: {
                  location: search,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  numOfGuests: numOfGuests,
                  typeOfReservation: typeReservation,
                  customDates: JSON.stringify(
                    selectedDates.map((d) => d.toISOString())
                  ),
                },
              }}
              onClick={handleOnSave}
              className="grow cursor-pointer text-red-400 w-full"
            >
              <Button
                onClick={handleOnSave}
                className="grow cursor-pointer w-full"
              >
                Save
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
