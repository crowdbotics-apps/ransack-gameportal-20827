import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList116110Navigator from '../features/NotificationList116110/navigator';
import Settings116109Navigator from '../features/Settings116109/navigator';
import Settings116101Navigator from '../features/Settings116101/navigator';
import UserProfile116099Navigator from '../features/UserProfile116099/navigator';
import SignUp28115937Navigator from '../features/SignUp28115937/navigator';
import BlankScreen7115874Navigator from '../features/BlankScreen7115874/navigator';
import Settings1115872Navigator from '../features/Settings1115872/navigator';
import CalendarView7115867Navigator from '../features/CalendarView7115867/navigator';
import Settings115777Navigator from '../features/Settings115777/navigator';
import Settings115760Navigator from '../features/Settings115760/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList116110: { screen: NotificationList116110Navigator },
Settings116109: { screen: Settings116109Navigator },
Settings116101: { screen: Settings116101Navigator },
UserProfile116099: { screen: UserProfile116099Navigator },
SignUp28115937: { screen: SignUp28115937Navigator },
BlankScreen7115874: { screen: BlankScreen7115874Navigator },
Settings1115872: { screen: Settings1115872Navigator },
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
