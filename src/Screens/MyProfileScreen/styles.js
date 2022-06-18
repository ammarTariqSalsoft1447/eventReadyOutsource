import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    button: {
        marginBottom: vh(3)
    },
    changePassword:{
        marginBottom: vh(5),
        marginTop: vh(1.5),
    },
changePasswordText:{
    color:'#C8A12D'
}
})
export default styles;