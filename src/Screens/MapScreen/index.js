import React from "react";
import { WebView } from 'react-native-webview';
import { Image, StyleSheet } from "react-native";
import styles from "./styles";
import MapView from 'react-native-maps' 
const MapScreen = props => {
    return (
        <MapView
       style={{...StyleSheet.absoluteFill}}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     ></MapView>
    )
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
export default MapScreen