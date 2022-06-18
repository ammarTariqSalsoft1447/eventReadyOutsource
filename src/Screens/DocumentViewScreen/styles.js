import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center'
    },
    info: {
        fontSize:vh(1.6),
        color:'#666666',
        padding:vw(5)
    },
})
export default styles;