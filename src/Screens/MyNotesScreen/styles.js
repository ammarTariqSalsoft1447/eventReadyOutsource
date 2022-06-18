import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {

    },
    headingContainer:{
        borderBottomColor:'#EBEBEC',
        borderBottomWidth:1,
        width:vw(85),
        paddingBottom:vh(1),
        marginTop:vh(2)
    },
    heading:{
        fontSize:vh(2),
        color:'#000',
        textTransform:'uppercase'
    },
    scrollContent: {
        alignItems: 'center'
    },
    itemContainer: {
        borderBottomColor:'#EBEBEC',
        borderBottomWidth:1,
        width:vw(85),
        paddingBottom:vh(3),
        marginTop:vh(2)
    },
    itemRow: {
        flexDirection:'row',
        marginBottom:vw(1)
    },
    title: {
        color:'#666666',
        fontSize:vh(1.8)
    },
    detail: {
        color:'#000',
        fontSize:vh(1.8),
        marginLeft:vw(2)
    },
    dateTime: {
        color:'#666666',
        fontSize:vh(1.6)
    },
    button:{
        marginVertical:vh(3)
    }
})
export default styles;