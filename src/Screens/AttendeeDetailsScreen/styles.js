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
    content: {
        width:vw(90),
        marginTop:vw(5)
    },
    attendeeName: {
        color:'#000000',
        fontSize:vh(2),
    },
    company: {
        color:'#666666',
        fontSize:vh(1.8),
        marginBottom:vh(2)
    },
    title: {
        color:'#666666',
        fontSize:vh(1.8),
        marginBottom:vh(2)
    },
})
export default styles;