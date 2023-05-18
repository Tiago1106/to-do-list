import { StatusBar, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';
import AppProvider from './src/hooks';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FA" />
      <AppProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaView>
  );
}
