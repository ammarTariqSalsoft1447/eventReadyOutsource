import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const MyNotesScreen = props => {
    renderInfo = (title, details, icon) => {
        return (
            <>
                {icon && <Image
                    style={styles.icon}
                    source={icon}
                />}
                <View style={styles.infoContainer}>
                    {title && <SemiBoldText style={styles.title}>
                        {title}
                    </SemiBoldText>}
                    {details && <RegularText style={styles.details}>
                        {details}
                    </RegularText>}
                </View>
            </>
        )
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemRow}>
                    <MediumText style={styles.title}>
                        Category:
                    </MediumText>
                    <SemiBoldText style={styles.detail}>
                        Category
                    </SemiBoldText>
                </View>
                <View style={styles.itemRow}>
                    <MediumText style={styles.title}>
                        Session:
                    </MediumText>
                    <SemiBoldText style={styles.detail}>
                        Session 01: this is a notes test
                    </SemiBoldText>
                </View>
                <RegularText style={styles.dateTime}>
                    08-13-2022 - 05:00 PM
                </RegularText>
            </View>
        )
    }
    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.headingContainer}>
                    <SemiBoldText style={styles.heading}>
                        *swipe left on the note to edit/delete.
                    </SemiBoldText>
                </View>
            }
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            data={[1, 2, 3, 4]}
            renderItem={renderItem}
            ListFooterComponent={
                <MainButton
                    text='Email Me My Notes'
                    style={styles.button}
                />
            }
        />
    )
}
export default MyNotesScreen