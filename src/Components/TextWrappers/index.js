import React from "react";
import { StyleSheet, Text } from "react-native";
import { vh } from "../../Utils/unitConversion";
const TextHOC = props => {
    return (
        <Text
            allowFontScaling={false}
            {...props}
            style={[styles.regular, props.style]}
        >
            {props.children}
        </Text>
    )
}

export const RegularText = props => {
    return (
        <TextHOC
            {...props}
            style={[styles.regular, props.style]}
        >
            {props.children}
        </TextHOC>
    )
}


const styles = StyleSheet.create({
    regular: {
        fontSize: vh(1.8)
    }
})
export default TextHOC;