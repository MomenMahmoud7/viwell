import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Layout from '../components/UI/Layout';
import unit from '../styles/unit';
import theme from '../styles/theme';
import ProductCard from '../components/ProductCard';
import {useAppSelector} from '../hooks/useAppSelector';
import {selectWishlist} from '../redux/slices/wishlistSlice';
import Text from '../components/UI/Text';
import {useTranslation} from 'react-i18next';
import HeartIcon from '../assets/icons/HeartIcon';

const Wishlist = () => {
  const {t} = useTranslation();
  const wishlist = useAppSelector(selectWishlist);
  return (
    <Layout title={t('wishlist')}>
      {!wishlist.length ? (
        <View style={styles.empty}>
          <HeartIcon
            width={100 * unit}
            height={100 * unit}
            fill={theme.danger}
            style={styles.icon}
          />
          <Text
            size="medium"
            color="heading"
            fontWeight="bold"
            textAlign="center">
            {t('empty.title')}
          </Text>
          <Text textAlign="center">{t('empty.description')}</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          showsVerticalScrollIndicator={false}
          renderItem={props => <ProductCard {...props} />}
          style={styles.container}
          contentContainerStyle={styles.content}
        />
      )}
    </Layout>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32 * unit,
    gap: 16 * unit,
  },
  icon: {
    marginBottom: 32 * unit,
  },
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    padding: 24 * unit,
  },
  text: {
    textAlign: 'center',
    marginTop: 8 * unit,
    color: theme.danger,
  },
});
