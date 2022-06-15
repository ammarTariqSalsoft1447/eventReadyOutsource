import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    button:{
        width:vw(75),
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:vh(1.3),
        borderRadius:4
    },
    text:{
        fontSize:vh(1.8)
    }
})
export default styles;