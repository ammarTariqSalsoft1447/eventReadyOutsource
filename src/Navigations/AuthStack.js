import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import VenueMapScreen from '../Screens/VenueMapScreen';
import WhatsOnScreen from '../Screens/WhatsOnScreen';
import ScheduleListScreen from '../Screens/ScheduleListScreen';
import SurveysScreen from '../Screens/SurveysScreen';
const Stack = createStackNavigator();

const AuthStack = props => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="VenueMapScreen" component={VenueMapScreen} />
            <Stack.Screen name="WhatsOnScreen" component={WhatsOnScreen} />
            <Stack.Screen name="ScheduleListScreen" component={ScheduleListScreen} />
            <Stack.Screen name="SurveysScreen" component={SurveysScreen} />
        </Stack.Navigator>
    )
}
export default AuthStack