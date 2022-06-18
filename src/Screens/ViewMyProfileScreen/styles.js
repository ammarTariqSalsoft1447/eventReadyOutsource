import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    button: {
        marginTop: vh(3)
    },
    footerText: {
        fontSize: vh(1.4),
        color: '#141414'
    },
    link: {
        color: '#C8A12D',
        textDecorationLine: 'underline'
    },
    infoContainer: {
        width: vw(80),
        marginTop: vh(3)
    },
    title: {
        color:'#000',
        textTransform:'uppercase',
        marginBottom:vh(0.5),
        fontSize:vh(2)
    },
    detail: {
        color:'#666666',
        marginBottom:vh(0.5),
        fontSize:vh(1.8)
    },
})
export default styles;