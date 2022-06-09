import {defineConfig} from 'vite';
import {viteExternalsPlugin} from 'vite-plugin-externals';
import virtualHtml from 'vite-plugin-virtual-html';

import {getVirtualHtmlPages} from './ViteConfigData';

export default defineConfig(({_, mode}) => {
  if (mode === 'production') {
    return {
      css: {
        modules: {
          scopeBehaviour: 'local',
          localsConvention: 'camelCase'
        }
      },
      // 静态资源开发目录
      publicDir: '/publi/assets',
      build: {
        outDir: './dist',
        // 静态资源输出目录
        assetsDir: './assets'
      },
      plugins: [
        viteExternalsPlugin({
          react: 'React',
          'react-dom/client': 'ReactDOM'
        }),
        virtualHtml({
          pages: getVirtualHtmlPages('production')
        })
      ]
    };
  }

  if (mode === 'development') {
    return {
      mode: 'development',
      css: {
        modules: {
          scopeBehaviour: 'local',
          localsConvention: 'camelCase'
        }
      },
      // 静态资源开发目录
      publicDir: '/publi/assets',
      server: {
        open: true,
        hmr: true
      },
      plugins: [
        virtualHtml({
          pages: getVirtualHtmlPages('development'),
          indexPage: 'index'
        })
      ]
    };
  }
});
