import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import MainPage from './apps/main-page/MainPage';

import { loadPropertiesCsv } from './redux/actions'

import MainStore from './redux/MainStore';

const store = MainStore();
store.dispatch(loadPropertiesCsv());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
