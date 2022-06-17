import React from "react";
import { WebView } from 'react-native-webview';
import { Image } from "react-native";
import styles from "./styles";
const VenueMapScreen = props => {
    return (
        <Image
            source={require('../../Assets/images/sampleVenueMap.png')}
            style={{ flex: 1 }}
        />
    )
    // return (
    //     <WebView 
    //     // source={require('../../Assets/images/sampleVenueMap.png')}
    //     source={{ html: '<img src="../../Assets/images/sampleVenueMap.png" />' }}
    //     />
    // )
    // return (
    //     <WebbV
    // )
}
export default VenueMapScreen