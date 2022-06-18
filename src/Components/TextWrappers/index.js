import React from "react";
import { StyleSheet, Text } from "react-native";
import fonts from "../../Assets/fonts";
import { vh } from "../../Utils/unitConversion";
const TextHOC = props => {
    return (
        <Text
        
            allowFontScaling={false}
            {...props}
            style={[textStyles.regular, props.style]}
        >
            {props.children}
        </Text>
    )
}

export const RegularText = props => {
    return (
        <TextHOC
            {...props}
            style={[textStyles.regular, props.style]}
        >
            {props.children}
        </TextHOC>
    )
}


export const SemiBoldText = props => {
    return (
        <TextHOC
            {...props}
            style={[textStyles.semiBold, props.style]}
        >
            {props.children}
        </TextHOC>
    )
}
export const MediumText = props => {
    return (
        <TextHOC
            {...props}
            style={[textStyles.medium, props.style]}
        >
            {props.children}
        </TextHOC>
    )
}



export const textStyles = StyleSheet.create({
    regular: {
        fontSize: vh(1.8),
        fontFamily:fonts.regular
    },
    semiBold:{
        fontSize: vh(1.8),
        fontFamily:fonts.semiBold
    },
    medium:{
        fontSize: vh(1.8),
        fontFamily:fonts.medium
    }
})
export default TextHOC;