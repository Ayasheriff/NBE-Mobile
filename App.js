import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View} from 'react-native';
import LogIn from './src/pages/LogInPage/LogIn';
import SignUp from './src/pages/SignUp/SignUp';
import Verification from './src/pages/Verification/Verification';
import CreatingPw from './src/pages/CreatePW/CreatePW';
import Finish from './src/pages/Finish/Finish';

import HomePage from './src/pages/HomePage/HomePage';
import NavLogo from './src/pages/components/NavLogo/NavLogo';
import MapScreen from './src/pages/Map/MapView';
import NavbarScreen from './src/pages/components/Navbar/NavbarScreen';

// import {store} from './src/utils/redux/store';
// import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1, width: '100%', height: '100%'}}>
        <Stack.Navigator>
          <Stack.Screen name="login" component={LogIn} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="verification" component={Verification} />
          <Stack.Screen name="home" component={HomePage} />
          <Stack.Screen name="createpw" component={CreatingPw} />
          <Stack.Screen name="map" component={MapScreen} />
          <Stack.Screen name="finish" component={Finish} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    // <Provider store={store}>

    // </Provider>
  );
};

export default App;
