import { create } from "zustand";

type WordSettingState = {
  unitSize: number;
  setUnitSize: (size: number) => void;
};

export const useWordSettingStore = create<WordSettingState>((set) => ({
  unitSize: 20,
  setUnitSize: (size) => set({ unitSize: size }),
}));
