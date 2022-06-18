import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {},
    scrollContent: {
        alignItems: 'center'
    },
    banner: {
        width: vw(100),
        height:vh(12),
        resizeMode: 'cover'
    },
    row: {
        width: vw(90),
        borderBottomWidth: 2,
        borderBottomColor: '#EBEBEC',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:vh(3)
    },
    icon: {
        height:vw(8),
        width:vw(8),
        resizeMode:'contain',
    },
    title: {
        fontSize:vh(2),
        color:'#000000'
    },
    details: {
        fontSize:vh(1.6),
        color:'#666666'
    },
    button:{
        marginTop:vh(3)
    },
    hyperlink:{
        color:'#3470E8',
        textDecorationLine:'underline'
    },
    
})
export default styles;