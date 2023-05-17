import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "../pages/Auth";
import ListToDo from "../pages/ListToDo";
import NewTask from "../pages/NewTask";

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth}/>
        <Stack.Screen name="ListToDo" component={ListToDo}/>
        <Stack.Screen name="NewTask" component={NewTask}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;