import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "../Utils/unitConversion";

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: vh(2.5)
    },
    headerStyle: {
        backgroundColor: '#C8A12D',
        elevation: 0,
        borderBottomWidth:0,
        shadowOpacity: 0, // remove shadow on iOS

    },
    leftIcon: {
        height: vh(2.5),
        width: vh(2.5),
        resizeMode: 'contain',
        ...Platform.select({
            ios:{
                marginLeft: vw(4)
            }
        })
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