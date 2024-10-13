import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './ui/app';

import 'normalize.css';

const root = document.querySelector('#root');
if (!root) {
  throw new Error('Root not found');
}

const container = createRoot(root);
container.render(
  <StrictMode>
    <App />
  </StrictMode>
);
