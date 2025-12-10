"use client";
import { SearchIcon, UsersIcon } from "lucide-react";
import { useState } from "react";
import { Calendar, DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { enUS } from "date-fns/locale";
import { format, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [search, setSearch] = useState("");
  const [typeReervation, setTypeReservation] = useState("range");
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
        <div className="absolute w-[558px]  items-center justify-center flex flex-col top-[110%] left-[50%] translate-x-[-50%]">
          <div className="flex items-center w-full pb-1 ">
            {/* buttons */}
            <div className=" w-full flex items-center justify-between">
              <div
                onClick={() => {
                  setTypeReservation("range");
                }}
                className={`${
                  typeReervation === "range"
                    ? " bg-[#ff5a5f] "
                    : "border border-primary"
                } w-full items-center justify-center flex  rounded-full py-2 cursor-pointer `}
              >
                Range Of Days
              </div>
              <div
                onClick={() => {
                  setTypeReservation("custom");
                }}
                className={`${
                  typeReervation === "custom"
                    ? " bg-primary "
                    : "border border-primary"
                } w-full items-center justify-center flex  rounded-full py-2 cursor-pointer`}
              >
                Custom Days
              </div>
            </div>
          </div>

          {typeReervation === "range" ? (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelectRange}
              locale={enUS}
              rangeColors={["#ff5a5f"]}
              minDate={new Date()}
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

          <div className="w-full flex items-center border-b bg-white p-4">
            <h2 className="text-2xl grow font-semibold">Number of Guests :</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-primary"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>

          <div className="flex gap-3 items-center w-full bg-white p-5">
            <Button
              type="button"
              variant={"outline"}
              className="grow cursor-pointer"
              onClick={() => setSearch("")}
            >
              Cancel
            </Button>
            <Button className="grow cursor-pointer">
              <Link
                // href={{
                //   pathname: "/",
                //   // search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
                // }}
                href={"/"}
                onClick={() => setSearch("")}
                className=" "
              >
                Save
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
