import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ScrollView, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import MapView from 'react-native-maps'
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
const DocumentViewScreen = props => {

    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            <RegularText style={styles.info}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard dummy text ever since the 1500s, when an u
                nknown printer took a galley of type and scrambled it to
                make a type specimen book.
                {'\n'}
                {'\n'}
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard dummy text ever since the 1500s, when an u
                nknown printer took a galley of type and scrambled it to
                make a type specimen book.
                {'\n'}
                {'\n'}
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard dummy text ever since the 1500s, when an u
                nknown printer took a galley of type and scrambled it to
                make a type specimen book.
                {'\n'}
                {'\n'}
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard dummy text ever since the 1500s, when an u
                nknown printer took a galley of type and scrambled it to
                make a type specimen book.
            </RegularText>
        </ScrollView>
    )
}
export default DocumentViewScreen