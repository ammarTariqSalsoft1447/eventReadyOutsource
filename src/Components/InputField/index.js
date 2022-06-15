import React from "react";
import {
    Image, TextInput
} from 'react-native'
import styles from "./styles";
const InputField = (props) => {
    return (
        <TextInput 
            placeholderTextColor={'#333333'}
            selectionColor={'#C8A12D'}
            allowFontScaling={false}
            {...props}
            style={[styles.input, props.style]}
        />
    )
}
export default InputField;