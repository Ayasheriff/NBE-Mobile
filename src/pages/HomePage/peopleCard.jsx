// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';
// const peopleCard = () => {
//   return (
//     <View style={styles.cardContainer}>
//       <Image source={require('../../assets/images/girl1.png')} />
//       <Text>Hala</Text>
//     </View>
//   );
// };
// export default peopleCard;

// const styles = StyleSheet.create({
//   cardContainer: {
//     width: '80%',
//     overflow: 'scroll',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });
//-----------------------------------------------------------------------
import React from 'react';
// import {
//     Card,
//     CardTitle,
//     CardContent,
//     CardAction,
//     CardButton,
//     CardImage,
// } from 'react-native-material-cards';
import {Card, Button, Title, Paragraph} from 'react-native-paper';

import {
  View,
  // Button,
  Image,
  StyleSheet,
} from 'react-native';
// import {color} from '@rneui/base';

const peopleCard = () => {
  return (
    <View style={Styles.container}>
      <Card style={Styles.card1}>
        <Image source={require('../../assets/images/girl1.png')} />
        <Card.Content>
          <Paragraph>Hala</Paragraph>
        </Card.Content>
      </Card>

      <Card style={Styles.card1}>
        <Image source={require('../../assets/images/girl1.png')} />
        <Card.Content>
          <Paragraph>Hala</Paragraph>
        </Card.Content>
      </Card>

      <Card style={Styles.card1}>
        <Image source={require('../../assets/images/girl1.png')} />
        <Card.Content>
          <Paragraph>Hala</Paragraph>
        </Card.Content>
      </Card>

      <Card style={Styles.card1}>
        <Image source={require('../../assets/images/girl1.png')} />
        <Card.Content>
          <Paragraph>Hala</Paragraph>
        </Card.Content>
      </Card>

      <Card style={Styles.card1}>
        <Image
          style={{alignItems: 'center'}}
          source={require('../../assets/images/girl1.png')}
        />
        <Card.Content>
          <Paragraph>Hala</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};
export default peopleCard;

const Styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    overflow: 'scroll',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card1: {
    margin: 10,
  },
});
//------------------------------------------------------------------------------------------
// const users = [
//   {
//     name: 'brynn',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
//   },
//   // more users here
// ];
// import React from 'react';
// import {View, Text, Image} from 'react-native';
// import {Card, ListItem, Button, Icon} from 'react-native-elements';

// const peopleCard = () => {
// implemented without image with header
// <Card>
//   <Card.Title>CARD WITH DIVIDER</Card.Title>
//   <Card.Divider />
//   {users.map((u, i) => {
//     return (
//       <View key={i} style={styles.user}>
//         <Image
//           style={styles.image}
//           resizeMode="cover"
//           source={{uri: u.avatar}}
//         />
//         <Text style={styles.name}>{u.name}</Text>
//       </View>
//     );
//   })}
// </Card>;

// implemented without image without header, using ListItem component
//   <Card containerStyle={{padding: 0}} >
//    {
//      users.map((u, i) => {
//        return (
//          <ListItem
//            key={i}
//            roundAvatar
//            title={u.name}
//            leftAvatar={{ source: { uri: u.avatar } }}
//          />
//        );
//      })
//    }
//  </Card>

// implemented with Text and Button as children
// <Card>
//   <Card.Title>HELLO WORLD</Card.Title>
//   <Card.Divider />
//   <Card.Image source={require('../../assets/images/girl1.png')} />
//   <Text style={{marginBottom: 10}}>
//     The idea with React Native Elements is more about component structure than
//     actual design.
//   </Text>
//   <Button
//     icon={<Icon name="code" color="#ffffff" />}
//     buttonStyle={{
//       borderRadius: 0,
//       marginLeft: 0,
//       marginRight: 0,
//       marginBottom: 0,
//     }}
//     title="VIEW NOW"
//   />
// </Card>;
// };
