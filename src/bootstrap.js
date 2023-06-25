import React, { memo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HistoryMemoryRouter from './helpers/history-memory-router';
import App from './App';

const mount = (el, { onNavigate, isRunInIsolation = false }) => {
  const memoryHistory = createMemoryHistory();

  const root = createRoot(el);

  if (isRunInIsolation) {
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    root.render(
      <HistoryMemoryRouter history={memoryHistory}>
        <App onNavigate={onNavigate} />
      </HistoryMemoryRouter>
    );
  }

  return {
    onParentNavigate: (trailingRoute) => {
      const { pathname } = memoryHistory.location;

      if (pathname !== trailingRoute) {
        memoryHistory.push(trailingRoute);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_authentication-dev-root');

  if (devRoot) {
    mount(devRoot, { isRunInIsolation: true });
  }
}

export { mount };
