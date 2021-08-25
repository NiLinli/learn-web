import React, { Component } from 'react';
import { View , Text, Button} from 'react-native';
import ScrollableTabView ,{ DefaultTabBar , ScrollableTabBar} from 'react-native-scrollable-tab-view';
import { MultiSelectList } from './MultiSelectList';


export class ScrollableTabViewScreen extends React.Component{

  render() {

    const MOCKED_DATA = [];

    for (let i = 0; i < 50; i++) {
      MOCKED_DATA.push({
        id: i + '',
        title: 'abc' + i
      });
      
    }

    return (
      <ScrollableTabView
        style={{marginTop: 20, backgroundColor: 'yellow'}}     // 样式
        // initialPage={2}               // 初始化 Page 0 开始
        locked={true}
        scrollWithoutAnimation={true}
        renderTabBar={() => <DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)'/>}  // TabBar - DefaultTabBar/ScrollableTabBar/自定义
        // tabBarPosition='overlayTop'
        onChangeTab={this.changeTab}

      >
        <MultiSelectList  style={{flex:1,backgroundColor:'white'}} tabLabel="FlatList" data={MOCKED_DATA}/>
        <Text tabLabel="Angular">Angular content</Text>
        <Text tabLabel="React">React content</Text>
        <Text tabLabel="Vue">Vue content</Text>
      </ScrollableTabView>
    );
  }

  changeTab = (obj) => {
    console.log(obj)
    // from 
    // i
    // ref
  }



}