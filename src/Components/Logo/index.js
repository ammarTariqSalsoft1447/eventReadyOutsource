import React from "react";
import {
    Image
} from 'react-native'
import styles from "./styles";
const Logo = (props) => {
    return (
        <Image
            source={require('../../Assets/images/logo.png')}
            {...props}
            style={[styles.logo, props.style]}
        />
    )
}
export default Logo;