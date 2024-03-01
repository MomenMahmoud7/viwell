import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import Layout from '../components/UI/Layout';
import {useGetProductByIdQuery} from '../redux/queries/productsQuery';
import Loading from '../components/UI/Loading';
import Error from '../components/UI/Error';
import unit from '../styles/unit';
import Text from '../components/UI/Text';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeNavigationParamList} from '../types/parmlist.type';
import theme from '../styles/theme';
import Rate from '../components/UI/Rate';
import HeartIcon from '../assets/icons/HeartIcon';
import Price from '../components/UI/Price';
import useIsWishlisted from '../hooks/useIsWishlisted';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {addProduct, removeProduct} from '../redux/slices/wishlistSlice';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';

const Product: FC<
  NativeStackScreenProps<HomeNavigationParamList, 'Product'>
> = ({
  route: {
    params: {productId},
  },
}) => {
  const {t} = useTranslation();
  const {data, isError, isLoading, isFetching, refetch} =
    useGetProductByIdQuery(productId);
  const dispatch = useAppDispatch();

  const isWishlisted = useIsWishlisted(data?.id);

  return (
    <Layout withBack>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error refreshing={isFetching} onRefresh={refetch} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refetch} />
          }
          contentContainerStyle={styles.wrapper}>
          <FastImage
            source={{uri: data?.thumbnail}}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}
          />
          <View style={styles.container}>
            <View style={styles.title}>
              <Text size="large" color="heading" fontWeight="bold">
                {data?.title}
              </Text>
            </View>
            <View style={styles.subtitle}>
              <View>
                <Text size="medium" color="heading" fontWeight="bold">
                  {data?.brand}
                </Text>
                <Text size="small" style={styles.category}>
                  {data?.category}
                </Text>
              </View>
              <View style={styles.price}>
                <Price price={data?.price} />
                <Rate rate={data?.rating} />
              </View>
            </View>
            <Text>{data?.description}</Text>
            <TouchableOpacity
              testID="wishlist-button"
              style={styles.button}
              onPress={() => {
                if (!data) {
                  return;
                }
                dispatch(
                  isWishlisted ? removeProduct(data?.id) : addProduct(data),
                );
              }}>
              <Text
                testID="wishlist-button-text"
                size="small"
                color="white"
                fontWeight="bold">
                {isWishlisted
                  ? t('remove_from_wishlist')
                  : t('add_to_wishlist')}
              </Text>
              <HeartIcon
                width={20 * unit}
                height={20 * unit}
                color={theme.white}
                fill={isWishlisted ? theme.white : undefined}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 16 * unit,
    padding: 24 * unit,
  },
  image: {
    height: 320 * unit,
    backgroundColor: theme.secondary,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  price: {
    alignItems: 'flex-end',
  },
  category: {
    textTransform: 'capitalize',
  },
  footer: {
    flexDirection: 'row',
    gap: 16 * unit,
  },
  button: {
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16 * unit,
    gap: 16 * unit,
    borderRadius: 40,
    backgroundColor: theme.primary,
  },
});
