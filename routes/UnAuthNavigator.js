import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import SignUp from "../screens/Sign-Up/SignUp";
import ForgetPassword from "../screens/Forget-Password/ForgetPassword";
const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
    </Navigator>
  );
}
export const UnAuthNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
