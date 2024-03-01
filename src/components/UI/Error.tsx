import React, {FC} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';

import Text from './Text';
import unit from '../../styles/unit';
import {useTranslation} from 'react-i18next';
import WarnIcon from '../../assets/icons/WarnIcon';
import theme from '../../styles/theme';

type ErrorPropsType = {
  errorTitle?: string;
  errorMessage?: string;
  refreshing: boolean;
  onRefresh: () => void;
};

const Error: FC<ErrorPropsType> = ({
  errorTitle,
  errorMessage,
  refreshing,
  onRefresh,
}) => {
  const {t} = useTranslation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <WarnIcon width={100 * unit} height={100 * unit} color={theme.danger} />
      <View style={styles.title}>
        <Text
          size="medium"
          color="heading"
          fontWeight="bold"
          textAlign="center">
          {errorTitle || t('global_error.title')}
        </Text>
        <Text textAlign="center">
          {errorMessage || t('global_error.message')}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32 * unit,
    gap: 48 * unit,
  },
  title: {
    gap: 16 * unit,
  },
});

export default Error;
