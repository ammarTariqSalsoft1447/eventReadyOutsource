import { Dimensions } from "react-native";

export const vh = (v) => {
    return v * 0.01 * Dimensions.get('window').height;
}
export const vw = (v) => {
    return v * 0.01 * Dimensions.get('window').width;
}