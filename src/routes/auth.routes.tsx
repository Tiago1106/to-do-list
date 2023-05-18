import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthPage from '../pages/Auth';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="AuthPage" component={AuthPage} />
  </Auth.Navigator>
);

export default AuthRoutes;