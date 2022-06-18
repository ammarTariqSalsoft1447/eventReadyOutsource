import React from "react";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const ChangePasswordScreen = props => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>

            <InputField
                placeholder='Enter Current Password'
                secureTextEntry={true}
                style={styles.field}
            />
            <InputField
                placeholder='Enter New Password'
                secureTextEntry={true}
                style={styles.field}
            />
            <InputField
                placeholder='Confirm New Password'
                secureTextEntry={true}
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
export default ChangePasswordScreen