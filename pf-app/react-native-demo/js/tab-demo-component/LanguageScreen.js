import React, { Component } from 'react';
import { View , Text, Button} from 'react-native';

export class LanguageScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Index"
          onPress={() => this.props.navigation.navigate('Index')}
        />
      </View>
    );
  }
}
