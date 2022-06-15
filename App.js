import React from "react";
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native'
import Navigations from "./src/Navigations";
const App = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
      <Navigations />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  }
})
export default App;