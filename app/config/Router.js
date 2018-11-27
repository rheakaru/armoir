import React from 'react';
import { Platform, StatusBar, Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import SignUp from '../components/onboarding/SignUp';
import SignIn from '../components/onboarding/SignIn';
import SearchTab from '../components/search_tab/Container';
import ClosetTab from '../components/closet_tab/Container';
import NewsTab from '../components/news_tab/Container';
import Images from '../themes/Images';
import Colors from '../themes/Colors';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
      headerStyle,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
      headerStyle,
    },
  },
});

export const SignedIn = createBottomTabNavigator(
  {
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: <Image source={Images.searchTabIcon} resizeMode="contain" />,
      },
    },
    ClosetTab: {
      screen: ClosetTab,
      navigationOptions: {
        tabBarLabel: 'Closet',
        tabBarIcon: <Image source={Images.closetIcon} resizeMode="contain" />,
      },
    },
    NewsTab: {
      screen: NewsTab,
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: <Image source={Images.newsIcon} resizeMode="contain" />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tabBarTint,
      inactiveTintColor: Colors.tabBarTint,
      activeBackgroundColor: Colors.theme,
      inactiveBackgroundColor: Colors.inactiveTheme,
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
    },
  },
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut,
      },
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
  );
};

export const createRootNavigatorContainer = signedIn => {
  return createAppContainer(createRootNavigator(signedIn));
};
