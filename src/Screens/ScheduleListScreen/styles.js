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
        backgroundColor: '#EEF0FF',
        width:vw(100),
        marginBottom:vh(2),
        padding:vw(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    timeContainer: {
        flexDirection: 'row',

    },
    date: {
        fontSize: vh(1.6),
        color: '#666666',
    },
    time: {
        fontSize: vh(1.6),
        color:'#C8A12D'
    },
    des: {
        fontSize: vh(1.6),
        color:'#666666',
        // marginTop:vw(2)
    },
    heading:{
        fontSize: vh(1.8),
        color:'#000000',
        marginVertical:vw(1)  
    },
    view:{
        color:'#C8A12D',
        fontSize:vh(1.8),
        width:vw(25),
        textAlign:'center',
    },
    contentContainer:{
        width:vw(75),
        paddingLeft:vw(5),

    }
})
export default styles;