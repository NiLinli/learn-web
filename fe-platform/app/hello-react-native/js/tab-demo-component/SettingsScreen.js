import React, { Component } from 'react';
import { View , Text, Button} from 'react-native';

export class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Language Setting"
          onPress={() => this.props.navigation.navigate('LanguageSetting')}
        />
      </View>
    );
  }
}