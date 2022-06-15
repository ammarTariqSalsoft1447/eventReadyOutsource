import React from "react";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const RegisterScreen = props => {
    React.useEffect(() => {
        AnimatedSplash.hide()
    }, [])
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <UserImage 
            showCamera={true}
            />
            <InputField
                placeholder='Full Name'
                style={styles.field}
            />
            <InputField
                placeholder='Enter Email Address'
                keyboardType='email-address'
                style={styles.field}
            />
            <InputField
                placeholder='Phone Number'
                style={styles.field}
            />
            <InputField
                placeholder='Date Of Birth'
                style={styles.field}
            />
            <InputField
                placeholder='About'
                style={styles.field}
            />

            <InputField
                placeholder='Enter Password'
                secureTextEntry={true}
                style={styles.field}
            />
            <InputField
                placeholder='Confirm Password'
                secureTextEntry={true}
                style={styles.field}
            />
            <MainButton
                text='Continue'
                onPress={() => props.navigation.navigate('LoginScreen')}

                style={styles.button}
            />
            <RegularText onPress={() => props.navigation.navigate('LoginScreen')} style={styles.footerText}>
                Already Have An Account? {' '}
                <RegularText style={[styles.footerText, styles.link]}>
                    Login Here
                </RegularText>
            </RegularText>
        </KeyboardAwareScrollView>
    )
}
export default RegisterScreen