import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'srcbook-error-reporter',
      transform(src: string, id: string) {
        if (id === '/app/src/main.tsx') {
          return `
            ${src}
            if (process.env.NODE_ENV === 'development') {
              // Report any vite-hmr errors up to the parent srcbook app context
              // Full event list: https://vite.dev/guide/api-hmr.html
              if (import.meta.hot) {
                import.meta.hot.on('vite:error', (data) => {
                  if (window.parent) {
                    window.parent.postMessage({ type: 'vite:hmr:error', data }, '*');
                  }
                });
                import.meta.hot.on('vite:beforeUpdate', (data) => {
                  if (window.parent) {
                    window.parent.postMessage({ type: 'vite:hmr:beforeUpdate', data }, '*');
                  }
                });
                import.meta.hot.on('vite:afterUpdate', (data) => {
                  if (window.parent) {
                    window.parent.postMessage({ type: 'vite:hmr:afterUpdate', data }, '*');
                  }
                });
              }

              // Report any logs, errors, etc to the parent srcbook app context to include in
              // the bottom panel.
              for (const method of ['log', 'debug', 'info', 'error', 'warn']) {
                const originalFn = console[method];
                console[method] = function(...args) {
                  window.parent.postMessage({ type: 'console', method, args: args.map(a => \`\${a}\`) }, '*');
                  return originalFn(...args);
                };
              }

              // Report any thrown errors / promise rejections so they show up in the bottom panel logs
              window.addEventListener('error', (e) => {
                if (window.parent) {
                  window.parent.postMessage({ type: 'error', stack: e.error.stack }, '*');
                }
              });
              window.addEventListener('unhandledrejection', (e) => {
                if (window.parent) {
                  window.parent.postMessage({ type: 'unhandledrejection', reason: e.reason }, '*');
                }
              });
            }
          `;
        }
      },
    }
  ],
});
