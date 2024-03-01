import React from 'react';
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import theme from '../../styles/theme';
import unit from '../../styles/unit';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 56 * unit}
        color={theme.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
