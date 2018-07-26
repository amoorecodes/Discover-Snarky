import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from './reducers/index.js';

const store = createStore(allReducers);


render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('app'));