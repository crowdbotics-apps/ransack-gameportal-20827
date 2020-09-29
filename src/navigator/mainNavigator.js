import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile5115868Navigator from '../features/UserProfile5115868/navigator';
import CalendarView7115867Navigator from '../features/CalendarView7115867/navigator';
import Settings115777Navigator from '../features/Settings115777/navigator';
import Settings115760Navigator from '../features/Settings115760/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile5115868: { screen: UserProfile5115868Navigator },
CalendarView7115867: { screen: CalendarView7115867Navigator },
Settings115777: { screen: Settings115777Navigator },
Settings115760: { screen: Settings115760Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
