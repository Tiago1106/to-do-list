import create from 'zustand';

type MyState = {
  idTaskSelected: string;
  setIdTaskSelected: (newId: string) => void;
};

export const useMyStore = create<MyState>((set) => ({
  idTaskSelected: '',
  setIdTaskSelected: (newId: string) => set({ idTaskSelected: newId }),
}));