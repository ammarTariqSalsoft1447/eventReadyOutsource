import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#C8A12D',
        width:vw(100),
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:vh(2),
        flexDirection:'row',
    },
    input:{
        backgroundColor:'#D5B041',
        color:'#000',
        padding:0,
        paddingVertical:vh(0.2),
        paddingBottom:vh(0.4),
        margin:0,
        fontSize:vh(1.8),
        width:vw(80),
        paddingHorizontal:vw(2),
        paddingRight:vw(6),
        borderRadius:5
    },
    icon:{
        height:vh(1.8),
        width:vh(1.8),
        tintColor:'#000',
        marginLeft:-vh(1.8)-vw(2),
    }
})
export default styles;