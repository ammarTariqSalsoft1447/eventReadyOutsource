import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
import InputField from "../../Components/InputField";
const AddNoteScreen = props => {

    return (
        <View style={styles.container}>
            <InputField
                placeholder='Enter your notes'
                style={styles.field}
            />
            <MainButton
                text='Submit'
                style={styles.button}
                onPress={() => props.navigation.navigate('MyNotesScreen')}
            />
            <MainButton
                onPress={() => props.navigation.pop()}
                pressedColor='#C8A12D'
                color='#252120'
                pressedTextColor='#000000'
                textColor='#FFFFFF'
                text="Cancel"
                style={styles.button}
            />
        </View>
    )
}
export default AddNoteScreen