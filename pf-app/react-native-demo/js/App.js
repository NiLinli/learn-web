import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Demo } from './demo-components/Demo';
import StackNavigator from './stack-demo-component/StackNavigator';
import RootNavigator from './tab-demo-component/TabNavigator';

type Props = {};
export default class App extends Component<Props> {

  onNavigationStateChange = (prevState, newState, action) => {
    console.log(prevState, newState, action);
  }

  componentDidMount() {
    console.disableYellowBox = true;
    console.warn('Yellow box is disabled!')
  }

  render() {
    return (
      // <StackNavigator />
      <RootNavigator />

      // <Demo/>  
    );
  }
}