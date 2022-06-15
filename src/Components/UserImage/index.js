import React from "react";
import {
    Image, TouchableOpacity
} from 'react-native'
import styles from "./styles";
const UserImage = (props) => {
    return (
        <>
            <Image
                source={require('../../Assets/images/userPlaceholder.png')}
                {...props}
                style={[styles.logo, props.style]}
            />
            {
                props.showCamera && <TouchableOpacity style={styles.cameraButton}>
                    <Image
                        style={styles.camera}
                        source={require('../../Assets/images/camera.png')}
                    />
                </TouchableOpacity>
            }
        </>
    )
}
export default UserImage;