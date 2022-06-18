import React from "react";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const MessagingScreen = props => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <InputField
                placeholder='To:'
                style={styles.field}
            />
            <InputField
                placeholder='Message Title:'
                style={styles.field}
            />
            <InputField
                placeholder='Message Body:'
                style={styles.field}
            />
            <MainButton
                text='Submit Now'
                onPress={() => props.navigation.pop()}
                style={styles.button}
            />
        </KeyboardAwareScrollView>
    )
}
export default MessagingScreen