import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
const ScheduleListScreen = props => {
    const renderItem = ({ index, item }) => {
        return (
            <TouchableOpacity onPress={()=>props.navigation.navigate('ScheduleDetailsScreen')} style={styles.button}>
                <View style={styles.contentContainer}>
                    <View style={styles.timeContainer}>
                        <RegularText style={styles.date}>
                            10/06-2022 - {' '}
                        </RegularText>
                        <RegularText style={styles.time}>
                            07 : 00 PM
                        </RegularText>
                    </View>
                    <SemiBoldText style={styles.heading}>
                        intro video - welcome to defse
                    </SemiBoldText>
                    <RegularText numberOfLines={1} style={styles.des}>
                        Lorem Ipsum is simply dummy text of the printing and ypese
                        tting industry. Lorem Ipsum has been industry's  pe and scram
                        bled ake a type specimen book.
                    </RegularText>
                </View>
                <MediumText style={styles.view}>
                    View
                </MediumText>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            contentContainerStyle={styles.scrollContent}
            style={styles.flatList}
            renderItem={renderItem}
            data={[1, 2, 4, 6, 2, 3, 4, 6, 3, 234, 3, 234, 52, 3]}
        />
    )
}
export default ScheduleListScreen