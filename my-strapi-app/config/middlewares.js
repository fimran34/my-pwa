// config/middlewares.js
module.exports = [
  
  {
    name: 'strapi::errors',
    config: {contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:4321'],}}}
  },
  {
    name: 'strapi::security',
    config: {},
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:4321'], // Add your Astro app URL here
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {},
  },
  {
    name: 'strapi::logger',
    config: {},
  },
  {
    name: 'strapi::query',
    config: {},
  },
  {
    name: 'strapi::body',
    config: {},
  },
  {
    name: 'strapi::session',
    config: {},
  },
  {
    name: 'strapi::favicon',
    config: {},
  },
  {
    name: 'strapi::public',
    config: {},
  },
];
