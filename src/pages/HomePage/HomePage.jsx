import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PeopleCard from './peopleCard';

const Homepage = ({route, navigation}) => {
  // const { phoneNumber } = route.params;
  return (
    <View style={styles.homeContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 26,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.push()}>
            <Image
              style={{width: 25, height: 25, marginTop: 7}}
              source={require('../../assets/images/threeLinesDark.png')}
            />
          </TouchableOpacity>
          <Image
            style={{marginLeft: 10, marginRight: 10}}
            source={require('../../assets/images/man1.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <Text>Good Morning</Text>
            {/* <Text>{phoneNumber}</Text> */}
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/images/bell.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <PeopleCard />
      </View>
      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.icon}>
          <Image
            style={{tintColor: 'rgba(183, 183, 183, 1)'}}
            source={require('../../assets/images/home.png')}
          />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Image source={require('../../assets/images/text.png')} />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Transfer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Image
            style={{marginLeft: 10}}
            source={require('../../assets/images/users.png')}
          />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Beneficiaries
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('map')}
          style={styles.icon}>
          <Image source={require('../../assets/images/location.png')} />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            ATM's
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Image source={require('../../assets/images/hands.png')} />
          <Text
            style={{
              color: 'rgba(183, 183, 183, 1)',
              fontSize: 10,
              textAlign: 'center',
              paddingBottom: 2,
            }}>
            Air Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Homepage;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    overflow: 'scroll',
  },
  footerIcons: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    position: 'relative',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    backgroundColor: 'rgba(241, 243, 251, 1)',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
  },
});
