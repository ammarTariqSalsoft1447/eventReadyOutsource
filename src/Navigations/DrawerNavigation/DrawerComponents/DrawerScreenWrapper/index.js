
import React, { useRef, useState } from 'react'
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { vw } from '../../../../Utils/unitConversion';
import styles from './styles';

const DrawerScreenWrapper = props => {
    const progress = useDrawerProgress()
    const animatedStyles = useAnimatedStyle(() => {
        const scale = interpolate(progress.value, [0, 1], [1, 0.8], Extrapolate.CLAMP);
        const borderRadius = interpolate(progress.value, [0, 1], [0, 20], Extrapolate.CLAMP);
        return {
            borderRadius: borderRadius,
            transform: [{ scale }]
        };
    });
    return (
        <Animated.View style={[styles.container, animatedStyles]}>
            {props.children}
        </Animated.View>
    )
}
export default DrawerScreenWrapper;