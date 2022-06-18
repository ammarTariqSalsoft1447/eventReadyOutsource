import React from "react";
import { View } from "react-native";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText, SemiBoldText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const ViewMyProfileScreen = props => {
    const renderInfo = (title, detail) => {
        return (
            <View style={styles.infoContainer}>
                <SemiBoldText style={styles.title}>
                    {title}
                </SemiBoldText>
                <RegularText style={styles.detail}>
                    {detail}
                </RegularText>
            </View>
        )
    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <UserImage
                showCamera={false}
            />
            {renderInfo('Full name', 'Joy Root')}
            {renderInfo('email address', 'info@exampe.com')}
            {renderInfo('phone number', '+1-123-456-7890')}
            {renderInfo('date of birth', '01-01-1998')}
            {renderInfo('about', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")}
            <MainButton
                text='Edit'
                onPress={() => props.navigation.navigate('EditProfileScreen')}
                style={styles.button}
            />
        </KeyboardAwareScrollView>
    )
}
export default ViewMyProfileScreen