import { UsersIcon } from "lucide-react";

const GuestsSelector = ({
  numOfGuests,
  setNumOfGuests,
}: {
  numOfGuests: number;
  setNumOfGuests: (v: number) => void;
}) => {
  return (
    <div className="W-full md:w-1/2 flex items-center border-b bg-white p-4">
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
  );
};

export default GuestsSelector;
