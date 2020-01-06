import React, { Component, createRef } from 'react';
import { View , Text, Button, StyleSheet, WebView } from 'react-native';
// import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class WebviewScreen extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      height: 2,
      canGoBack: false,
      canGoForward: false,
      navigatorBackColor: '#F0F0F0',
      navigatorForwardColor: '#F0F0F0',
    };

    this.webviewRef = createRef();
  }


  render() {

    const url = this.props.navigation.getParam('url', 'https://www.baidu.com');

    // navigator related
    const angleLeft = (
      <FontAwesome.Button 
        backgroundColor="white" 
        color={this.state.navigatorBackColor}
        name="angle-left"
        size={30} 
        onPress={this._goBack}/>
    );

    const angleRight = (
      <FontAwesome.Button
        backgroundColor="white"
        color={this.state.navigatorForwardColor}
        name="angle-right"
        size={30}
        onPress={this._goForward}/>
    );

    return (
      <View style={styles.container}>
        <Progress.Bar 
          progress={this.state.progress} 
          height={this.state.height} borderRadius={0} borderWidth={0} width={null}
        />
        <WebView 
          style={styles.webview}
          ref={this.webviewRef}
          originWhitelist={['*']}
          source={{uri: url}}
          onLoadProgress={this._loadProgress}
          onLoadEnd={this._loadEnd}
          onNavigationStateChange={this._navigationStateChange}
        />
        <View style={styles.navigator}>
          <View style={styles.navigatorContainer}>{angleLeft}</View>
          <View style={styles.navigatorContainer}>{angleRight}</View>
        </View>
      </View>
    );

  }

  _loadProgress = (e)=> {
    if (!this.state.height) {
      this.setState({
        height: 2
      });
    }
    this.setState({
      progress: e.nativeEvent.progress
    })
  }

  _loadEnd = (e) => {
  
    this.setState({
      progress: 0,
      height: 0
    })
  }

  _navigationStateChange = (e) => {
    console.log(e)
    const { title, canGoBack, canGoForward } = e;
    if(title) {
      this.props.navigation.setParams({title})
    }

    const navigatorBackColor = canGoBack? '#000': '#F0F0F0',
      navigatorForwardColor = canGoForward? '#000': '#F0F0F0';

    this.setState({
      canGoBack, canGoForward, navigatorBackColor, navigatorForwardColor
    })
  }

  _goBack = (e) => {
    console.log(this.webviewRef);

    if (this.state.canGoBack) {
      this.webviewRef.current.goBack();
    }
  }

  _goForward = (e) => {
    if (this.state.canGoForward) {
      this.webviewRef.current.goForward();
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  },
  navigator: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  navigatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigatorBtn: {
    color: 'black'

  }
});
