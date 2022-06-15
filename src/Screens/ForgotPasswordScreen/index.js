import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputField from "../../Components/InputField";
import Logo from "../../Components/Logo";
import MainButton from "../../Components/MainButton";
import SuccessPopup from "../../Components/SuccessPopup";
import { RegularText } from "../../Components/TextWrappers";
import styles from "./styles";
const ForgotPasswordScreen = props => {
    const success = React.useRef(null);
    const [step, setStep] = React.useState(1)
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <InputField
                        key='email'
                        placeholder='Enter Email Address'
                        keyboardType='email-address'
                        style={styles.field}
                    />
                )
            case 2:
                return (
                    <InputField
                        key='code'
                        keyboardType='number-pad'
                        placeholder='Verification Code'
                        style={styles.field}
                    />
                )
            case 3:
                return (
                    <>
                        <InputField
                            key='pass'
                            secureEntryText={true}
                            placeholder='Enter Password'
                            style={styles.field}
                        />
                        <InputField
                            secureEntryText={true}

                            key='cPass'
                            placeholder='Confirm Password'

                            style={styles.field}
                        />
                    </>
                )
        }
    }
    const nextStep = () => {
        if (step === 3) {
            success.current.open()
            return
        }
        setStep(step > 2 ? 1 : step + 1)

    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
            <Logo style={styles.logo} />
            <RegularText style={[styles.heading]}>
                Forgot Password
            </RegularText>
            {renderStep()}
            <MainButton
                onPress={nextStep}
                text={step === 3 ? 'Update' : 'Continue'}
                style={styles.button}
            />
            {step === 2 && <MainButton
                pressedColor='#C8A12D'
                color='#252120'
                pressedTextColor='#000000'
                textColor='#FFFFFF'
                text="Resend Code"
                style={styles.button}
            />}
            <RegularText onPress={() => props.navigation.pop()} style={[styles.footerText, styles.link]}>
                Back To Login
            </RegularText>
            <SuccessPopup
                reference={success}
                onClose={() => props.navigation.pop()}
            />
        </KeyboardAwareScrollView>
    )
}
export default ForgotPasswordScreen