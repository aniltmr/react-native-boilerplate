import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserSlideContainer from "./UserCategory/UserSlideContainer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // for showing bottom tab, we have used Tab in Navigator conatiner

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="User Category"
          component={UserSlideContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
