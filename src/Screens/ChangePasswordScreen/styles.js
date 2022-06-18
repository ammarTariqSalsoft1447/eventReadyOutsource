import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center',
        // justifyContent: 'center',
        flex: 1
    },
    logo: {
        marginBottom: vh(8)
    },
    field: {
        marginTop : vh(4),

    },
    button: {
        marginTop: vh(3)
    },
    footerText: {
        fontSize: vh(1.4),
        color:'#141414'
    },
    link: {
        color:'#C8A12D',
        textDecorationLine:'underline'
    }
})
export default styles;