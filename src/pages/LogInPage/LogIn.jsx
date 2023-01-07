// import {color} from '@rneui/base';
import React, {useState} from 'react';
// import FingerPrint from '../../utils/fingerprint/fingerprint';

import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
// import {
//   signInWithPhoneNumber,
//   getAuth,
//   createUserWithEmailAndPassword,
// } from '@firebase/auth';

// auth().signInWithEmailAndPassword('01156353163', '12345678');

const LogIn = ({navigation}) => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [password, setPassword] = useState('');
  // const auth = getAuth();

  // const enterPhone = () => {
  //   createUserWithEmailAndPassword(auth, firstName, lastName, phone)
  //     .then(userInfo => {
  //       // Signed in
  //       const user = userInfo.user;
  //       console.log(user);

  //       navigation.navigate('verification');
  //       // ...
  //     })
  //     .catch(error => {
  //       const errorCode = error.code;
  //       alert(errorCode, 'enter your phone number');

  //       // ..
  //     });
  // };
  //------------------------------
  // const signin = (email, password) => {
  //   try {
  //    auth().signInWithEmailAndPassword(email, password);
  //     navigation.navigate('home');
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  //fingerprint------------------------------------------------
  // componentDidMount = () => {
  //   if (requiresLegacyAuthentication()) {
  //     authLegacy();
  //   } else {
  //     authCurrent();
  //   }
  // };

  // componentWillUnmount = () => {
  //   FingerprintScanner.release();
  // };

  // requiresLegacyAuthentication = () => {
  //   return navigation.navigate('home');
  // };

  // authCurrent = () => {
  //   FingerprintScanner.authenticate({title: 'Log in with Biometrics'}).then(
  //     () => {
  //       this.props.onAuthenticate();
  //     },
  //   );
  // };

  // authLegacy = () => {
  //   FingerprintScanner.authenticate({
  //     onAttempt: this.handleAuthenticationAttemptedLegacy,
  //   })
  //     .then(() => {
  //       this.props.handlePopupDismissedLegacy();
  //       navigation.navigate('home');
  //     })
  //     .catch(error => {
  //       this.setState({
  //         errorMessageLegacy: error.message,
  //         biometricLegacy: error.biometric,
  //       });
  //       this.description.shake();
  //       return timer.setTimeout(
  //         'displayFingerPrintModal',
  //         () => this.showModal('fingerprint'),
  //         300,
  //       );
  //     });
  // };

  // handleAuthenticationAttemptedLegacy = error => {
  //   this.setState({errorMessageLegacy: error.message});
  //   this.description.shake();
  // };
  //-----------------------------------
  // const [number, setNumber]= useState('');
  // const [password, setPassword]= useState('');
  // const [confirm, setConfirm]= useState(null);

  // const handleSignin = async () => {
  //   const confirmation = await auth().signInWithPhoneNumber(number);
  //   if (confirmation){
  //     setConfirm(confirmation);
  //     navigation.navigate('home',{'confirm':confirm})
  //   }
  //   else(error)
  //     alert(error);
  // }

  // const [confirm, setConfirm] = React.useState(null);
  // const [code, setCode] = React.useState('');

  // const signInWithPhoneNumber = async (phoneNumber) => {
  //   const confirmation = await auth.signInWithPhoneNumber(phoneNumber);
  // };

  // const handlelogin = async () => {
  //   try {
  //     const isUserCreated = await auth().createUserWithEmailAndPassword(email,confirm);
  //     console.log(isUserCreated);
  //   }
  //   catch (err) {
  //     setMessage(err.message);
  //   }
  // };
  // const [language, setLanguage] = useState('eng');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/girl.png')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.5,
          position: 'absolute',
        }}
      />
      <View style={styles.logoShape}>
        <View style={styles.ARbutton}>
          <Text style={styles.ARtext}>AR</Text>
        </View>
        <View style={styles.logoText}>
          <ImageBackground
            style={styles.logo1}
            source={require('../../assets/images/Vector.png')}
          />
          <ImageBackground
            style={styles.logo2}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
      <Text style={styles.text}>Welcome to the National Bank Of Egypt</Text>

      <View>
        <TextInput
          style={{
            width: '90%',
            height: 65,
            paddingLeft: 10,
            marginBottom: 20,
            alignSelf: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
          }}
          placeholder={'@username'}
          placeholderTextColor={'white'}
          enablesReturnKeyAutomatically
          returnKeyType="next"
          keyboardType="numeric"
          autoFocus
          // value={phone}
          // onChangeText={value => setPhone(value)}
        />

        <TextInput
          style={{
            width: '90%',
            height: 65,
            paddingLeft: 10,
            marginBottom: 20,
            alignSelf: 'center',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
          }}
          placeholder={'🔒Password'}
          placeholderTextColor={'white'}
          keyboardType="numbers-and-punctuation"
          secureTextEntry={true}
          autoFocus
          // onChange={e => setPassword(e.target.value)}

          // value={password}
          // onChangeText={value => setPassword(value)}
        />
        {/* <Text style={{textAlign:'center', color:'white',fontSize:10}}>{message}</Text> */}
      </View>
      <View style={styles.checkboxContainer}>
        <View style={{flexDirection: 'row'}}>
          {/* <Checkbox color='white'  status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}/> */}
          <Text style={styles.labelCheck}>Rememer me</Text>
        </View>
        <Text style={styles.labelForgot}>Forgot password?</Text>
      </View>
      <View style={styles.logButton}>
        <TouchableOpacity
          style={styles.touchButton}
          onPress={() => navigation.navigate('home')}
          // onPress={() => enterPhone()}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onLongPress={FingerPrint}
        >
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/images/FingerPrint.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpText}>
        <Text style={{color: 'white'}}>Dont have an account?</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('signup')}
          style={styles.signUp}>
          <Text
            style={{
              color: 'rgba(246, 167, 33, 1)',
              textDecorationLine: 'underline',
            }}>
            Sign Up
          </Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.footer}>
        <Text style={{color: 'rgba(246, 167, 33, 1)', fontSize: 11}}>
          contact us - FAQs - Help
        </Text>
        <Text style={{color: 'white', fontSize: 11}}>
          Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
        </Text>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  text: {
    color: 'white',
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 40,
    fontWeight: '700',
  },
  logoText: {
    flexDirection: 'row',
  },
  logoShape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    flex: 1,
  },
  logo1: {
    width: 121,
    height: 40,
    marginLeft: 5,
  },
  logo2: {
    width: 33,
    height: 40,
    marginLeft: 5,
  },
  ARbutton: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  ARtext: {
    color: '#007236',
    fontWeight: '700',
    alignSelf: 'center',
    margin: 7,
    fontSize: 16,
  },
  logButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
    fontSize: 16,
  },
  touchButton: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
    borderRadius: 10,
    padding: 15,
    width: '80%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
  labelCheck: {
    color: 'white',
  },
  labelForgot: {
    color: 'white',
  },
  signUpText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    padding: 5,
  },
  // checkbox: {
  //   alignSelf: 'center',
  // },
});
