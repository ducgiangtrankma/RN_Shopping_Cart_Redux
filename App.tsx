import * as React from 'react';
import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContainer} from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
interface AppProps {}
export const App: FC<AppProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </SafeAreaProvider>
  );
};
