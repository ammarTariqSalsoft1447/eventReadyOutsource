import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import 'react-native-gesture-handler'
import AuthStack from './AuthStack'
const Navigations = (props) => {
    return (
        <NavigationContainer {...props}>
            <AuthStack />
        </NavigationContainer>
    )
}
export default Navigations