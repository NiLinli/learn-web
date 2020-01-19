import React, { Component } from 'react';
import { StyleSheet, View , Text, Button} from 'react-native';

export class DetailsScreen extends Component {

  // 动态访问 navigation 参数
  // 函数参数值
  // navigation
  // screenProps
  // navigationOptions
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),       // 动态添加 title
    };
  };

  componentDidMount() {
    console.log('Detail DidMount');
  }

  componentWillUnmount() {
    console.log('Detail Unmount');
  }

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');  // 读取参数, 可以设置默认值
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>接收参数</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <Text style={styles.title}>navigate or push 对比</Text>
        <Button
          title="Navigate to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Push to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Detail Deep"
          onPress={() => this.props.navigation.push('DetailDeep')}
        />

        <Text style={styles.title}>使用setParams更新navigationOptions</Text>
        <Button
          title="更新 title"
          onPress={() => this.props.navigation.setParams({title: 'title 更新了'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'red',
    fontSize: 20
  }
});

// 两种导航模式
// navigate: 先判断是否在 stack top, 在就不添加 
// push: 比较直接, 直接在 stack 上面添加