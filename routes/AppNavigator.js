import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard/Dashboard";
import Map from "../screens/Map/Map";
import ChatList from "../screens/Chat-List/ChatList";
import Chat from "../screens/Chat/Chat";
import GroupChat from "../screens/Group-Chat/GroupChat";
import Profile from "../screens/Profile/Profile";
import AccountSetting from "../screens/Account-Setting/AccountSetting";
import EditProfile from "../screens/Edit-Profile/EditProfile";
import Guide1 from "../screens/Guide-1/Guide1";
import Guide2 from "../screens/Guide-2/Guide2";
import Discover from "../screens/Discover/Discover";
import Result from "../screens/Result/Result";
import Statistics from "../screens/Statistics/Statistics";
import PrivacyPolicy from "../screens/Privacy-Policy/PrivacyPolicy";
import TermsCondition from "../screens/Terms-Condition.js/TermsCondition";
const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
   
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Map" component={Map} />
      <Screen name="ChatList" component={ChatList} />
      <Screen name="Chat" component={Chat} />
      <Screen name="GroupChat" component={GroupChat} />
      <Screen name="Profile" component={Profile} />
      <Screen name="AccountSetting" component={AccountSetting} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="Guide1" component={Guide1} />
      <Screen name="Guide2" component={Guide2} />
      <Screen name="Discover" component={Discover} />
      <Screen name="Result" component={Result} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Screen name="TermsCondition" component={TermsCondition} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
