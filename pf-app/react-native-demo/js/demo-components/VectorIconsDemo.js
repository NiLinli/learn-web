import React,  { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export class VectorIconsDemo extends Component {

  _loginWithFacebook = () => {
    console.log('login with facebook');
  }

  render() {
    // 普通 Icon
    const angleLeft = (<FontAwesome style={styles.icon} name="angle-left" backgroundColor="red" size={15}/>);
    const angleRight = (<FontAwesome name="angle-right" size={30}/>);

    // 可以点击的 Icon
    const loginButton = (
      <FontAwesome.Button name="facebook"  onPress={this._loginWithFacebook}>
        Login with Facebook
      </FontAwesome.Button>
    );

    return (
      <View style={styles.container}>
  
        <Text style={styles.text}>{ angleLeft } AVC</Text>
        { angleRight }
        { loginButton }
      </View>

    );
  }

}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {

  },
  icon: {
    fontWeight: '100',
    fontSize: 30,
    backgroundColor: 'red'
  }
})