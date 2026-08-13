import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function asyncCssPlugin(): Plugin {
  return {
    name: 'async-css-preload',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html: string) {
        return html.replace(
          /<link rel="stylesheet"([^>]*?)href="([^"]+?\.css)"([^>]*?)>/g,
          '<link rel="preload" href="$2" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"$1$3><noscript><link rel="stylesheet" href="$2"$1$3></noscript>'
        );
      },
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), asyncCssPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
