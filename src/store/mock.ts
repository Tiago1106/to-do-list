import create from 'zustand';

import DataMock from '../mock/data.json'

type MyState = {
  data: DataProps[];
  setNewData: (newData: DataProps[]) => void;
};

interface DataProps {
  id: string;
  company: string;
  finishedParams: boolean;
  title: string;
  hour: string;
  date: string;
}

export const useMock = create<MyState>((set) => ({
  data: DataMock,
  setNewData: (newData: DataProps[]) => set({ data: newData }),
}));