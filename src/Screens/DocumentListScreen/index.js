import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import MapView from 'react-native-maps'
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import HeaderSearchBar from "../../Components/HeaderSearchBar";
const DocumentListScreen = props => {
    const isMine = props.route.name.includes('My')
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('DocumentViewScreen')} style={styles.button}>
                <View style={styles.nameContainer}>
                    <SemiBoldText style={styles.name}>
                        (L) 2021 Legislature
                    </SemiBoldText>
                    <RegularText style={styles.info}>
                        1/3
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
            ListHeaderComponent={<HeaderSearchBar placeholder='Search' />}
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            data={[1, 2, 4, 5, 7, 3, 4, 6, 3, 4, 6]}
            renderItem={renderItem}
        />
    )
}
export default DocumentListScreen