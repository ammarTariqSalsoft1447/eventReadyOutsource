import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center',
        flex: 1
    },
    title: {
        width: vw(85),
        fontSize: vh(2),
        color: '#000000',
        marginTop: vh(3)
    },
    details: {
        width: vw(85),
        fontSize: vh(1.8),

        color: '#666666',
        marginTop:vh(1)

    }
})
export default styles;