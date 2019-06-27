/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'styled-components';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();

import theme from '../theme';

if(__DEV__) {
    import('../ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default class Entrypoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <ThemeProvider theme={theme}>
                        <Navigator renderLoadingExperimental={() => <ActivityIndicator />} />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        );
    }
}
