import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class ViewDemo extends Component {

  render() {
    return (
     <View style={{flex: 1}}>
      <View style={style.testHeight}>
        <Text style={style.bigblue}>just bigblue</Text>
        <Text style={style.red}>just red</Text>
        <Text style={[style.bigblue, style.red]}>bigblue then red</Text>
        <Text style={[style.red, style.bigblue]}>red then bigblue</Text>
      </View>

      <View style={{flex:1, backgroundColor: 'powderblue'}}> 
        <Text>flex1</Text>
      </View>

      <View style={{flex:2, backgroundColor: 'skyblue'}}> 
        <Text>flex2</Text>
      </View>

      <View style={{flex:3, backgroundColor: 'steelblue', justifyContent: "flex-end" }}> 
        <Text>flex3</Text>
      </View>

     </View>

    );
  }
}

const style = StyleSheet.create({
  testHeight: {
    height: 100,
    backgroundColor: 'yellow'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red'
  },
});

// 不显示设置 fix height , View 内部元素会撑起 View 的高度