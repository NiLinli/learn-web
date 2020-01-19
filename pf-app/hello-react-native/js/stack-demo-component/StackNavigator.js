import { createStackNavigator , createAppContainer } from 'react-navigation';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';
import { DetailDeepScreen } from './DetailDeepScreen';

const stackNavigator = createStackNavigator({
  Home: HomeScreen, 
  Details: DetailsScreen,
  DetailDeep: DetailDeepScreen
});

export default createAppContainer(stackNavigator);

// Stack navigator 
// 如果您的应用程序只使用一个 stack navigator ，则它在概念上类似于Web浏览器处理导航状态的方式 
// 当用户与它进行交互时，应用程序会从导航堆栈中新增和删除页面，这会导致用户看到不同的页面

