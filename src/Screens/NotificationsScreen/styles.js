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
        flexDirection:'row'
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
        fontSize: vh(1.8),
        color:'#000000',
        marginTop:vw(2),
        paddingRight:vw(4)
    },
    bell:{
        width:vw(8),
        height:vw(8),
    }
})
export default styles;