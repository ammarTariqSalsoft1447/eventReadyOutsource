import React from "react";
import {
    Image, TextInput
} from 'react-native'
import { textStyles } from "../TextWrappers";
import styles from "./styles";
const InputField = (props) => {
    return (
        <TextInput 
            placeholderTextColor={'#333333'}
            selectionColor={'#C8A12D'}
            allowFontScaling={false}
            {...props}
            style={[textStyles.regular,styles.input, props.style]}
        />
    )
}
export default InputField;