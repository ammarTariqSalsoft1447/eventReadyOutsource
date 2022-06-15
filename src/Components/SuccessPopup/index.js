import React, { forwardRef, useImperativeHandle } from "react";
import {
    View, Modal, TextInput, Image
} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import styles from "./styles";
import { RegularText } from "../TextWrappers";
import MainButton from "../MainButton";
const SuccessPopup = (props) => {
    const [visible, setVisible] = React.useState(false)
    useImperativeHandle(props.reference, () => ({
        close: close,
        open: open
    }))
    const close = () => {
        setVisible(false)
        if (props.onClose) props.onClose()
    }
    const open = () => {
        setVisible(true)
    }
    const renderContent = () => {
        return (
            <View style={styles.content}>
                <View style={styles.bar} />
                <Image
                    style={styles.thumbsUp}
                    source={require('../../Assets/images/thumbsUp.png')} />
                <RegularText style={styles.message}>
                    Password Has Been Updated!
                </RegularText>
                <MainButton
                    pressedColor='#C8A12D'
                    color='#252120'
                    pressedTextColor='#000000'
                    textColor='#FFFFFF'
                    text="OK"
                    style={styles.button}
                    onPress={close}
                />
            </View>
        )
    }
    return (
        <Modal statusBarTranslucent={true} style={styles.modal} transparent={true} visible={visible}>
            <View style={styles.container}>
                <BlurView
                    blurType='light'
                    style={styles.blur}
                />
                {renderContent()}
            </View>
        </Modal>
    )
}
export default SuccessPopup;