import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = props =>  (
  <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggle()}>
        <Image source={require('../images/icnBars.png')} style={{width: 30, height: 30}} />
      </TouchableWithoutFeedback>
        <Image source={require('../images/Netflix-logo.png')} style={styles.logo} />
        <Image source={require('../images/icnSearch.png')} style={{width: 30, height: 30}} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: 'black',
    marginHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40,
  },
});
export default Header;