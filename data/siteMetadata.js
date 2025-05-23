/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Justin\'s Blog',
  author: 'Justin Ji',
  headerTitle: 'TailwindBlog',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://thegamingmousse.github.io/blog',
  siteRepo: 'https://github.com/thegamingmousse/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'justinjiv1.0@gmail.com',
  github: 'https://github.com/thegamingmousse',
  locale: 'en-US',

  // set to true if you want a navbar fixed to the top
  stickyNav: false,

  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },

  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
