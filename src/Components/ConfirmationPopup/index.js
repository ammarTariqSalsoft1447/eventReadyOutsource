import React, { forwardRef, useImperativeHandle } from "react";
import {
    View, Modal, TextInput, Image
} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import styles from "./styles";
import { RegularText } from "../TextWrappers";
import MainButton from "../MainButton";
const ConfirmationPopup = (props) => {
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
    const handleNo = () => {
        close()
        if (props.onNo) props.onNo()
    }
    const handleYes = () => {
        close()
        if (props.onYes) props.onYes()
    }
    const renderContent = () => {
        return (
            <View style={styles.content}>
                <View style={styles.bar} />
                <Image
                    style={styles.thumbsUp}
                    source={require('../../Assets/images/confirmationMark.png')} />
                <RegularText style={styles.message}>
                    {props.message}
                </RegularText>
                <View style={styles.buttonsContainer}>
                    <MainButton
                        pressedColor='#C8A12D'
                        color='#252120'
                        pressedTextColor='#000000'
                        textColor='#FFFFFF'
                        text="Yes"
                        style={styles.button}
                        onPress={handleYes}
                    />
                    <MainButton
                        text="No"
                        style={[styles.button, styles.noButton]}
                        onPress={handleNo}
                    />
                </View>
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
export default ConfirmationPopup;