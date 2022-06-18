import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {},
    scrollContent: {
        alignItems: 'center'
    },
    banner: {
        width: vw(100),
        resizeMode: 'cover'
    },
    row: {
        width: vw(90),
        borderBottomWidth: 2,
        borderBottomColor: '#EBEBEC',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:vh(2)
    },
    rowHiddenBorder: {
        borderBottomWidth: 0
    },
    icon: {
        height:vw(8),
        width:vw(8),
        resizeMode:'contain',
        marginHorizontal:vw(3)
    },
    infoContainer: {},
    title: {
        fontSize:vh(2),
        color:'#000000'
    },
    details: {
        fontSize:vh(1.6),
        color:'#666666'
    },
    button:{
        marginTop:vh(2)
    }
})
export default styles;