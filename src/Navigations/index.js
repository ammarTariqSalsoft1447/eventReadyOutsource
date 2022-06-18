import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import MainStack from './MainStack'
const Navigations = (props) => {
    return (
        <NavigationContainer {...props}>
            <MainStack />
        </NavigationContainer>
    )
}
export default Navigations