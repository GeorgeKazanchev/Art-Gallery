import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './ui/app';
import getThemeByName from './model/get-theme-by-name';

import { store } from './model/store';
import { setTheme } from '../shared/model/theme-slice';

import 'normalize.css';

const root = document.querySelector('#root');
if (!root) {
  throw new Error('Root not found');
}

const themeName = localStorage.getItem('theme');
if (themeName) {
  const theme = getThemeByName(themeName);
  store.dispatch(setTheme(theme));
}

const container = createRoot(root);
container.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
