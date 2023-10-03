import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// import store from './store/index'
// import store from './store/indexWithReduxToolkit'
import store from './store/index-with-sliced-data'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>); //=>now the store is provided
