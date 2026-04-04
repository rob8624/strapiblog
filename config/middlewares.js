module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'https://proxy-event.ckeditor.com'
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com'
          ],
          'script-src': [
            "'self'",
            'https:',
            'http:',
            'https://cdn.ckeditor.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
