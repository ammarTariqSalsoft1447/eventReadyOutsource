import React from "react";
import { WebView } from 'react-native-webview';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { MediumText, RegularText, SemiBoldText } from "../../Components/TextWrappers";
import MainButton from "../../Components/MainButton";
const SponsorDetailsScreen = props => {
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
                source={require('../../Assets/images/sampleSponsorBannner.png')}
            />
            <View style={styles.row}>
                {renderInfo('Sponsors Of The Wednesday Hours Of "Good Heer" Reception', false, false)}
            </View>
            <View style={styles.row}>
                <Image
                    style={styles.icon}
                    source={require('../../Assets/images/goldAttachment.png')}
                />
                <View style={styles.infoContainer}>
                    <SemiBoldText style={[styles.title,styles.hyperlink]}>
                        https://www.lockhedmartin.com/en-ca
                    </SemiBoldText>
                    <RegularText style={styles.details}>
                        Website
                    </RegularText>
                </View>
            </View>

            <MainButton
                onPress={() => props.navigation.navigate('AddNoteScreen')}
                text="Add Note"
                style={styles.button}
            />
        </ScrollView>
    )
}
export default SponsorDetailsScreen