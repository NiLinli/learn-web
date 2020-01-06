import React, { Component } from 'react';
import { View , Text, Button} from 'react-native';

export class HomeScreen extends Component {
  // 静态 title
  // this 不是静态方法的 instance , 不要在里面使用 this
  static navigationOptions = ({navigation})=> ({
    title: 'Home',      // 静态 title
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <Button
        onPress={navigation.getParam('increaseCount')}
        title="X"
        color="#fff"
      />
    ),
    headerRight: (
      <Button
        onPress={navigation.navigate('MyModal')}
        title="+1"
        color="#fff"
      />
    ),
  });


  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('Home DidMount');

    // 传递 callback
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {

    console.log('_increaseCount callback');

    this.setState((prevState)=> ({
      count: prevState.count + 1
      })
    );
  };

  componentWillUnmount() {
    console.log('Home Unmount');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details(传递参数)"
          // 传递参数
          onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
              title: 'Detail Whoops'
          })}
        />
        <Button
          title="Go to Details(未传递参数)"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        
        <Text>{this.state.count}</Text>

        <Button
          title="Go to Webview Demo Page"
          onPress={() => this.props.navigation.navigate('WebviewPage', {
            
          })}
        />
      </View>
    );
  }
}