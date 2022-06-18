import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
import HeaderSearchBar from "../../Components/HeaderSearchBar";
const AttendeesListScreen = props => {
    const renderItem = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => props.navigation.navigate('AttendeeDetailsScreen')}
                style={({ pressed }) => [
                    styles.buttonRow,
                    pressed && styles.buttonPressed
                ]}
            >
                <View>
                    <SemiBoldText style={styles.name}>
                        Naomai Alhadeff
                    </SemiBoldText>
                    <RegularText style={styles.type}>
                        Helena School
                    </RegularText>
                </View>
                <Image style={styles.icon} source={require('../../Assets/images/rightArrowGold.png')} />
            </Pressable>
        )
    }
    return (
        <FlatList
            ListHeaderComponent={<HeaderSearchBar placeholder='Search' />}
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            data={[1, 2, 3, 4]}
            renderItem={renderItem}
        />
    )
}
export default AttendeesListScreen