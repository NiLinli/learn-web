import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';


export class TextInputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: '' 
    }
  }

  handleInputChange = (text) => {
    this.setState({text});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.handleInputChange}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          { this.state.text }
        </Text>
    </View>
    );
  }
  
}