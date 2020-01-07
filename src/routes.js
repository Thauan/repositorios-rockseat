import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Home from './Screens/Container/Home';
import Main from './Screens/Container/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Home,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
