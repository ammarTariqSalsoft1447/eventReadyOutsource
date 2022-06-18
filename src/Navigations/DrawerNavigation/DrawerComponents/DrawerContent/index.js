import React, { useEffect, useRef } from 'react';

import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';
import { RegularText } from '../../../../Components/TextWrappers';
import styles from './styles';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const DrawerContent = props => {
  const renderDrawerItem = (label, icon, onPress = () => { }) => {
    return (
      <AnimatedPressable style={styles.drawerButton}>
        <Image source={icon} style={styles.drawerIcon}/>
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
        {renderDrawerItem('dashboard', require('../../../../Assets/images/dashboardIconn.png'))}
        {renderDrawerItem('twitter', require('../../../../Assets/images/twitterIcon.png'))}
        {renderDrawerItem('my profile', require('../../../../Assets/images/myProfileDrawer.png'))}
        {renderDrawerItem('contact us', require('../../../../Assets/images/contactUs.png'))}
        {renderDrawerItem('logout', require('../../../../Assets/images/logout.png'))}
      </View>
    </Animated.View>
  );
};
export default DrawerContent;
