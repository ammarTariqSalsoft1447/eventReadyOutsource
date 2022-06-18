import { StyleSheet } from "react-native";
import { vh, vw } from "../Utils/unitConversion";

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: vh(2.5)
    },
    headerStyle: {
        backgroundColor: '#C8A12D',
        elevation:0
    },
    leftIcon: {
        height: vh(2.5),
        width: vh(2.5),
        resizeMode: 'contain'
    },
    drawerIcon: {
        marginLeft: vw(4)
    },
    right: {
        marginLeft: 0,
        marginRight: vw(4)
    }
})
export default styles