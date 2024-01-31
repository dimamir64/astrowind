//import fs from 'fs';
import yaml from 'js-yaml';
import merge from 'lodash.merge';
const configyml = `
site:
  name: Спутник-Гермес
  site: 'https://hk.cons.ud63.online/'
  base: '/'
  trailingSlash: false
  googleSiteVerificationId: orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M
metadata:
  title:
    default: Система бронированиия речных круизов
    template: '%s — @Спутник-Гермес 2024'
  description: 'Туроператор «Спутник-Гермес» приглашает в речные круизы выходного дня, эксклюзивные и на прогулки по Волге на теплоходе. Туры от 700 рублей с человека.'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: Спутник-Гермес
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@river'
    site: '@river'
    cardType: summary_large_image
i18n:
  language: ru
  textDirection: ltr
apps:
  blog:
    isEnabled: true
    postsPerPage: 6
    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true
    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true
    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false
analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"
ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  tokens:
    default:
      fonts:
        sans: InterVariable
        serif: var(--ph-font-sans)
        heading: var(--ph-font-sans)
      colors:
        default: rgb(16 16 16)
        heading: rgb(0 0 0)
        muted: rgb(40 40 40)
        bgPage: rgb(255 255 255)
        primary: rgb(0 124 220)
        secondary: rgb(30 58 138)
        accent: rgb(109 40 217)
        info: rgb(119 182 234)
        success: rgb(54 211 153)
        warning: rgb(251 189 35)
        error: rgb(248 114 114)
        link: var(--ph-color-primary)
        linkActive: var(--ph-color-link)
    dark:
      fonts: {}
      colors:
        default: rgb(247, 248, 248)
        heading: rgb(247, 248, 248)
        muted: rgb(200, 188, 208)
        bgPage: rgb(3 6 32)
        primary: rgb(29 78 216)
        secondary: rgb(30 58 138)
        accent: rgb(135 77 2267)
        info: rgb(58 191 248)
        success: rgb(54 211 153)
        warning: rgb(251 189 35)
        error: rgb(248 114 114)
        link: var(--ph-color-primary)
        linkActive: var(--ph-color-link)
`;

import type { MetaData } from '~/types';

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
}
export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string;
    template: string;
  };
}
export interface I18NConfig {
  language: string;
  textDirection: string;
  dateFormatter?: Intl.DateTimeFormat;
}
export interface AppBlogConfig {
  isEnabled: boolean;
  postsPerPage: number;
  isRelatedPostsEnabled: boolean;
  relatedPostsCount: number;
  post: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  list: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  category: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  tag: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}
export interface AnalyticsConfig {
  vendors: {
    googleAnalytics: {
      id?: string;
      partytown?: boolean;
    };
  };
}import type { MetaData } from '~/types';

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
}
export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string;
    template: string;
  };
}
export interface I18NConfig {
  language: string;
  textDirection: string;
  dateFormatter?: Intl.DateTimeFormat;
}
export interface AppBlogConfig {
  isEnabled: boolean;
  postsPerPage: number;
  isRelatedPostsEnabled: boolean;
  relatedPostsCount: number;
  post: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  list: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  category: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  tag: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}
export interface AnalyticsConfig {
  vendors: {
    googleAnalytics: {
      id?: string;
      partytown?: boolean;
    };
  };
}

//const config = yaml.load(fs.readFileSync('src/config.yaml', 'utf8')) as {
const config = yaml.load(configyml) as {
  site?: SiteConfig;
  metadata?: MetaDataConfig;
  i18n?: I18NConfig;
  apps?: {
    blog?: AppBlogConfig;
  };
  ui?: unknown;
  analytics?: unknown;
};

const DEFAULT_SITE_NAME = 'Спутник-Гермес';
const DEFAULT_SITE = 'localhost';

const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: DEFAULT_SITE,
    base: '/',
    trailingSlash: false,

    googleSiteVerificationId: '',
  };

  return merge({}, _default, config?.site ?? {}) as SiteConfig;
};

const getMetadata = () => {
  const siteConfig = getSite();

  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: '%s',
    },
    description: '',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: 'website',
    },
  };

  return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig;
};

const getI18N = () => {
  const _default = {
    language: 'ru',
    textDirection: 'ltr',
  };

  const value = merge({}, _default, config?.i18n ?? {});

  return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }),
  }) as I18NConfig;
};

const getAppBlog = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    isRelatedPostsEnabled: false,
    relatedPostsCount: 4,
    post: {
      isEnabled: true,
      permalink: '/blog/%slug%',
      robots: {
        index: true,
        follow: true,
      },
    },
    list: {
      isEnabled: true,
      pathname: 'blog',
      robots: {
        index: true,
        follow: true,
      },
    },
    category: {
      isEnabled: true,
      pathname: 'category',
      robots: {
        index: true,
        follow: true,
      },
    },
    tag: {
      isEnabled: true,
      pathname: 'tag',
      robots: {
        index: false,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.apps?.blog ?? {}) as AppBlogConfig;
};

const getUI = () => {
  const _default = {
    theme: 'system',
    classes: {},
    tokens: {},
  };

  return merge({}, _default, config?.ui ?? {});
};

const getAnalytics = () => {
  const _default = {
    vendors: {
      googleAnalytics: {
        id: undefined,
        partytown: true,
      },
    },
  };

  return merge({}, _default, config?.analytics ?? {}) as AnalyticsConfig;
};


export const SITE = getSite();
export const I18N = getI18N();
export const METADATA = getMetadata();
export const APP_BLOG = getAppBlog();
export const UI = getUI();
export const ANALYTICS = getAnalytics();

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
export const cookiePrefix = import.meta.env.PUBLIC_SUPABASE_COOKIE_PRE;

export const accessTokenName = `${import.meta.env.PUBLIC_SUPABASE_COOKIE_PRE}-access-token`;
export const refreshTokenName = `${import.meta.env.PUBLIC_SUPABASE_COOKIE_PRE}-refresh-token`;
