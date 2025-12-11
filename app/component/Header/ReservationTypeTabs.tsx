const ReservationTypeTabs = ({
  typeReservation,
  setTypeReservation,
}: {
  typeReservation: string;
  setTypeReservation: (v: string) => void;
}) => {
  return (
    <div className="flex items-center w-full pb-1">
      <div className="w-full gap-4 flex items-center justify-center my-3">
        <div
          onClick={() => setTypeReservation("range")}
          className={`${
            typeReservation === "range"
              ? "bg-[#ff5a5f]"
              : "border border-primary"
          } w-1/4 items-center justify-center flex rounded-full py-2 cursor-pointer`}
        >
          Range Of Days
        </div>

        <div
          onClick={() => setTypeReservation("custom")}
          className={`${
            typeReservation === "custom"
              ? "bg-primary"
              : "border border-primary"
          } w-1/4 items-center justify-center flex rounded-full py-2 cursor-pointer`}
        >
          Custom Days
        </div>
      </div>
    </div>
  );
};

export default ReservationTypeTabs;
