import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { ANALYTICS, SITE } from './src/utils/config.ts';
import compressor from 'astro-compressor';
import formDebug from "@astro-utils/forms/dist/integration.js";
import { loadEnv } from "vite";
import supabase from "astro-supabase";
import { nodePolyfills } from 'vite-plugin-node-polyfills'
//import formDebug from "@astro-utils/forms/dist/integration.js";
import node from "@astrojs/node";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];
const { SUPABASE_URL, SUPABASE_ANON_KEY } = loadEnv(
  "",
  process.cwd(),
  "SUPABASE",
);

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'server',
  //outDir: 'K:/old_river/tmp/html',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(),
  supabase({
    supabaseKey: SUPABASE_ANON_KEY,
    supabaseUrl: SUPABASE_URL,
  }),
  formDebug,
  mdx(), react({
    include: ['**/react/*']
  }), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
    }
  }), compress({
    CSS: true,
    HTML: {
      removeAttributeQuotes: true
    },
    Image: true,
    JavaScript: true,
    SVG: true,
    Logger: 1
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), tasks(), compressor({
    gzip: true,
    brotli: true,
    fileExtensions: ['.css', '.js', '.html', '.xml', '.cjs', '.mjs', '.svg', '.txt']
  }), partytown()],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }      
    },
    plugins: [
      nodePolyfills({
        // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
        include: ['path'],
        // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
        exclude: [
          'http', // Excludes the polyfill for `http` and `node:http`.
        ],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Override the default polyfills for specific modules.
        overrides: {
          // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
          fs: 'memfs',
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
    },
  adapter: node({
    mode: "standalone"
  })
});