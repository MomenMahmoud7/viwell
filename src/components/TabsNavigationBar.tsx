import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';

import Text from './UI/Text';
import unit from '../styles/unit';
import theme from '../styles/theme';

const TabsNavigationBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Platform.OS === 'ios' ? 32 * unit : 24 * unit,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View key={index} style={[styles.tabWrapper]}>
            {index !== 0 && <View style={styles.divider} />}
            <TouchableOpacity
              testID={`${label}-tab`}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}>
              <View style={styles.icon}>
                {!!options.tabBarIcon &&
                  options.tabBarIcon({
                    focused: isFocused,
                    color: isFocused ? theme.primary : theme.text_primary,
                    size: 24 * unit,
                  })}
              </View>
              <Text size="small" color={isFocused ? 'primary' : 'default'}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16 * unit,
    paddingHorizontal: 16 * unit,
    backgroundColor: theme.bg_secondary,
    ...theme.shadow,
  },
  tabWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    borderStartWidth: 1,
    borderColor: theme.bg_primary,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 32 * unit,
    height: 32 * unit,
    marginBottom: 8 * unit,
  },
});
export default TabsNavigationBar;
