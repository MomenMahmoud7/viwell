import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../components/UI/Layout';
import Loading from '../components/UI/Loading';
import Error from '../components/UI/Error';
import ProductCard from '../components/ProductCard';
import unit from '../styles/unit';
import theme from '../styles/theme';
import {useGetProductsQuery} from '../redux/queries/productsQuery';
import {useTranslation} from 'react-i18next';

const Products = () => {
  const {t} = useTranslation();
  const {data, isError, isLoading, isFetching, refetch} = useGetProductsQuery();

  return (
    <Layout title={t('home')}>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error refreshing={isFetching} onRefresh={refetch} />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={props => <ProductCard {...props} />}
          style={styles.container}
          contentContainerStyle={styles.content}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={refetch}
              tintColor={theme.primary}
            />
          }
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
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

export default Products;
