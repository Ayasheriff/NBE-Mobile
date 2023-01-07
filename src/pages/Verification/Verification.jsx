import React, {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import NavLogo from '../components/NavLogo/NavLogo';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Verification = ({route, navigation}) => {
  const {phoneNumber} = route.params;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // const [confirm,setConfirm] = useState('');
  // const [code,setCode] = useState('');
  // const handleVerify =(confirmation) =>{
  //     if(code && code.length == 1){
  //         navigation.navigate('createpw',{confirm});
  //     }
  //     else
  //     alert('please enter your verification code');
  // }
  //-----------------------------------------------
  // const [number, setNumber] = useState('');
  // const confirm = navigation.getparam('confirm');
  // const OtpVerify = async () =>{
  //     try {
  //         let data = await confirm.confirm(number);
  //         console.log('data',data)
  //         navigation.naviage('createpw')
  //     } catch (error) {
  //         alert('invalid code');
  //         ToastAndroid.show('invalid code',ToastAndroid.SHORT)
  //     }
  // }
  //--------------------------------------------------------
  // const [otpArray, setOtpArray]= useState(['','','']);
  // const [submittingOtp, setSubmittingOtp]= useState(true);
  // const [errorMessage, setErrorMessage]= useState('');
  // const [confirm, setConfirm]= useState(null);

  // const fisrtTextInputRef = useRef(null);
  // const secondTextInputRef = useRef(null);
  // const thirdTextInputRef = useRef(null);
  // const fourthTextInputRef = useRef(null);
  // const fifthTextInputRef = useRef(null);
  // const sixththTextInputRef = useRef(null);

  // const refCallback = textInputRef => node => {
  //     textInputRef.current = node ;
  // };

  // useEffect (() =>{
  //     signInWithPhoneNumber();
  // }, []);

  // async function signInWithPhoneNumber() {
  //  try {
  //    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //    alert(JSON.stringify(confirmation));
  //  } catch (error) {
  //     // alert(JSON.stringify(error));
  //     setConfirm(confirmation);
  //  }
  // }

  // async function confirmCode() {
  //     try{
  //  const code = otpArray.join("");
  //  const response = await confirm.confirm(code);
  // //  alert(JSON.stringify(response));
  // if (response){
  //     navigation.navigate('createpw')
  // }
  //     }
  //     catch(error){
  //         alert(JSON.stringify(error));
  //     }
  // //  alert(code)

  // }

  // const onOtpChange = index => {
  //     return value =>{
  //         if (isNaN(Number(value))) {
  //             return;
  //         }
  //     }
  // }
  return (
    <View style={styles.verContainer}>
      <View>
        <NavLogo />
        <Text style={styles.verificationText}>Verification</Text>
        <Text style={styles.enterMobile}>
          Enter 6 digit code we sent to {phoneNumber}
        </Text>
        <View style={styles.verCode}>
          <TextInput
            style={{
              width: '13%',
              height: 65,
              marginTop: 20,
              textAlign: 'center',
              alignSelf: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: '700',
            }}
            placeholderTextColor={'#007236'}
            keyboardType="numeric"
            textContentType="creditCardNumber"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            autoFocus
            maxLength={1}
            //  onChangeText={fisrtTextInputRef}

            // value={number}
            // onChangeText={(value)=> setNumber(value)}
            // value={code}
            // onChangeText={(value)=> setCode(value)}
          />
          <TextInput
            style={{
              width: '13%',
              height: 65,
              marginTop: 20,
              textAlign: 'center',
              alignSelf: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: '700',
            }}
            placeholderTextColor={'#007236'}
            keyboardType="numeric"
            textContentType="creditCardNumber"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            autoFocus
            maxLength={1}
            //  onChangeText={secondTextInputRef}

            // value={number}
            // onChangeText={(value)=> setNumber(value)}
            // value={code}
            // onChangeText={(value)=> setCode(value)}
          />
          <TextInput
            style={{
              width: '13%',
              height: 65,
              marginTop: 20,
              textAlign: 'center',
              alignSelf: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: '700',
            }}
            placeholderTextColor={'#007236'}
            keyboardType="numeric"
            textContentType="creditCardNumber"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            autoFocus
            maxLength={1}
            //  onChangeText={thirdTextInputRef}

            // value={number}
            // onChangeText={(value)=> setNumber(value)}
            // value={code}
            // onChangeText={(value)=> setCode(value)}
          />
          <TextInput
            style={{
              width: '13%',
              height: 65,
              marginTop: 20,
              textAlign: 'center',
              alignSelf: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: '700',
            }}
            placeholderTextColor={'#007236'}
            keyboardType="numeric"
            textContentType="creditCardNumber"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            autoFocus
            maxLength={1}
            //  onChangeText={fourthTextInputRef}

            // value={number}
            // onChangeText={(value)=> setNumber(value)}
            // value={code}
            // onChangeText={(value)=> setCode(value)}
          />

          <TextInput
            style={{
              width: '13%',
              height: 65,
              marginTop: 20,
              textAlign: 'center',
              alignSelf: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: '700',
            }}
            placeholderTextColor={'#007236'}
            keyboardType="numeric"
            textContentType="creditCardNumber"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            autoFocus
            maxLength={1}
            //  onChangeText={fifthTextInputRef}

            // value={number}
            // onChangeText={(value)=> setNumber(value)}
            // value={code}
            // onChangeText={(value)=> setCode(value)}
          />

          <TextInput
            style={{
              width: '13%',
              height: 65,
              marginTop: 20,
              textAlign: 'center',
              alignSelf: 'center',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: 10,
              fontSize: 24,
              fontWeight: '700',
            }}
            placeholderTextColor={'#007236'}
            keyboardType="numeric"
            textContentType="creditCardNumber"
            enablesReturnKeyAutomatically
            returnKeyType="send"
            autoFocus
            maxLength={1}
            // onChangeText={sixththTextInputRef}

            // value={number}
            // onChangeText={(value)=> setNumber(value)}
            // value={code}
            // onChangeText={(value)=> setCode(value)}
          />
        </View>
        <Text
          style={{
            color: 'rgba(183, 183, 183, 1)',
            fontSize: 16,
            fontWeight: '400',
          }}>
          Didn’t receive the code?
        </Text>
        <Text
          style={{
            color: 'rgba(28, 36, 55, 1)',
            fontSize: 16,
            fontWeight: '400',
          }}>
          Request new one in {counter}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          // onPress={OtpVerify}
          onPress={() => navigation.navigate('createpw')}
          style={styles.nextButton}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Verification;

const styles = StyleSheet.create({
  verContainer: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    padding: 26,
    justifyContent: 'space-between',
  },
  verificationText: {
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
  verCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nextButton: {
    padding: 10,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    height: 50,
    borderRadius: 10,
    width: '100%',
  },
});
