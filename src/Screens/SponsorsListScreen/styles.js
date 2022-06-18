import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex:1,
        backgroundColor:'white'
    },
    scrollContent: {
        alignItems: 'center'
    },
    buttonRow: {
        flexDirection:'row',
        width:vw(90),
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#EBEBEC',
        borderBottomWidth:1,
        paddingBottom:vh(2),
        marginTop:vh(2)
    },
    buttonPressed:{
        elevation:5,
        backgroundColor:'white',
        borderRadius:5
    },
    name: {
        color:'#000000',
        fontSize:vh(2),
    },
    type: {
        fontSize:vh(1.6),
        color:'#666666'
    },
    icon: {
        height:vw(4),
        width:vw(4),
        resizeMode:'contain'
    },
})
export default styles;