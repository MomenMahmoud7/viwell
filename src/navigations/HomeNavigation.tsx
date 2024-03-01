import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeNavigationParamList} from '../types/parmlist.type';
import Products from '../screens/Products';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator<HomeNavigationParamList>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
