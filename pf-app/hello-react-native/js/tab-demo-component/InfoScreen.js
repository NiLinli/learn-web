import React, { Component } from 'react';
import { View , Text, Button} from 'react-native';

export class InfoScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Info',
  }

  componentDidMount() {
    console.log('Info DidMount'); 
  }

  componentWillUnmount() {
    console.log('Info Unmount');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Info</Text>

        <Button
          title="Go to MymModal"
          onPress={() => this.props.navigation.navigate('MyModal')}
        />
      </View>
    );
  }
}
