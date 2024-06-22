export let siteMetadata = {
  siteUrl: 'https://www.saliktehmi.com',
  siteRepo: 'https://github.com/saliktehami',
  siteLogo: '/static/images/Salik.svg',
  image: '/static/images/Salik.svg',
  socialBanner: '/static/images/logo.jpg',
  email: 'tehami.salik@gmail.com',
  github: 'https://github.com/saliktehami',
  x: 'https://x.com/saliktehami',
  facebook: 'https://facebook.com/',
  youtube: 'https://www.youtube.com/',
  linkedin: 'https://www.linkedin.com/in/saliktehami',
  locale: 'en-US',
  analyticsURL: 'https://www.google.com',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '2df62ae5-7f13-455b-8e54-c15b96ff2b8b',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'saliktehami',
    linkedin: 'saliktehami',
    x: 'saliktehami',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
