import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const SpeakerDetailsScreen = props => {
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
                    naomi alhadeff
                </RegularText>
                <RegularText style={styles.about}>
                    of national wildlife federation
                </RegularText>
            </ImageBackground>
            <View style={styles.detailsContainer}>
                <RegularText style={styles.details}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been industry's
                    standard dummy text ever since the 1500s, when an u
                    nknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                    {'\n'}
                    {'\n'}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been industry's
                    ype and scrambled ake a type specimen book.
                    {'\n'}
                    {'\n'}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been industry's
                    ype and scrambled ake a type specimen book.
                </RegularText>
            </View>
            <View style={styles.infoContainer}>
                <SemiBoldText style={styles.infoName}>
                    naomi alhadeff
                </SemiBoldText>
                <RegularText style={styles.infoTime}>
                    10-21-2022 - 10:00 AM
                </RegularText>
                <SemiBoldText style={styles.infoDetails}>
                    teaching climate change and climate
                    justice through hand-on education
                </SemiBoldText>
                <RegularText style={styles.code}>
                    cMR 312
                </RegularText>
            </View>
        </ScrollView>
    )
}
export default SpeakerDetailsScreen