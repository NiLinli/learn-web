import React, { Component } from 'react';
import { View , Text, Button, StyleSheet } from 'react-native';

export  class ModalScreen extends React.Component {
  render() {
    return (
      <View style={styles.modal}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    opacity: 0.5,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});