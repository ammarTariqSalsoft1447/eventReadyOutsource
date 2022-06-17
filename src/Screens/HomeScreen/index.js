import React from "react";
import { Image, Pressable, TextInput, View } from "react-native";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MainButton from "../../Components/MainButton";
import { RegularText } from '../../Components/TextWrappers'
import styles from "./styles";
const HomeScreen = props => {
    const renderTopButton = (label, icon, onPress = () => { }) => {
        return (
            <Pressable style={({ pressed }) => [
                styles.topButton,
                pressed && {
                    backgroundColor: '#C8A12D'
                }
            ]}>
                <Image source={icon} style={styles.topButtonIcon} />
                <RegularText style={styles.topButtonLabel}>{label}</RegularText>
            </Pressable>
        )
    }
    const renderMainButtons = (label, icon, onPress = () => { }) => {
        return (
            <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                styles.mainButton,
                pressed && {
                    backgroundColor: '#C8A12D'
                }
            ]}>
                <Image source={icon} style={styles.mainButtonIcon} />
                <RegularText style={styles.mainButtonLabel}>{label}</RegularText>
            </Pressable>
        )
    }
    const renderSearchBar = () => {
        return (
            <View style={styles.searchBarContainer}>
                <TextInput style={styles.searchField} placeholder='Search 2022 educator conference' />
                <Image style={styles.searchIcon} source={require('../../Assets/images/searchIcon.png')} />
            </View>
        )
    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <Image
                source={require('../../Assets/images/sampleBannerLogo.png')}
                style={styles.bannerImage}
            />
            <View style={styles.topButtonsContainer}>
                {renderTopButton('MY DOCUMENTS', require('../../Assets/images/documentsIcon.png'))}
                {renderTopButton('DOCUMENTS', require('../../Assets/images/documentsIcon.png'))}
                {renderTopButton('SPONSORS', require('../../Assets/images/sponsorsIcon.png'))}
                {renderTopButton('VENUES', require('../../Assets/images/venueIcon.png'))}
            </View>
            <View style={styles.mainButtonsContainer}>
                {renderMainButtons("WHAT's ON", require('../../Assets/images/whatsOnIcon.png'), () => props.navigation.navigate('WhatsOnScreen'))}
                {renderMainButtons("SCHEDULE", require('../../Assets/images/scheduleIcon.png'),() => props.navigation.navigate('ScheduleListScreen'))}
                {renderMainButtons("MY EXHIBITORS", require('../../Assets/images/myExhibitors.png'))}
                {renderMainButtons("EXHIBITORS", require('../../Assets/images/exhibitorsIcon.png'))}
                {renderMainButtons("ATTENDEE", require('../../Assets/images/attendeeIcon.png'))}
                {renderMainButtons("MESSAGING", require('../../Assets/images/messagingIcon.png'))}
                {renderMainButtons("SPEAKERS", require('../../Assets/images/speakersIcon.png'))}
                {renderMainButtons("MY PROFILE", require('../../Assets/images/myProfileIcon.png'))}
                {renderMainButtons("MY NOTES", require('../../Assets/images/myNotesIcon.png'))}
                {renderMainButtons("SURVEYS", require('../../Assets/images/surveysIcon.png'),() => props.navigation.navigate('SurveysScreen'))}
            </View>
            <View style={styles.venues}>
                <RegularText style={styles.venueMapsHeading}>
                    VENUE MAPS
                </RegularText>
                <View>
                    <MainButton
                        onPress={() => props.navigation.navigate('VenueMapScreen')}
                        pressedColor='#C8A12D'
                        color='#252120'
                        pressedTextColor='#000000'
                        textColor='#FFFFFF'
                        text="MAP A"
                        style={styles.mapButton}
                    />
                    <MainButton
                        onPress={() => props.navigation.navigate('VenueMapScreen')}
                        pressedColor='#C8A12D'
                        color='#252120'
                        pressedTextColor='#000000'
                        textColor='#FFFFFF'
                        text="MAP B"
                        style={styles.mapButton}
                    />
                    <MainButton
                        onPress={() => props.navigation.navigate('VenueMapScreen')}
                        pressedColor='#C8A12D'
                        color='#252120'
                        pressedTextColor='#000000'
                        textColor='#FFFFFF'
                        text="MAP C"
                        style={styles.mapButton}
                    />
                </View>
                {renderSearchBar()}
            </View>
        </KeyboardAwareScrollView>
    )
}
export default HomeScreen