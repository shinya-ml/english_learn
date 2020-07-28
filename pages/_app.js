import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../ducks/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
