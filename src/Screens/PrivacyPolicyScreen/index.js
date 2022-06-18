import React from "react";
import { TouchableOpacity } from "react-native";
import AnimatedSplash from "react-native-animated-splash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import { RegularText, SemiBoldText } from "../../Components/TextWrappers";
import UserImage from "../../Components/UserImage";
import styles from "./styles";
const PrivacyPolicyScreen = props => {
    React.useEffect(() => {
        AnimatedSplash.hide()
    }, [])
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <SemiBoldText style={styles.title}>
                Condition of Use
            </SemiBoldText>
            <RegularText style={styles.details}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard dummy text ever since the 1500s, when an u
                nknown printer took a galley of type and scrambled it to
                make a type specimen book.
            </RegularText>
            <SemiBoldText style={styles.title}>
                Privacy
            </SemiBoldText>
            <RegularText style={styles.details}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard
            </RegularText>
            <SemiBoldText style={styles.title}>
                Warrantees
            </SemiBoldText>
            <RegularText style={styles.details}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been industry's
                standard dummy text ever since the 1500s
            </RegularText>
        </KeyboardAwareScrollView>
    )
}
export default PrivacyPolicyScreen