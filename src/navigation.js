import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Админка',
      links: [
        {
          text: 'Теплоход',
          href: getPermalink('/admin/ship'),
        },
        {
          text: 'Тест',
          href: getPermalink('/admin/tst'),
        },
      ],
    },
    {
      text: 'Компания',
      links: [
        {
          text: 'Облачные решения',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Стартап',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Мобильное приложение',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Сотрудники',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Страницы',
      links: [
        {
          text: 'Особенности',
          href: getPermalink('/#features'),
        },
        {
          text: 'Круизный флот',
          href: getPermalink('/ships'),
        },
        {
          text: 'Сервисы',
          href: getPermalink('/services'),
        },
        {
          text: 'Цены',
          href: getPermalink('/pricing'),
        },
        {
          text: 'О нас',
          href: getPermalink('/about'),
        },
        {
          text: 'Контакты',
          href: getPermalink('/contact'),
        },
        {
          text: 'Условия и правила',
          href: getPermalink('/terms'),
        },
        {
          text: 'Политика конфиденциальности',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Лендинги',
      links: [
        {
          text: 'Лидогенерация',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Долгосрочные продажи',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Переход по ссылке',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Подробно о продуктах',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Дорожная карта',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Подписка',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Блог',
      links: [
        {
          text: 'Список блогов',
          href: getBlogPermalink(),
        },
        {
          text: 'Статьи',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Статьи (с MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Категории страниц',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Тэги страниц',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Загрузить', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Продукты',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Платформы',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Поддержка',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Условия', href: getPermalink('/terms') },
    { text: 'Политика конфиденциальности', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Сделано <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://websturm.ru/"> Веб Штурм</a> · Права защищены.
  `,
};
