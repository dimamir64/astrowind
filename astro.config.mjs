import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';
import astroI18next from "astro-i18next";

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

import node from '@astrojs/node';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import matomo from 'astro-matomo';
import supabase from 'astro-supabase';
//import sentry from "@sentry/astro"; 
//import spotlightjs from "@spotlightjs/astro";
//import svelte from "@astrojs/svelte";
import sentry from '@sentry/astro';
import svelte from '@astrojs/svelte';
//import supabaseIntegration from "astro-supabase";
//console.log(loadEnv("", process.cwd(), "PUBLIC"));
import { loadEnv } from 'vite';
const { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } = loadEnv('', process.cwd(), 'PUBLIC');
//console.log('SUPABASE_URL, SUPABASE_ANON_KEY ', PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  /*i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
  },*/
  server: {
    host: 'localhost',
    port: parseInt(process.env.PORT, 10) || 3000
  },
  output: 'server',
  //outDir: 'K:/old_river/tmp/html', static hybrid
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    matomo({
      enabled: true,
      //import.meta.env.PROD, // Only load in production
      host: 'https://matomo.cons.dm64.ru',
      setCookieDomain: '*.matomo.cons.dm64.ru',
      trackerUrl: '/matomo.php',
      // defaults to matomo.php
      srcUrl: '/matomo.js',
      // defaults to matomo.js
      siteId: 5,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: false,
    }),
    sitemap(),
    supabase({ supabaseUrl: PUBLIC_SUPABASE_URL, supabaseKey: PUBLIC_SUPABASE_ANON_KEY }),
    mdx(),
    react({
      include: ['**/react/*'],
    }),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
    tasks(),
    compressor({
      gzip: true,
      brotli: true,
      fileExtensions: ['.css', '.js', '.html', '.xml', '.cjs', '.mjs', '.svg', '.txt'],
    }),
    partytown(),
    //sentry(), spotlightjs()
    //  , svelte()
    sentry({
      dsn: 'https://5ee778cedab65f2550791689e3290660@o4506636469075968.ingest.sentry.io/4506636472418304',
      sourceMapsUploadOptions: {
        project: 'javascript-astro',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    svelte(),
    //supabaseIntegration({    supabaseUrl: SUPABASE_URL,    supabaseKey: SUPABASE_ANON_KEY  })
  ],
  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  adapter: node({
    mode: 'standalone',
  }),
});
