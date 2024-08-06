import React from 'react';
import {Provider} from 'react-redux';
import store from './store/task-slice';
import Routes from './routes';
import {Provider as PaperProvider} from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaperProvider>
  );
}
