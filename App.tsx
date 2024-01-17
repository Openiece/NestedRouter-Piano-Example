// App.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PetStackNavigator from "./router/petStackNavigator";
import { CatIcon } from "./icons/Cat-Icon";
import { AboutIcon } from "./icons/Dog-Icon";  
import { Piano } from "./screens/Piano";
import { PianoIcon } from "./icons/PianoIcon"



const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          headerShown: false,
          tabBarItemStyle: { marginBottom: -20 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={PetStackNavigator}
          options={{
            tabBarIcon: ({ color }) => <CatIcon color={color} />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="AboutScreen"
          component={PetStackNavigator}
          options={{
            tabBarIcon: ({ color }) => <AboutIcon color={color} />,
            tabBarShowLabel: false,
          }}
        />
                <Tab.Screen
          name="PianoScreen"
          component={Piano}
          options={{
            tabBarIcon: ({ color }) => <PianoIcon color={color} />,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
