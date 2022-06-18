import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const SpeakersListScreen = props => {
    const renderItem = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => props.navigation.navigate('SpeakerDetailsScreen')}
                style={({ pressed }) => [
                    styles.buttonRow,
                    pressed && styles.buttonPressed
                ]}
            >
                <SemiBoldText style={styles.name}>
                    Naomai Alhadeff
                </SemiBoldText>
                <Image style={styles.icon} source={require('../../Assets/images/rightArrowGold.png')} />
            </Pressable>
        )
    }
    return (
        <FlatList
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            data={[1, 2, 3, 4]}
            renderItem={renderItem}
        />
    )
}
export default SpeakersListScreen