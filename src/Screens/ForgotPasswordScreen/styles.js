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
    logo: {
    },
    heading:{
        fontSize: vh(2.5),
        marginVertical: vh(3)

    },
    field: {
        marginBottom: vh(3)
    },
    button: {
        marginBottom: vh(2)
    },
    footerText: {
        fontSize: vh(1.4),
        color:'#141414'
    },
    link: {
        color:'#3470E8',
        textDecorationLine:'underline',
        marginTop:vh(2)
    }
})
export default styles;