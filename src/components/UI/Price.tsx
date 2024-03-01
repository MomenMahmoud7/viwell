import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import Text from './Text';
import {CURRENCY} from '../../utils/constants';

type PricePropsType = {
  price?: number;
};

const Price: FC<PricePropsType> = ({price}) => {
  return (
    <View style={styles.container}>
      <Text size="medium" color="heading" fontWeight="bold">
        {price?.toLocaleString()}
      </Text>
      <Text size="small" color="heading" fontWeight="bold">
        {CURRENCY}
      </Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
