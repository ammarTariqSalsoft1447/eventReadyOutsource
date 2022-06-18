import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const ExhibitorDetailsScreen = props => {
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
    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            <Image
                style={styles.banner}
                source={require('../../Assets/images/exhibitorsDetailsBanner.png')}
            />

            <View style={styles.row}>
                {renderInfo('Exhibitors Details', false, false)}
            </View>
            <View style={styles.row}>
                {renderInfo(false, `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been industry's 
standard dummy text ever since the 1500s, when an u
nknown printer took a galley of type and scrambled it to 
make a type specimen book. \n
Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been industry's 
ype and scrambled ake a type specimen book.
`, false)}
            </View>
            <View style={styles.row}>
                {renderInfo('Adrienne Corning', 'Exhibitor Contact', require('../../Assets/images/goldEmail.png'))}
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require('../../Assets/images/goldPeople.png')}
                />
                <View style={styles.infoContainer}>
                    <SemiBoldText style={[styles.title, { color: '#3470E8' }]}>
                        www.abc-3434/canada
                    </SemiBoldText>
                    <RegularText style={styles.details}>
                        company website
                    </RegularText>
                </View>
            </View>

            <View style={styles.row}>
                {renderInfo('M112', 'Booth Number', require('../../Assets/images/goldMap.png'))}
            </View>
            <MainButton
                onPress={() => props.navigation.navigate('AddNoteScreen')}
                text="Add Note"
                style={styles.button}
            />
        </ScrollView>
    )
}
export default ExhibitorDetailsScreen