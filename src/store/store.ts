import { create } from 'zustand';

type MyState = {
  idTaskSelected: string;
  setIdTaskSelected: (newId: string) => void;
  haveFilter: number;
  setHaveFilter: (newHaveFilter: number) => void;
};

export const useMyStore = create<MyState>((set) => ({
  idTaskSelected: '',
  setIdTaskSelected: (newId: string) => set({ idTaskSelected: newId }),
  haveFilter: 0,
  setHaveFilter: (newHaveFilter: number) => set({ haveFilter: newHaveFilter }),
}));