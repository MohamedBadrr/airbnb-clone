import { create } from "zustand";

type Store = {
  location: string;
  numOfGuests: number;
  startDate: Date | null;
  endDate: Date | null;
  typeOfReservation: string;
  customDates: Date[];

  updateField: <K extends keyof Omit<Store, "updateField">>(
    key: K,
    value: Store[K]
  ) => void;

  resetData: () => void;
};

const useStore = create<Store>()((set) => ({
  customDates: [],
  endDate: null,
  location: "",
  startDate: null,
  typeOfReservation: "",
  numOfGuests: 1,
  updateField: (key, value) =>
    set(() => ({
      [key]: value,
    })),
  resetData: () =>
    set(() => ({
      customDates: [],
      endDate: null,
      location: "",
      startDate: null,
      typeOfReservation: "",
      numOfGuests: 1,
    })),
}));

export default useStore;
