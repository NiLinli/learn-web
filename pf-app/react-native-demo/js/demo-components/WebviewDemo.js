import React,  { Component } from 'react';
import { View , Text} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';


export class WebviewDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0.3
    }

  }

  _renderLoading = (obj) => {
    console.log(obj);
    console.log('renderLoading');
  }

  _renderError = () => {
    console.log('renderError')
  }

  _loadStart = () => {
    console.log('onLoadStart');
    // 开始加载
    this.initProgress();
  }

  _loadProgress = ()=>{
    console.log('onLoadProgress');
    if (this.state.progress < 0.9) {
      this.setState((prevState)=> ({
        progress: prevState.progress + 0.1
      }))
    }
  }

  _load =() =>{
    console.log('onLoad')
    // 加载成功
    this.setState({
      progress: 1
    })
  }

  _Error = () => {
    console.log('onError')
  }

  _loadEnd = () => {
    console.log('onLoadEnd');
    // 加载完成
    this.initProgress();
  }

  _navigationStateChange = () => {
    console.log('onNavigationStateChange');
  }

  initProgress() {
    // this.setState({
    //   progress: 0
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Progress.Bar 
          progress={this.state.progress} 
          height={2} borderRadius={0.3} borderWidth={0} 
        />
        <Text>top</Text>
        <WebView
          style={{backgroundColor: 'yellow', height:20} }
          source={{uri: 'https://reactnative.cn/docs/using-a-scrollview/'}}
          startInLoadingState={true}

          // 启动 webview
          // startInLoadingState={true}
          renderLoading={this._renderLoading}
         
          // 开始加载
          onLoadStart={this._loadStart}
         
          // 加载页面中
          onLoadProgress={this._loadProgress}
         
          // 加载完成
          onLoad={this._load}
          onError={this._Error}
          onLoadEnd={this._loadEnd}
        
        />
        <Text>bottom</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 10, 
    flex: 1
  }
}


// 0. 启动 webview 的时候
// renderLoading
// onLoadProgress

// 1. 加载开始
// onLoadStart                  开始加载
// onNavigationStateChange      

// 2. 加载中
// onLoadProgress               load 网页 ing, 反复调用

// 3. 加载结束
// onError/onLoad               加载成功或者失败
// onLoadEnd                    加载完成
// onNavigationStateChange


// 操作 Webview 
// extraNativeComponentConfig
// injectJavaScript

// goForward
// goBack
// reload
// stopLoading