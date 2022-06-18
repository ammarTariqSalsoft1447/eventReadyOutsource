import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../Screens/HomeScreen";
import DrawerScreenWrapper from "./DrawerComponents/DrawerScreenWrapper";
import DrawerContent from "./DrawerComponents/DrawerContent";
import { vw } from "../../Utils/unitConversion";

const Drawer = createDrawerNavigator();
const AnimatedDashboard = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <HomeScreen />
    </DrawerScreenWrapper>
  );
};
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
      <Drawer.Screen name="AnimatedDashboard" component={AnimatedDashboard} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;