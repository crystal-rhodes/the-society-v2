import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';
import client from './apollo/config';
import {
    ApolloProvider
} from 'react-apollo';
import Homepage from './components/Homepage'
import AppRouter from './routers/AppRouter'

const store = configureStore();



ReactDOM.render(
    <ApolloProvider client={client} >
      <Provider store={store}>
  <AppRouter/>
  </Provider>
  
  </ApolloProvider>,
    document.getElementById('app'),
);