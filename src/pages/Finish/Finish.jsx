import React from 'react';
import NavLightLogo from '../components/NavLogo/NavLightLogo';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const Finish = ({navigation}) => {
    return (
        <View style={{backgroundColor:'rgba(0, 114, 54, 1)',padding:26,width: '100%', height: '100%'}}>
            <View style={{alignItems:'flex-end'}}>
              <NavLightLogo/>
            </View>
            <Image style={{position:'absolute',top:60}} source={require('../../assets/images/manCard.png')}/>

          <View style={{flex:1,justifyContent:'space-between'}}>
                <View>
                      <Text style={styles.congText}>Congratulations</Text>
                      <Text style={styles.congWord}>You have successfully registered in NBE online banking service</Text>
                </View>
                
                <TouchableOpacity
                    onPress={() => navigation.push('home')}
                    style={styles.finishButton}
                >
                    <Text style={{color:'rgba(0, 114, 54, 1)',alignSelf: 'center',  fontSize: 16,fontWeight: '700',}}>Finish</Text>
                </TouchableOpacity> 
          </View>
        </View>
    );
};
export default Finish;

const styles = StyleSheet.create({
    congText: {
        color: 'white',
        fontSize:30,
        fontWeight: '700',
    },
    congWord: {
        color: 'rgba(247, 247, 247, 1)',
        fontSize:16,
        fontWeight: '400',
    },
    finishButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding:15,
    }
})