import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Админка',
      links: [
        { text: 'Теплоход', href: getPermalink('/admin/ship'), },
        //{ text: 'Тест', href: getPermalink('/admin/sankey/tst'), },
        //{ text: 'Стр', href: getPermalink('/admin/tst1'), },
        //{ text: 'Стр2', href: getPermalink('/admin/tst2'), },
        //{ text: 'wp', href: getPermalink('/admin/wp'), },
        { text: 'Диаграммы', href: getPermalink('/admin/diagr'), },
        { text: 'Редактор страниц', href: getPermalink('/admin/grapes'), },
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
          text: 'privacy',
          href: getPermalink('privacy', 'post'),
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
        { text: 'Речные круизы', href: '#' },
        { text: 'Речные прогулки', href: '#' },
        { text: 'Морские круизы', href: '#' },
        { text: 'Туры по России', href: '#' },
        { text: 'Зарубежные туры', href: '#' },
      ],
    },
    {
      title: '________________ ',
      links: [
        { text: 'Купить билеты', href: '#' },
        { text: 'Страхование', href: '#' },
        { text: 'Визы и приглашения', href: '#' },
        { text: 'Загран паспорта', href: '#' },
      ],
    },
    {
      title: 'Поддержка',
      links: [
        { text: 'Помощь при бронировании', href: '#' },
        { text: 'Помощь агентствам', href: '#' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { text: 'Новости', href: '/news' },
        { text: 'О компании', href: '/about' },
        { text: 'Блог', href: '/blog' },
        { text: 'Персонал', href: '/personal' },
        { text: 'Контакты', href: '/contact' },
        { text: 'Лицензии', href: '#' },
        { text: 'Вакансии', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Условия', href: getPermalink('/terms') },
    { text: 'Политика конфиденциальности', href: getPermalink('/pol') },
  ],
  socialLinks: [
    { ariaLabel: 'VK', icon: 'tabler:brand-vk', href: 'https://vk.com/sputnikgermes' },
    { ariaLabel: 'TG', icon: 'tabler:brand-telegram', href: 'https://t.me/Puteshestviesnami' },
    //  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Сделано <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://websturm.ru/"> Веб Штурм</a> · Права защищены. 2024
  `,
};
