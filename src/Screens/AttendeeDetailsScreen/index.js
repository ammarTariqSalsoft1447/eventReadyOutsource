import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const AttendeeDetailsScreen = props => {
    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
            <ImageBackground
                style={styles.bannerContainer}
                imageStyle={styles.banner}
                source={require('../../Assets/images/speakerDetailsBanner.png')}
            >
                <Image
                    style={styles.speaker}
                    source={require('../../Assets/images/sampleSpeaker.png')}
                />
                <RegularText style={styles.speakerName}>
                    Amy Abendroth
                </RegularText>
            </ImageBackground>
            <View style={styles.content}>
                <SemiBoldText style={styles.attendeeName}>
                    Helena School District
                </SemiBoldText>
                <RegularText style={styles.company}>
                    COMPANY
                </RegularText>
                <RegularText style={styles.title}>
                    TITLE
                </RegularText>
            </View>

        </ScrollView>
    )
}
export default AttendeeDetailsScreen