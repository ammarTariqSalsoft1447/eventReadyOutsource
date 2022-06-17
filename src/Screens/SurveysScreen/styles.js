import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FFF1C5',
        width:vw(90),
        marginBottom:vh(2),
        padding:vw(2),
        borderRadius:8,
        minHeight:vh(12)
    },
   
    des: {
        fontSize: vh(1.8),
        color:'#272727',
        marginTop:vw(2)
    },
})
export default styles;