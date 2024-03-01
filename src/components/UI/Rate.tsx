import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import Text from './Text';
import unit from '../../styles/unit';
import theme from '../../styles/theme';

type RatePropsType = {
  rate?: number;
};

const Rate: FC<RatePropsType> = ({rate = 0}) => {
  return (
    <View style={styles.container}>
      <Text size="tiny" fontWeight="bold" color="heading">
        {rate}
      </Text>
      <View style={styles.content}>
        {Array.from({length: 5}).map((_, i) => {
          const percent = rate - i;
          const widthPercentage = percent > 1 ? 100 : percent * 100;
          return (
            <View key={`rate-${i}`} style={styles.bar}>
              <View style={[styles.fill, {width: `${widthPercentage}%`}]} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4 * unit,
  },
  content: {
    flexDirection: 'row',
    gap: 2 * unit,
  },
  bar: {
    height: 8 * unit,
    width: 20 * unit,
    borderWidth: 1 * unit,
    borderColor: theme.primary,
  },
  fill: {
    height: '100%',
    backgroundColor: theme.primary,
  },
});

export default Rate;
