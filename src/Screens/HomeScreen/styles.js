import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center'
    },
    bannerImage: {
        width: vw(95),
        height: vh(7),
        resizeMode: 'contain',
        marginVertical: vh(2)
    },
    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#252120',
        width: vw(100),
        paddingHorizontal: vw(2)
    },
    topButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: vw(2),
        height: vw(20),

    },
    topButtonIcon: {
        width: vw(8),
        height: vw(8),
        marginBottom: vw(2),
        resizeMode: 'contain'
    },
    topButtonLabel: {
        fontSize: vh(1.4),
        color: '#FFFFFF'
    },
    mainButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: vw(1)
    },
    mainButton: {
        backgroundColor: '#EEF2FF',
        width: vw(32),
        height: vw(18),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: vw(1),
    },
    mainButtonIcon: {
        width: vw(8),
        height: vw(8),
        resizeMode: 'contain'
    },
    mainButtonLabel: {
        color: '#666666',
        fontSize: vw(3),
        marginTop: vw(1)
    },
    venues: {
        alignItems: 'center',
    },
    venueMapsHeading: {
        marginVertical: vh(1),
        fontSize: vh(2.5),
        color: '#000000'
    },
    mapButton: {
        marginBottom: vh(1)
    },
    searchBarContainer: {
        backgroundColor: '#EEF2FF',
        width: vw(90),
        borderRadius: 5,
        paddingHorizontal: vw(4),
        marginBottom: vh(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...Platform.select({
            ios: {
                paddingVertical: vh(1)
            }
        }),
        marginTop:vh(2)
    },
    searchField: {
        width: vw(78),
    },
    searchIcon: { width: vw(6), height: vw(6), resizeMode: 'contain' }
})
export default styles;