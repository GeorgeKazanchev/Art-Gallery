import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './ui/app';
import { store } from './model/store';
import { Provider } from 'react-redux';

import 'normalize.css';

const root = document.querySelector('#root');
if (!root) {
  throw new Error('Root not found');
}

const container = createRoot(root);
container.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
