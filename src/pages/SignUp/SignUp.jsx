import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
import NavLogo from '../components/NavLogo/NavLogo';
// import firebase from '@react-native-firebase/app';
// import {
//   getAuth,
//   signInWithPhoneNumber,
//   //   RecaptchaVerifier,
// } from '@firebase/auth';

import {fb} from '../../utils/firebase';
import firestore from '@react-native-firebase/firestore';
// import firestore from '../../utils/firebase';
// import userInfo from '../../utils/redux/userSlice';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import firebase from '@react-native-firebase/app';
// import {signInWithPhoneNumber, getAuth} from '@firebase/auth';
// import reactDom from 'react-dom';

const SignUp = ({navigation}) => {
  const addPhone = () => {
    const userDocument = firestore().collection('Users').get();
    console.log('====================================');
    console.log(userDocument);
    console.log('====================================');

    // try {
    //   const docRef = () => {
    //     addDoc(collection(db, 'Users'), {
    //       firstName: '',
    //       lastName: '',
    //       phone: '',
    //     });
    //   };
    //   navigation.navigate('verification', docRef.id);
    // } catch (e) {
    //   alert('error phone number', e);
    // }
  };
  // const userDocument = firestore()
  //   .collection('Users')
  //   .doc('XZvduM27jur6okisEsu9');
  // firestore()
  //   .collection('Users')
  //   .doc('XZvduM27jur6okisEsu9')
  //   .set({
  //     firstName: '',
  //     lasttName: '',
  //     phone: '',
  //   })
  //   .then(() => {
  //     navigation.navigate('verification');
  //   });

  //---------------------------------------
  // userInfo = {
  //   // firstName: '',
  //   // lastNmae: '',
  //   phone: '',
  //   // password: '',
  // };
  // const [phone, setPhone] = useState('');
  // const userInfo = state => state.userInfo.value;
  // // const dispatch = useDispatch();

  // const addPhone = () => {
  //   if (phone && phone.length > 10) {
  //     firestore()
  //       .collection('Users')
  //       .doc('XZvduM27jur6okisEsu9')
  //       .add({
  //         // firstName: userInfo.firstName,
  //         // lastName: userInfo.lastName,
  //         phone: userInfo.phone,
  //       })
  //       .then(() => {
  //         // console.log('User added!');
  //         navigation.navigate('verification');
  //       });
  //   } else {
  //     alert('please enter your phone number');
  //   }
  // };
  // ----------------------------------------------------
  // const userCollecttionRef = firestore().collection('users');
  // const addUser = () => {
  //   userCollecttionRef.doc('XZvduM27jur6okisEsu9').add({
  //     firstName: 'Aya',
  //     lastName: 'Sherif',
  //     password: 'hcr648qt4ycf34cfgberuwtrwc46rw46782t5624546tr8',
  //     phoneNumber: '01234567890',
  //   });
  // };
  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('Users')
  //     .doc(XZvduM27jur6okisEsu9)
  //     .onSnapshot(documentSnapshot => {
  //       // console.log('User data: ', documentSnapshot.data());
  //       navigation.navigate('verification', documentSnapshot.data());
  //     });
  //   return () => subscriber();
  // }, [XZvduM27jur6okisEsu9]);
  //--------------------------------------------------------------------------------
  //     const user = await firestore().collection('users').doc('XZvduM27jur6okisEsu9').get();

  //   let createUser = async (phoneNumber) => {
  //     await firebase.auth().signInWithPhoneNumber(phoneNumber)
  //         .then(() => {
  //             firebase.auth().currentUser.sendEmailVerification({
  //                 handleCodeInApp: true,
  //                 url: 'https://hpom-ca649.firebaseapp.com',
  //             }).then(() => { alert({ alertVerification })
  //                 }).catch((error) => { alert(error.message) })
  //                 .then(() => {
  //                      addDoc(collection(db,'users'), {
  //                           name: {name},
  //                           phoneNumber: {phoneNumber},

  //                         })
  //                 }).catch((error) => { alert(error.message);console.log(error.message) })
  //                 navigation.navigate('verification')
  //         })
  // }
  //firestore------------------------------
  // const userDocument = firestore()
  //   .collection('Users')
  //   .doc('XZvduM27jur6okisEsu9');

  //firebase-login----------------------
  // const auth = getAuth();
  // const phoneNumber = getPhoneNumberFromUserInput();
  // const appVerifier = window.recaptchaVerifier;

  // const handleLogin = () => {
  //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //     .then(confirmationResult => {
  //       window.confirmationResult = confirmationResult;
  //       navigation.navigate('verification');
  //     })
  //     .catch(error => {
  //       message(error);
  //     });
  // };
  //   //----------------------------------------------------
  // const [confirm, setConfirm] = useState(null);
  // async function signIn(phoneNumber) {
  //     try {
  //       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //       setConfirm(confirmation);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };

  //---------------------

  // function PhoneSignIn() {
  //     // If null, no SMS has been sent
  //     const [confirm, setConfirm] = useState(null);

  //     // Handle the button press
  //     async function signInWithPhoneNumber(phoneNumber) {
  //       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //       setConfirm(confirmation);
  //     }

  //     if (!confirm) {
  //       return (
  //        navigation.navigate('verification')
  //       );
  //     }

  //   }

  //--------------------------------
  //     const [number, setNumber]= useState('');
  //    const handleSignup = ()=>{
  //     createUserWithEmailAndPassword(auth,number)
  //     .then((userCredential)=>{
  //         const user = userCredential.user;
  //         console.log(user)
  //         navigation.navigate('verification')

  //     })
  //     .catch((error)=>{
  //         const errorCode = error.code;
  //         alert(errorCode);
  //     })
  //    }
  //-----------------------------------------------
  // function PhoneSignIn() {
  // If null, no SMS has been sent
  // const [confirm, setConfirm] = useState(null);

  // const [code, setCode] = useState('');

  // Handle the button press
  // async function signInWithPhoneNumber(phoneNumber) {
  //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  // }

  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }

  // if (!confirm) {
  //   return (
  //     <TouchableWithoutFeedback
  //       onPress={() => signInWithPhoneNumber('+56156353163')}
  //      style={styles.signUp}>
  //       <Text style={{color:'rgba(246, 167, 33, 1)', textDecorationLine:'underline'}}>Sign Up</Text>
  //      </TouchableWithoutFeedback>
  //   );
  // }

  // return (
  //   <>
  //     <TextInput value={code} onChangeText={text => setCode(text)} />
  //     <Button title="Confirm Code" onPress={() => confirmCode()} />
  //   </>
  // );
  //   }

  //     const [number, setNumber]= useState('');
  //   const [confirm, setConfirm]= useState(null);

  //   const GetOTP = async () => {
  //     const confirmation = await auth().signInWithPhoneNumber(number);
  //     if (confirmation){
  //       setConfirm(confirmation);
  //       navigation.navigate('verification',{'confirm':confirmation})
  //     }
  //     else(error)
  //       alert(error);
  //   }

  //------------------------------------------------
  // ----------------------------------------------
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const GetOTP = () => {
  //   if (phoneNumber && phoneNumber.length > 9) {
  //     navigation.navigate('verification', {phoneNumber});
  //   } else alert('please enter 10 digit phone number');
  // };

  //---------------------------------------------------
  // const [state, setstate] = useState('number');

  //  // Handle the button press
  //  const signInWithPhoneNumber=(phoneNumber)=> {
  //     const confirmation =  auth().signInWithPhoneNumber(phoneNumber);
  //     setConfirm(confirmation);
  //   }

  // async function confirmCode() {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }

  // auth().signInWithPhoneNumber('01156353163');
  // const [confirm, setConfirm] = useState(null);
  // const signIn=(phoneNumber)=> {
  //     try {
  //       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //       setConfirm(confirmation);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }

  return (
    <View style={styles.signContainer}>
      <View>
        <NavLogo />
        <Text style={styles.mobileNumber}>Mobile number</Text>
        <Text style={styles.enterMobile}>
          Enter the mobile number registred in the bank
        </Text>
        <TextInput
          style={{
            width: '100%',
            height: 65,
            marginTop: 20,
            alignSelf: 'center',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#007236',
          }}
          //    onChange={(number)=> setstate()}
          placeholder={'Mobile number'}
          placeholderTextColor={'#007236'}
          keyboardType="numeric"
          // value={phoneNumber}
          // onChangeText={text => setPhoneNumber(text)}
          // onChangeText={() => setPhone()}
        />
      </View>

      <View style={styles.nextFooter}>
        <TouchableOpacity
          // onPress={() => navigation.push('verification')}
          // onPress={this.signInWithPhoneNumber}
          //   onPress={() => handleLogin()}
          // onPress={() => signInWithPhoneNumber('01156353163')}
          onPress={addPhone}
          style={styles.nextButton}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Next
          </Text>
        </TouchableOpacity>
        <Text style={styles.textNext}>
          By signing up, you agree to our
          <Text style={{color: 'rgba(28, 36, 55, 1)'}}>Terms of Service </Text>
          and a knowledge that you have read our
          <Text style={{color: 'rgba(28, 36, 55, 1)'}}> Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  signContainer: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    padding: 26,
    justifyContent: 'space-between',
  },
  mobileNumber: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    color: 'black',
  },
  enterMobile: {
    color: 'rgba(183, 183, 183, 1)',
    fontSize: 16,
    fontWeight: '400',
  },
  nextButton: {
    padding: 10,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    height: 50,
    borderRadius: 10,
    width: '100%',
  },
  nextFooter: {
    justifyContent: 'center',
  },
  textNext: {
    color: 'rgba(128, 128, 128, 1)',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 20,
  },
});
