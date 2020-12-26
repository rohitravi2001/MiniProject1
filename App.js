// This import is necessary for any file containing a React component
import React from "react";

// These imports are part of our navigation package, React Navigation
// https://reactnavigation.org/docs/getting-started
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Our project has two screens: HomeScreen and GameScreen
// Thus, we import both of these screens
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreenStarter";

// To initialize and style our Navigation Stack, we call the default methods
// https://reactnavigation.org/docs/hello-react-navigation
const Stack = createStackNavigator();
const StackOptions = { headerTitleStyle: { fontFamily: "Avenir" } };

// This is the default entry point of our application
// This function returns JSX: a tree-like structure of React components
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Match the Members"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Play"
          component={GameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
