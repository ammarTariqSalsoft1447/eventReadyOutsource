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
    button: {
        flexDirection:'row',
        width:vw(90),
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        paddingBottom:vh(2),
        marginTop:vh(2),
        borderBottomColor:'#EBEBEC'
    },
    nameContainer: {},
    name: {
        color:'#000000',
        fontSize:vh(1.8)
    },
    info: {
        fontSize:vh(1.6),
        color:'#666666'
    },
    rightContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon: {
        height:vw(4),
        width:vw(4),
        resizeMode:'contain',
        marginRight:vw(3)
    },
    view: {
        color:'#C8A12D'
    },
})
export default styles;