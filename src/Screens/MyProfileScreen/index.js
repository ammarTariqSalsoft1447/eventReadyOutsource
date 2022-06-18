import React from "react";
import { TouchableOpacity } from "react-native";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const MyProfileScreen = props => {
    React.useEffect(() => {
        AnimatedSplash.hide()
    }, [])
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <UserImage
                showCamera={true}
            />
            <TouchableOpacity style={styles.changePassword} onPress={() => props.navigation.navigate('ChangePasswordScreen')}>
                <RegularText style={styles.changePasswordText}>
                    Change Password
                </RegularText>
            </TouchableOpacity>
            <MainButton
                onPress={() => props.navigation.navigate('ViewMyProfileScreen')}
                pressedColor='#C8A12D'
                color='#EBEBEB'
                pressedTextColor='#000000'
                textColor='#333333'
                text="Personal Information"
                style={styles.button}
            />
            <MainButton
                onPress={() => props.navigation.navigate('PrivacyPolicyScreen')}
                pressedColor='#C8A12D'
                color='#EBEBEB'
                pressedTextColor='#000000'
                textColor='#333333'
                text="Privacy Policy"
                style={styles.button}
            />
            <MainButton
                onPress={() => props.navigation.navigate('AnimatedContactUs')}
                pressedColor='#C8A12D'
                color='#EBEBEB'
                pressedTextColor='#000000'
                textColor='#333333'
                text="Contact Us"
                style={styles.button}
            />
            <MainButton
                text='Logout'
                onPress={() => props.navigation.navigate('LoginScreen')}
                style={styles.button}
            />

        </KeyboardAwareScrollView>
    )
}
export default MyProfileScreen