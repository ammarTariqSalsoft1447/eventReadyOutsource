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
import ScheduleDetailsScreen from '../Screens/ScheduleDetailsScreen';
import MyNotesScreen from '../Screens/MyNotesScreen';
import AddNoteScreen from '../Screens/AddNoteScreen';
import SponsorsListScreen from '../Screens/SponsorsListScreen';
import SponsorDetailsScreen from '../Screens/SponsorDetailsScreen';
import SpeakersListScreen from '../Screens/SpeakersListScreen';
import SpeakerDetailsScreen from '../Screens/SpeakerDetailsScreen';
import MapScreen from '../Screens/MapScreen';
import DocumentListScreen from '../Screens/DocumentListScreen';
import DocumentViewScreen from '../Screens/DocumentViewScreen';
import ExhibitorsListScreen from '../Screens/ExhibitorsListScreen';
import ExhibitorDetailsScreen from '../Screens/ExhibitorDetailsScreen';
import AttendeesListScreen from '../Screens/AttendeesListScreen';
import AttendeeDetailsScreen from '../Screens/AttendeeDetailsScreen';
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
            <Stack.Screen name="ScheduleDetailsScreen" component={ScheduleDetailsScreen} />
            <Stack.Screen name="MyNotesScreen" component={MyNotesScreen} />
            <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
            <Stack.Screen name="SponsorsListScreen" component={SponsorsListScreen} />
            <Stack.Screen name="SponsorDetailsScreen" component={SponsorDetailsScreen} />
            <Stack.Screen name="SpeakersListScreen" component={SpeakersListScreen} />
            <Stack.Screen name="SpeakerDetailsScreen" component={SpeakerDetailsScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="DocumentListScreen" component={DocumentListScreen} />
            <Stack.Screen name="MyDocumentListScreen" component={DocumentListScreen} />
            <Stack.Screen name="DocumentViewScreen" component={DocumentViewScreen} />
            <Stack.Screen name="ExhibitorsListScreen" component={ExhibitorsListScreen} />
            <Stack.Screen name="MyExhibitorsListScreen" component={ExhibitorsListScreen} />
            <Stack.Screen name="ExhibitorDetailsScreen" component={ExhibitorDetailsScreen} />
            <Stack.Screen name="AttendeesListScreen" component={AttendeesListScreen} />
            <Stack.Screen name="AttendeeDetailsScreen" component={AttendeeDetailsScreen} />
            
        </Stack.Navigator>
    )
}
export default AuthStack