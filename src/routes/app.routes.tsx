import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListToDo from '../pages/ListToDo';
import NewTask from '../pages/NewTask';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="ListToDo" component={ListToDo} />
    <App.Screen name="NewTask" component={NewTask} />
  </App.Navigator>
);

export default AppRoutes;