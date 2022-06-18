import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modal: {
        flex: 1
    },
    blur: {
        flex: 1
    },
    content: {
        width: vw(100),
        backgroundColor: '#C8A12D',
        borderTopLeftRadius: vw(10),
        borderTopRightRadius: vw(10),
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
    },
    bar: {
        width: vw(20),
        height: vh(1),
        borderRadius: vh(1),
        backgroundColor: '#000000',
        marginTop: vh(2),
        marginBottom: vh(4),
    },
    thumbsUp: {
        width: vw(20),
        height: vw(20),
        resizeMode: 'contain'
    },
    message: {
        fontSize: vh(2),
        color: '#000000',
        marginVertical:vh(3)
    },
    button:{
        width:vw(30),
        marginBottom:vh(8)
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    noButton:{
        borderRadius:2,
        borderWidth:2,
        marginLeft:vw(2),
        borderColor:'#252120'
    }

})
export default styles;