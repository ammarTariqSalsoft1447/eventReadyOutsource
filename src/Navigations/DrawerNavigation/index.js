import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../Screens/HomeScreen";
import DrawerScreenWrapper from "./DrawerComponents/DrawerScreenWrapper";
import DrawerContent from "./DrawerComponents/DrawerContent";
import { vw } from "../../Utils/unitConversion";
import DashboardStack from "../DashboardStack";
import ContactStack from "../ContactStack";
import ProfileStack from "../ProfileStack";

const Drawer = createDrawerNavigator();
const AnimatedDashboardStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <DashboardStack />
    </DrawerScreenWrapper>
  );
};
const AnimatedContactUs = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ContactStack />
    </DrawerScreenWrapper>
  );
};
const AnimatedProfileStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ProfileStack />
    </DrawerScreenWrapper>
  );
}

const DrawerNavigation = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerActiveTintColor: 'transparent',
        drawerStyle: {
          backgroundColor: 'transparent',
          width: vw(60),
        },
        sceneContainerStyle: {
          backgroundColor: '#E8AE00',
          elevation: 0
        },
        drawerContentStyle: {
          flex: 1,
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name="AnimatedDashboard" component={AnimatedDashboardStack} />
      <Drawer.Screen name="AnimatedContactUs" component={AnimatedContactUs} />
      <Drawer.Screen name="AnimatedProfileStack" component={AnimatedProfileStack} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;