import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthStack from "./AuthStack";
import ContactStack from "./ContactStack";
import DashboardStack from "./DashboardStack";
import DrawerNavigation from "./DrawerNavigation";
const Main = createStackNavigator()
const MainStack = () => {
    return (
        <Main.Navigator screenOptions={{
            headerShown:false
        }}>
            <Main.Screen component={AuthStack} name='Authentication'/>
            <Main.Screen component={DrawerNavigation} name='Drawer'/>
        </Main.Navigator>
    )
}
export default MainStack