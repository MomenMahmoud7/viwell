import React from 'react';
import {ListRenderItem, StyleSheet, TouchableOpacity, View} from 'react-native';

import Text from './UI/Text';
import useNavigation from '../hooks/useNavigation';
import ProductType from '../types/product.type';
import unit from '../styles/unit';
import theme from '../styles/theme';
import Price from './UI/Price';
import HeartIcon from '../assets/icons/HeartIcon';
import {addProduct, removeProduct} from '../redux/slices/wishlistSlice';
import {useAppDispatch} from '../hooks/useAppDispatch';
import useIsWishlisted from '../hooks/useIsWishlisted';
import FastImage from 'react-native-fast-image';

const ProductCard: ListRenderItem<ProductType> = ({item, index}) => {
  const {navigate} = useNavigation();

  const dispatch = useAppDispatch();
  const isWishlisted = useIsWishlisted(item.id);

  return (
    <TouchableOpacity
      testID={`card-${index}`}
      style={styles.container}
      onPress={() => {
        navigate('Home', {
          screen: 'Product',
          params: {productId: item.id},
        });
      }}>
      <FastImage source={{uri: item.thumbnail}} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text
            color="heading"
            fontWeight="bold"
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text size="small" numberOfLines={2} ellipsizeMode="tail">
            {item.description}
          </Text>
          <Price price={item.price} />
        </View>
        <TouchableOpacity
          testID={`heart-button-${index}`}
          style={styles.button}
          onPress={() => {
            dispatch(isWishlisted ? removeProduct(item.id) : addProduct(item));
          }}>
          <HeartIcon
            testID={isWishlisted ? `heart-button-icon-${index}` : undefined}
            width={20 * unit}
            height={20 * unit}
            color={isWishlisted ? undefined : theme.primary}
            fill={isWishlisted ? theme.primary : undefined}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8 * unit,
    backgroundColor: theme.bg_secondary,
    ...theme.shadow,
  },
  image: {
    height: 160 * unit,
    backgroundColor: theme.secondary,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 16 * unit,
  },
  title: {
    maxWidth: '88%',
    gap: 12 * unit,
  },
  button: {
    width: 40 * unit,
    height: 40 * unit,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20 * unit,
    backgroundColor: theme.bg_primary,
  },
});

export default ProductCard;
