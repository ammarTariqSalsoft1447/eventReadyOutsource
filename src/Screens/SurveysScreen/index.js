import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { RegularText } from "../../Components/TextWrappers";
const SurveysScreen = props => {
    const renderItem = ({ index, item }) => {
        return (
            <TouchableOpacity style={styles.button}>
                <RegularText style={styles.des}>
                    Redirected to different website
                </RegularText>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            contentContainerStyle={styles.scrollContent}
            style={styles.flatList}
            renderItem={renderItem}
            data={[1, 2, 4, 6, 2, 3, 4, 6, 3, 234, 3, 234, 52, 3]}
        />
    )
}
export default SurveysScreen