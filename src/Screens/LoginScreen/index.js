import React from "react";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import styles from "./styles";
const LoginScreen = props => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <Logo style={styles.logo} />

            <InputField
                placeholder='Enter Email Address'
                keyboardType='email-address'
                style={styles.field}
            />
            <InputField
                placeholder='Enter Password'
                secureTextEntry={true}
                style={styles.field}
            />
            <MainButton
                text='Sign In'
                style={styles.button}
                onPress={() => props.navigation.navigate('Drawer')}
            />
            <MainButton
                onPress={() => props.navigation.navigate('ForgotPasswordScreen')}
                pressedColor='#C8A12D'
                color='#252120'
                pressedTextColor='#000000'
                textColor='#FFFFFF'
                text="Forgot Password"
                style={styles.button}
            />
            <RegularText onPress={()=>props.navigation.navigate('RegisterScreen')} style={styles.footerText}>
                Not a member? {' '}
                <RegularText  style={[styles.footerText,styles.link]}>
                    Register
                </RegularText>
            </RegularText>
        </KeyboardAwareScrollView>
    )
}
export default LoginScreen