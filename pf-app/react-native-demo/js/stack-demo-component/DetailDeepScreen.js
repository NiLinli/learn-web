import React, { Component } from 'react';
import { View , Text, Button , StyleSheet} from 'react-native';

export class DetailDeepScreen extends Component {

  componentDidMount() {
    console.log('DetailDeep DidMount');
  }

  componentWillUnmount() {
    console.log('DetailDeep Unmount');
  }

  render() {
    return (
      <View style={styles.detailDeep}>
        <Text>Details Deep</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailDeep: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})