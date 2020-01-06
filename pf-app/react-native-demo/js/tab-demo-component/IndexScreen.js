import React, { Component } from 'react';
import { View , Text, Button} from 'react-native';

export class IndexScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'Index',
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('Index DidMount');
  }

  componentWillUnmount() {
    console.log('Index Unmount');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="打开 Webview Page"
          // 传递参数
          onPress={() => this.props.navigation.navigate('Webview',{
            url: 'https://sina.cn/'
          })}
        />
        <Button
          title="Go to Info"
          onPress={() => this.props.navigation.navigate('Info')}
        />
      </View>
    );
  }
}