import { StatusBar, SafeAreaView } from 'react-native'

import Auth from "./src/pages/Auth";

export default function App() { 
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Auth />    
    </SafeAreaView>
  );
}
