import '../css/app.css';
import './bootstrap';

import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Ledger';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    ),
  setup({el, App, props}) {
    const root = createRoot(el);

    root.render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    );
  },
  progress: {
    color: '#4B5563',
  },
  defaults: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visitOptions: (href, options) => {
      return {viewTransition: true};
    },
  },
});
