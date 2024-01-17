// PetStackNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DogScreen from "../screens/DogScreen";
import CatScreen from "../screens/CatScreen";
import PetDetailsScreen from "../screens/petDetails";

const Stack = createStackNavigator();

export type PetStackNavigatorParamList = {
  CatScreen: any;
  DogScreen: any;
  PetDetails: { petName: string };
};

const PetStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CatScreen"
        component={CatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DogScreen"
        component={DogScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PetDetails"
        component={PetDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PetStackNavigator;
