import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import MapView from 'react-native-maps'
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
const ExhibitorsListScreen = props => {
    const isMine = props.route.name.includes('My')
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>props.navigation.navigate('ExhibitorDetailsScreen')} style={styles.button}>
                <View style={styles.nameContainer}>
                    <SemiBoldText style={styles.name}>
                    Big Sky School Potraits
                    </SemiBoldText>
                    <RegularText style={styles.info}>
                    Booth Number 10
                    </RegularText>
                </View>
                <View style={styles.rightContainer}>
                    <Image style={styles.icon} source={isMine ? require('../../Assets/images/heartFilled.png') : require('../../Assets/images/heartEmpty.png')} />
                    <MediumText style={styles.view}>
                        View
                    </MediumText>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            data={[1, 2, 4, 5, 7, 3, 4, 6, 3, 4, 6]}
            renderItem={renderItem}
        />
    )
}
export default ExhibitorsListScreen