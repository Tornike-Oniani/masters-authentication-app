import React, { memo } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import HistoryMemoryRouter from './helpers/history-memory-router';
import App from './App';
import createServer from './server/server';

const mount = (el, { onNavigate, isRunInIsolation = false }) => {
  const memoryHistory = createMemoryHistory();

  const root = createRoot(el);

  if (isRunInIsolation) {
    createServer();
    root.render(
      <GoogleOAuthProvider clientId="1091114532318-lf6b2nv5ag7v7babqge929u2lleqc06o.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    );
  } else {
    root.render(
      <GoogleOAuthProvider clientId="1091114532318-lf6b2nv5ag7v7babqge929u2lleqc06o.apps.googleusercontent.com">
        <HistoryMemoryRouter history={memoryHistory}>
          <App onNavigate={onNavigate} />
        </HistoryMemoryRouter>
      </GoogleOAuthProvider>
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
