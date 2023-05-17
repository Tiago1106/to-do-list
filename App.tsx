import { StatusBar, SafeAreaView } from 'react-native'

import Routes from './src/routes/Routes';

export default function App() { 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#F7F8FA"}}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FA"/>
      <Routes />    
    </SafeAreaView>
  );
}
