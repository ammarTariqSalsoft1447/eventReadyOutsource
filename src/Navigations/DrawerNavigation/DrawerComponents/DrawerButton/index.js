import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  StyleSheet,
  Touchable,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { RegularText } from '../../../../Components/TextWrappers';
const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);
const DrawerButton = props => {
  // const profile = useProfile();
  // const progress = useDrawerProgress();
  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-40 * vw * (props.index + 1), 0],
  // });
  // const animatedStyles = {
  //   transform: [{translateX}],
  // };

  return (
    <TouchableOpacity>
      <RegularText>
        {props.title}
      </RegularText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  
});
export default DrawerButton;
