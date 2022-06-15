import React from "react";
import {
    Image, TextInput
} from 'react-native'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { RegularText } from "../TextWrappers";
import styles from "./styles";
const MainButton = (props) => {
    var pressedColor = '#252120';
    if (props.pressedColor) {
        pressedColor = props.pressedColor
    }

    var color = '#C8A12D';
    if (props.color) {
        color = props.color
    }

    var pressedTextColor = '#FFFFFF';
    if (props.pressedTextColor) {
        pressedTextColor = props.pressedTextColor
    }

    var textColor = '#000000';
    if (props.textColor) {
        textColor = props.textColor
    }

    if (props.invertedColors) {
        [pressedColor, color] = [color, pressedColor]
        [pressedTextColor, textColor] = [textColor, pressedTextColor]
    }
    return (
        <Pressable
            {...props}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? pressedColor
                        : color
                },
                styles.button,
                props.style
            ]}>
            {({ pressed }) => (
                <RegularText style={[{ color: pressed ? pressedTextColor : textColor }, styles.text, props.textStyle]}>
                    {props.text}
                </RegularText>
            )}
        </Pressable>
    )
}
export default MainButton;