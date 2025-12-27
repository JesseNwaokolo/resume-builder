import { create } from "zustand";

type StoreProps = {
  selected: number | null;
  setSelected: (id: number) => void;
};

export const useSelectedStore = create<StoreProps>((set) => ({
  selected: null,
  setSelected: (id: number) => {
    set({ selected: id });
  },
}));
