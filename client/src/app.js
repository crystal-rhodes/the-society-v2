import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';

// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//   </Provider>
// );

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

