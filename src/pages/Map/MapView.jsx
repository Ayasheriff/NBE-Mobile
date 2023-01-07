import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
export default function App() {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
//------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: "60vw",
//   height: "85vh"
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// const MapScreen =() => {
//   const useLocation = () => {
//     const [location, setLocation] = useState();

//     useEffect(() => {
//       const getLocation = async () => {
//         try {
//           const { granted } = await Location.getPermissionsAsync();
//           if (!granted) {
//             return alert(
//               'Permissions needed',
//               'This app does not currently have permission to access your location',
//               [{ text: "Ok", style: "cancel" }]
//             );
//           }
//           const {
//             coords: { latitude, longitude }
//           } = await Location.getCurrentPositionAsync();

//           setLocation([longitude, latitude]);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       getLocation();
//     }, []);

//     return location;
//   };

//   console.log(useLocation());

//   return (
//     <View style={styles.app}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Phone silencer</Text>
//       </View>
//       <View style={styles.body}>
//         <LoadScript googleMapsApiKey="AIzaSyDiXmlEhX9XpUaZ4sRYTiM5isrxsFH_FCs">
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={15}
//           >
//             {/* Child components, such as markers, info windows, etc. */}
//             <></>
//           </GoogleMap>
//         </LoadScript>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   app: {
//     marginHorizontal: "auto",
//     maxWidth: 500
//   },
//   header: {
//     padding: 20
//   },
//   title: {
//     fontSize: 16,
//     textAlign: "center"
//   }
// });

// export default MapScreen;

//---------------------------------------
// import React ,{useState}from 'react';
// import {MapViewProps} from 'react-native-maps';
// import {
//     View,
//     Text,
//     StyleSheet,
// } from 'react-native';

// const MapScreen = () =>{
//     const [region, setRegion] = useState({
//         latitude: 51.5079145,
//         longitude: -0.0899163,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       });
//       return (
//         <View style={styles.container}>
//           <MapViewProps
//             style={styles.map}
//             initialRegion={{
//               latitude: 37.78825,
//               longitude: -122.4324,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//             //onRegionChangeComplete runs when the user stops dragging MapView
//             onRegionChangeComplete={(region) => setRegion(region)}
//           />
//           {/*Display user's current region:*/}
//           <Text style={styles.text}>Current latitude: {region.latitude}</Text>
//           <Text style={styles.text}>Current longitude: {region.longitude}</Text>
//         </View>
//       );

// };
// export default MapScreen;
// const styles = StyleSheet.create({
//     map:{
//         flex:1,
//         justifyContent:'center',
//         alignContent:'center',
//     },
//     text:{
//         color: 'black',
//     }
// })

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import MapView from "react-native-maps";
// export default function MapScreen() {
//   return (
//     <View style={styles.container}>
//     {/*Render our MapView*/}
//       <MapView
//         style={styles.map}
//         //specify our coordinates.
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//   );
// }
// //create our styling code:
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1, //the container will fill the whole screen.
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// // import React from 'react';
// // import {
// //     View,
// //     StyleSheet,
// // } from 'react-native';
// // import {enableLatestRenderer} from 'react-native-maps';

// // import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

// // enableLatestRenderer();
// // const MapScreen = () => {
// //     return (
// //     <View style={styles.container}>
// //      <MapView
// //        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
// //        style={styles.map}
// //        region={{
// //          latitude: 37.78825,
// //          longitude: -122.4324,
// //          latitudeDelta: 0.015,
// //          longitudeDelta: 0.0121,
// //        }}
// //      >
// //      </MapView>
// //    </View>
// //     );
// // };
// // export default MapScreen;

// // const styles = StyleSheet.create({
// //     container: {
// //       ...StyleSheet.absoluteFillObject,
// //       height: 400,
// //       width: 400,
// //       justifyContent: 'flex-end',
// //       alignItems: 'center',
// //     },
// //     map: {
// //       ...StyleSheet.absoluteFillObject,
// //     },
// //    });

//  // // import React from 'react';
// // // import {
// // //     View,
// // //     Text,
// // //     StyleSheet,
// // // } from 'react-native';
// // // const MapScreen = () => {
// // //     return (
// // //         <View style={styles.body}>
// // //             <Text>map scressn</Text>
// // //         </View>
// // //     );
// // // };
// // // export default MapScreen;

// // // const styles = StyleSheet.create ({
// // // body:{
// // //     flex:1,
// // //     alignItems:'center',
// // // }
// // // });

// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/
// Import React
// import React from 'react';
// // Import required components
// import {SafeAreaView, StyleSheet, View} from 'react-native';
// // Import Map and Marker
// import MapView , {Marker} from 'react-native-maps';
// const MapScreen = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <MapView
//           style={styles.mapStyle}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           customMapStyle={mapStyle}>
//           <Marker
//             draggable
//             coordinate={{
//               latitude: 37.78825,
//               longitude: -122.4324,
//             }}
//             onDragEnd={
//               (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
//             }
//             title={'Test Marker'}
//             description={'This is a description of the marker'}
//           />
//         </MapView>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default MapScreen;
// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     styles: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     styles: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     styles: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     styles: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     styles: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     styles: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     styles: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     styles: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     styles: [{color: '#17263c'}],
//   },
// ];
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// import React from 'react';
// import MapView from 'react-native-maps';
// import {
//     View,
//     Text,
//     StyleSheet,
// } from 'react-native';

// const MapScreen = () => {
//     return (
//         <MapView style={styles.map} />
//     )
// };
// export default MapScreen;
//  const styles = StyleSheet.create ({
//     map: {
//         height:300,
//     }
//  })
