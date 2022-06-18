import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        alignItems: 'center'
    },
    bannerContainer: {
        width: vw(100),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: vh(3.5)
        // height:vh(10),
    },
    banner: {
        resizeMode: 'cover'
    },
    speaker: {
        height: vw(15),
        width: vw(15),
        borderRadius: vw(7.5)
    },
    speakerName: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: vh(1.8),
        marginTop: vh(0.5)

    },
    about: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: vh(1.6),
        marginTop: vh(0.5)

    },
    detailsContainer: {
        width: vw(90),
        marginVertical: vh(2),
        paddingBottom: vh(2),
        borderBottomColor: '#EBEBEC',
        borderBottomWidth: 1
    },
    details: {
        color: '#666666',
        fontSize: vh(1.6),
        lineHeight: vh(2.2)
    },
    infoContainer: {
        width: vw(90),
    },
    infoName: {
        color: '#000',
        fontSize:vh(2),
        textTransform:'uppercase',
        marginBottom:vh(2)
    },
    infoTime: {
        color: '#666666'
    },
    infoDetails: {
        color: '#000',
        fontSize:vh(2),
        textTransform:'uppercase',
        marginVertical:vh(0.5)


    },
    code: {
        color: '#666666'
    },

})
export default styles;