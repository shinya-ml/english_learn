import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../ducks/store';

import '../css/Header.css';
import '../css/Footer.css';
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
