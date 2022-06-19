import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
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
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { textStyles } from "../Components/TextWrappers";
import { useNavigation } from "@react-navigation/native";
import NotificationsScreen from "../Screens/NotificationsScreen";
import MessagingScreen from "../Screens/MessagingScreen";
import { vw } from "../Utils/unitConversion";
const Stack = createStackNavigator()
export const headerTitle = {
    HomeScreen: 'OBAP',
    VenueMapScreen: 'MAP',
    WhatsOnScreen: "What's on",
    ScheduleListScreen: 'SCHEDULE',
    SurveysScreen: 'SURVEY',
    ScheduleDetailsScreen: '',
    MyNotesScreen: 'My Notes',
    AddNoteScreen: 'Notes',
    SponsorsListScreen: 'Sponsors',
    SponsorDetailsScreen: 'Sponsor Details',
    SpeakersListScreen: 'Speakers',
    SpeakerDetailsScreen: 'Speaker Details',
    MapScreen: 'Map View',
    DocumentListScreen: 'Documents',
    MyDocumentListScreen: 'My Documents',
    DocumentViewScreen: 'Document View',
    ExhibitorsListScreen: 'Exhibitors',
    MyExhibitorsListScreen: 'My Exhibitors',
    ExhibitorDetailsScreen: 'Exhibitor Details',
    AttendeesListScreen: 'Attendees',
    AttendeeDetailsScreen: 'Attendee Details',
    MyProfileScreen: 'My Profile',
    ViewMyProfileScreen: 'My Profile',
    EditProfileScreen: 'Edit Profile',
    ChangePasswordScreen: "Change Password",
    PrivacyPolicyScreen: 'Privacy Policy',
    ContactUsScreen: 'Contact Us',
    NotificationsScreen: 'Notifications',
    MessagingScreen: 'Messaging',
    ScheduleDetailsScreen:'Schedule Details'
}
export const renderDrawerIcon = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.drawerIcon}>
            <Image source={require('../Assets/images/drawerIcon.png')} style={styles.leftIcon} />
        </TouchableOpacity>
    )
}
export const renderNotificationButton = (props) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')} style={[styles.drawerIcon, styles.right]}>
            <Image source={require('../Assets/images/notificationHeader.png')} style={styles.leftIcon} />
        </TouchableOpacity>
    )
}

const DashboardStack = () => {
    StatusBar.setBackgroundColor('#C8A12D')
    return (
        <Stack.Navigator
            screenOptions={props => {
                return {
                    headerBackTitleVisible:false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: [textStyles.regular, styles.titleStyle],
                    headerStyle: styles.headerStyle,
                    headerTitle: headerTitle[props.route.name] ? headerTitle[props.route.name] : '',
                    headerBackImage: () => <Image style={styles.leftIcon} source={require('../Assets/images/backIcon.png')} />
                }
            }}
        >
            <Stack.Screen options={{
                headerLeft: renderDrawerIcon,
                headerRight: renderNotificationButton
            }} name="HomeScreen" component={HomeScreen} />
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
            <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
            <Stack.Screen name="MessagingScreen" component={MessagingScreen} />
        </Stack.Navigator>
    )
}
export default DashboardStack