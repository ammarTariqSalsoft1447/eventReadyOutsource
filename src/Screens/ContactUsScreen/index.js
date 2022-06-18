import React from "react";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const ContactUsScreen = props => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>

            <InputField
                placeholder='Full Name'
                style={styles.field}
            />
            <InputField
                placeholder='Enter Email Address'
                style={styles.field}
            />
            <InputField
                placeholder='Enter Subject'
                style={styles.field}
            />
            <InputField
                placeholder='Enter Message'
                style={styles.field}
            />
            <MainButton
                text='Update'
                onPress={() => props.navigation.pop()}
                style={styles.button}
            />
        </KeyboardAwareScrollView>
    )
}
export default ContactUsScreen