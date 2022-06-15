import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    input:{
        color:'#000',
        padding:0,
        paddingVertical:vh(0.2),
        paddingBottom:vh(0.4),
        margin:0,
        fontSize:vh(1.6),
        width:vw(75),
        borderBottomWidth:1,
        borderBottomColor:'#DFDFDF'
    }
})
export default styles;