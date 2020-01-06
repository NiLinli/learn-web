import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";


import { IndexScreen } from "./IndexScreen";
import { WebviewScreen } from "./WebviewScreen";

import { SettingsScreen } from './SettingsScreen';
import { LanguageScreen } from './LanguageScreen';

import { ModalScreen } from './ModalScreen';
import { InfoScreen } from "./InfoScreen";

const MainStack = createStackNavigator({
  Index: { // stack navigator
    screen: IndexScreen
  },
  Webview: {
    screen: WebviewScreen
  },
  Info: {
    screen: InfoScreen
  }
});

MainStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let header = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  } else {
    header = null;
  }

  return {
    tabBarLabel: 'Mainsss',
    tabBarVisible,
    header
  };
};

const SettingStack = createStackNavigator({
  Settings: SettingsScreen,
  LanguageSetting: LanguageScreen
},{
  headerMode: 'none'
});

SettingStack.navigationOptions= {
  tabBarLabel: 'Settingsss'
}

const TabsStack = createBottomTabNavigator({
  Main: MainStack,
  Setting: SettingStack
});


const RootNavigator = createStackNavigator({
  Tabs: {
    screen: TabsStack,
  },
  MyModal: {
    screen: ModalScreen,
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});

export default createAppContainer(RootNavigator);

// React Navigation
// stackNavigator 函数返回一个 React 组件