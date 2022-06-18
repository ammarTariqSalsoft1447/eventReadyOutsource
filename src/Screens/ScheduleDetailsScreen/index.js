import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const ScheduleDetailsScreen = props => {
    renderInfo = (title, details, icon) => {
        return (
            <>
                {icon && <Image
                    style={styles.icon}
                    source={icon}
                />}
                <View style={styles.infoContainer}>
                    {title && <SemiBoldText style={styles.title}>
                        {title}
                    </SemiBoldText>}
                    {details && <RegularText style={styles.details}>
                        {details}
                    </RegularText>}
                </View>
            </>
        )
    }
    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            <Image
                style={styles.banner}
                source={require('../../Assets/images/scheduleDetailsBanner.png')}
            />
            <View style={styles.row}>
                {renderInfo('Session Details', false, false)}
            </View>
            <View style={styles.row}>
                {renderInfo('10-06-2022 - 08:00 PM', 'Start Time-Date', require('../../Assets/images/goldCalendar.png'))}
            </View>
            <View style={styles.row}>
                {renderInfo('10-06-2022 - 10:00 PM', 'End Time-Date', require('../../Assets/images/goldCalendar.png'))}
            </View>
            <View style={styles.row}>
                {renderInfo('Speaker', false, require('../../Assets/images/goldSpeaker.png'))}
            </View>
            <View style={styles.row}>
                {renderInfo(false, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's type and scrambled ake a type specimen book.`, false)}
            </View>
            <View style={[styles.row,styles.rowHiddenBorder]}>
                {renderInfo('Documents and Resources', false, false)}
            </View>
            <MainButton
                onPress={() => props.navigation.pop()}
                pressedColor='#C8A12D'
                color='#252120'
                pressedTextColor='#000000'
                textColor='#FFFFFF'
                text="Add To My Schedule"
                style={styles.button}
            />
            <MainButton
                onPress={() => props.navigation.pop()}
                pressedColor='#C8A12D'
                color='#252120'
                pressedTextColor='#000000'
                textColor='#FFFFFF'
                text="My Schedule"
                style={styles.button}
            />
            <MainButton
                onPress={() => props.navigation.navigate('AddNoteScreen')}
                pressedColor='#C8A12D'
                color='#252120'
                pressedTextColor='#000000'
                textColor='#FFFFFF'
                text="Add Note"
                style={styles.button}
            />
        </ScrollView>
    )
}
export default ScheduleDetailsScreen