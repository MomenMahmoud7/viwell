import {NavigatorScreenParams} from '@react-navigation/native';

type ProductScreenType = {productId: string | number};

export type HomeNavigationParamList = {
  Products: undefined;
  Product: ProductScreenType;
};

export type TabsNavigationParamListType = {
  Home: NavigatorScreenParams<HomeNavigationParamList>;
  Wishlist: undefined;
};
