import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import TabsNavigation from './navigations/TabsNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n/i18n';
import BootSplash from 'react-native-bootsplash';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer onReady={BootSplash.hide}>
            <TabsNavigation />
          </NavigationContainer>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
