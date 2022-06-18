import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
const Main = createStackNavigator()
const DashboardStack = () => {
    return (
        <Main.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
        </Main.Navigator>
    )
}
export default DashboardStack