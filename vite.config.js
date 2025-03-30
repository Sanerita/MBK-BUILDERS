import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile } from 'node:fs/promises';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic'
    })
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      },
      plugins: [
        {
          name: 'fix-react',
          setup(build) {
            build.onLoad({ filter: /react-dom/ }, async (args) => ({
              contents: await readFile(args.path, 'utf8'),
              loader: 'jsx'
            }));
          }
        }
      ]
    }
  }
});