import React, {FC, PropsWithChildren} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Text from './Text';
import useNavigation from '../../hooks/useNavigation';
import unit from '../../styles/unit';
import theme from '../../styles/theme';
import AngleLeftIcon from '../../assets/icons/AngleLeftIcon';

type LayoutPropsType = {
  title?: string;
  withBack?: boolean;
  header?: FC;
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;

const Layout: FC<LayoutPropsType> = ({
  children,
  title = '',
  withBack = false,
  header,
  style,
}) => {
  const {top} = useSafeAreaInsets();
  const {goBack} = useNavigation();

  return (
    <View style={[styles.container, styles.full]}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.bg_secondary} />
      <KeyboardAvoidingView
        style={styles.full}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={[styles.header, {paddingTop: top + 16 * unit}]}>
          {withBack ? (
            <TouchableOpacity
              testID="back-button"
              onPress={goBack}
              style={styles.button}>
              <AngleLeftIcon
                width={24 * unit}
                height={24 * unit}
                color={theme.primary}
              />
            </TouchableOpacity>
          ) : (
            <Text size="large" color="heading" fontWeight="bold">
              {title}
            </Text>
          )}
          {!!header && header({})}
        </View>
        <View style={[styles.full, style]}>{children}</View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.bg_primary,
  },
  full: {
    flex: 1,
  },
  header: {
    zIndex: 10,
    gap: 16 * unit,
    paddingBottom: 16 * unit,
    paddingHorizontal: 24 * unit,
    backgroundColor: theme.bg_secondary,
    ...theme.shadow,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4 * unit,
  },
  content: {
    flex: 1,
  },
});

export default Layout;
