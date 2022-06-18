import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import { textStyles } from "../Components/TextWrappers";
import ContactUsScreen from "../Screens/ContactUsScreen";
import { headerTitle, renderDrawerIcon } from "./DashboardStack";
import styles from "./styles";
const Main = createStackNavigator()
const ContactStack = () => {
    return (
        <Main.Navigator
            screenOptions={props => {
                return {
                    headerTitleAlign: 'center',
                    headerTitleStyle: [textStyles.regular, styles.titleStyle],
                    headerStyle: styles.headerStyle,
                    headerTitle: headerTitle[props.route.name] ? headerTitle[props.route.name] : '',
                    headerBackImage: () => <Image style={styles.leftIcon} source={require('../Assets/images/backIcon.png')} />
                }
            }}
        >
            <Main.Screen
                options={{
                    headerLeft: renderDrawerIcon
                }}
                component={ContactUsScreen} name='ContactUsScreen' />
        </Main.Navigator>
    )
}
export default ContactStack