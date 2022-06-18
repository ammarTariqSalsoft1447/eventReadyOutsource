import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/unitConversion";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    field: {
        marginVertical:vh(3)
    },
    button: {
        marginVertical: vh(1)
    }
})
export default styles;