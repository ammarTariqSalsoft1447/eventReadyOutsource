import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import { textStyles } from "../Components/TextWrappers";
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";
import MyProfileScreen from "../Screens/MyProfileScreen";
import PrivacyPolicyScreen from "../Screens/PrivacyPolicyScreen";
import ViewMyProfileScreen from "../Screens/ViewMyProfileScreen";
import { headerTitle, renderDrawerIcon } from "./DashboardStack";
import styles from "./styles";
const Main = createStackNavigator()
const ProfileStack = () => {
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
                name="MyProfileScreen"
                component={MyProfileScreen}
            />
            <Main.Screen
                name="ViewMyProfileScreen"
                component={ViewMyProfileScreen}
            />
            <Main.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
            />
            <Main.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
            />
            <Main.Screen
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}

            />
        </Main.Navigator>
    )
}
export default ProfileStack