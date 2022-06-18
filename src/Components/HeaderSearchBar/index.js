import React from "react";
import {
    Image, TextInput, View
} from 'react-native'
import { textStyles } from "../TextWrappers";
import styles from "./styles";
const HeaderSearchBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholderTextColor={'#333333'}
                selectionColor={'#C8A12D'}
                allowFontScaling={false}
                {...props}
                style={[textStyles.regular, styles.input, props.style]}
            />
            <Image 
            style={styles.icon}
            source={require('../../Assets/images/searchIcon.png')}
            />
        </View>
    )
}
export default HeaderSearchBar;