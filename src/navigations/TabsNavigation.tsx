import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';

import HomeNavigation from './HomeNavigation';
import TabsNavigationBar from '../components/TabsNavigationBar';
import {TabsNavigationParamListType} from '../types/parmlist.type';
import Wishlist from '../screens/Wishlist';
import HomeIcon from '../assets/icons/HomeIcon';
import HeartIcon from '../assets/icons/HeartIcon';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator<TabsNavigationParamListType>();

type IconPropsType = {
  focused: boolean;
  color: string;
  size: number;
};

const HomeBarIcon: FC<IconPropsType> = ({color, size}) => (
  <HomeIcon width={size} height={size} color={color} />
);

const WishlistBarIcon: FC<IconPropsType> = ({color, size}) => (
  <HeartIcon width={size} height={size} color={color} />
);

const TabsNavigation = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={TabsNavigationBar}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          title: t('home'),
          headerShown: false,
          tabBarIcon: HomeBarIcon,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          title: t('wishlist'),
          headerShown: false,
          tabBarIcon: WishlistBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
