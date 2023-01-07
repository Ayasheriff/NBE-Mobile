import React from "react";
import {
    Image,
    View,
    StyleSheet,
} from 'react-native';
const NavLightLogo = () => {
    return (
        <View style={styles.navBNE}>
            <Image source={require('../../../assets/images/logoLight.png')} />
        </View>
    );
};
export default NavLightLogo;

const styles = StyleSheet.create({
    navBNE: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})