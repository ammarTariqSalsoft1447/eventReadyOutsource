import React from "react";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const EditProfileScreen = props => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <UserImage
                showCamera={true}
            />
            <InputField
                value={'joy Root'}
                placeholder='Full Name'
                style={styles.field}
            />
            <InputField
                value={'joy@example.com'}
                placeholder='Enter Email Address'
                keyboardType='email-address'
                style={styles.field}
            />
            <InputField
                value={'+1-123-456-7890'}
                placeholder='Enter Phone'
                style={styles.field}
            />
            <InputField
                value={'01-01-1998'}
                placeholder='Enter DOB'
                style={styles.field}
            />
            <InputField
                placeholder='About'
                style={styles.field}
                multiline={true}
                value='Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum make a type specimen book.'
            />

            <MainButton
                text='Update'
                onPress={() => props.navigation.pop()}

                style={styles.button}
            />
           
        </KeyboardAwareScrollView>
    )
}
export default EditProfileScreen