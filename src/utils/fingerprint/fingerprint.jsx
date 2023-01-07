import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const {biometryType} = await rnBiometrics.isSensorAvailable();

const FingerPrint = ({navigation}) => {
  if (biometryType === BiometryTypes.Biometrics) {
    //do something face id specific
    navigation.navigate('home');
  } else {
    alert('Biometrics not supported');
  }
};
export default FingerPrint;
