import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

type MyState = {
  data: DataProps[];
  setNewData: (newData: DataProps[]) => void;
  dataFilter: DataProps[];
  setNewDataFilter: (newData: DataProps[]) => void;
};

interface DataProps {
  id: string;
  company: string;
  finishedParams: boolean;
  title: string;
  hour: string;
  date: string;
}

export const useMock = create<MyState>((set) =>  {
  const fetchDataFromAsyncStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      const parsedData = storedData ? JSON.parse(storedData) : [];

      set({ data: parsedData });
    } catch (error) {
    }
  };

  fetchDataFromAsyncStorage();

  return {
    data: [],
    setNewData: (newData: DataProps[]) => {
      const sortedData = newData.sort((a, b) => moment(a.date, 'DD/MM').diff(moment(b.date, 'DD/MM')));
      set({ data: sortedData });
      AsyncStorage.setItem('data', JSON.stringify(sortedData));
    },
    dataFilter: [],
    setNewDataFilter: (newData: DataProps[]) => set({ dataFilter: newData }),
  }
});