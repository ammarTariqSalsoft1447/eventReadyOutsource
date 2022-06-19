import React, { useEffect, useRef } from 'react';

import { Image, InteractionManager, Pressable, StatusBar, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';
import { RegularText } from '../../../../Components/TextWrappers';
import styles from './styles';
import ConfirmationPopup from '../../../../Components/ConfirmationPopup';
import SuccessPopup from '../../../../Components/SuccessPopup';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const DrawerContent = props => {
  const success = React.useRef(null);
  const logoutPopup = React.useRef(null);
  const handleLogout = () => {
    InteractionManager.runAfterInteractions(() => {
      if (success?.current) {
        success?.current?.open()
      }
    })
  }
  const requestLogout = () => {
    InteractionManager.runAfterInteractions(() => {
      if (logoutPopup?.current) {
        logoutPopup?.current?.open()
      }
    })
  }
  const renderDrawerItem = (label, icon, onPress = () => { }) => {
    const handleOnPress = () => {
      props.navigation.closeDrawer()
      if (onPress) {
        onPress()
      }
    }
    return (
      <AnimatedPressable onPress={handleOnPress} style={styles.drawerButton}>
        <Image source={icon} style={styles.drawerIcon} />
        <RegularText style={styles.drawerLabel}>
          {label}
        </RegularText>
      </AnimatedPressable>
    )
  }
  return (
    <Animated.View style={styles.container}>

      <Image
        style={styles.userPicture}
        source={require('../../../../Assets/images/userProfilePhotoDrawer.png')}
      />
      <RegularText style={styles.name}>
        JOY ROOT
      </RegularText>
      <View style={styles.drawerButtonContainer}>
        {renderDrawerItem('dashboard', require('../../../../Assets/images/dashboardIconn.png'), () => props.navigation.navigate('AnimatedDashboard'))}
        {renderDrawerItem('twitter', require('../../../../Assets/images/twitterIcon.png'))}
        {renderDrawerItem('my profile', require('../../../../Assets/images/myProfileDrawer.png'), () => props.navigation.navigate('AnimatedProfileStack'))}
        {/* {renderDrawerItem('contact us', require('../../../../Assets/images/contactUs.png'), () => props.navigation.navigate('AnimatedContactUs'))} */}
        {renderDrawerItem('logout', require('../../../../Assets/images/logout.png'), requestLogout)}
      </View>
      <ConfirmationPopup
        reference={logoutPopup}
        onYes={handleLogout}
        message={'Are you sure you want to logout?'}
      />
      <SuccessPopup
        reference={success}
        onClose={() => props.navigation.pop()}
      />
    </Animated.View>
  );
};
export default DrawerContent;
