import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { RegularText } from "../../Components/TextWrappers";
const WhatsOnScreen = props => {
    const renderItem = ({ index, item }) => {
        return (
            <TouchableOpacity style={styles.button}>
                <View style={styles.timeContainer}>
                    <RegularText style={styles.date}>
                        10/06-2022 - {' '}
                    </RegularText>
                    <RegularText style={styles.time}>
                        07 : 00 PM
                    </RegularText>
                </View>
                <RegularText style={styles.des}>
                    Lorem Ipsum is simply dummy text of the printing and ypese
                    tting industry. Lorem Ipsum has been industry's  pe and scram
                    bled ake a type specimen book.
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
export default WhatsOnScreen