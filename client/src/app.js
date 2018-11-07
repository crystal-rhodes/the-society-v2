import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';
import client from './apollo/config';
import { ApolloProvider } from 'react-apollo';
import Homepage from './components/Homepage'

// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//   </Provider>
// );



ReactDOM.render(
  <ApolloProvider client={client}>
    <Homepage />
  </ApolloProvider>,
  document.getElementById('app'),
);