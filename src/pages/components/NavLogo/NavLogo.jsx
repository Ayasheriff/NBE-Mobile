import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
const NavLogo = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBNE}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/images/backButton.png')} />
            </TouchableOpacity>
            <Image source={require('../../../assets/images/logoDark.png')} />
        </View>
    );
};
export default NavLogo;

const styles = StyleSheet.create({
    navBNE: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})