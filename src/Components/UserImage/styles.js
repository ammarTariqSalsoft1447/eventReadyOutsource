import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    logo: {
        height: vw(25),
        width: vw(25),
        resizeMode: 'cover',
        borderRadius: vh(12.5),
    },
    cameraButton: {
        height: vh(4),
        width: vh(4),
        borderRadius: vh(2),
        backgroundColor: '#C8A12D',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-vh(3),
        marginLeft:vh(8),
    },
    camera: {
        height: vh(2),
        width: vh(2),
        resizeMode:'contain'
    }
})
export default styles;