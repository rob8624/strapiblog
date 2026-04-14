module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
   'reading-time': {
    enabled: true,
    config: {
      skipUndefinedReferences: true,
      contentTypes: {
        post: {                                // API ID of your collection-type
          field: 'reading_time',                  // the field name for the reading time value in your schema
          references: ['content'], // the names of the fields to extract text from
        },
        // ...
      },
    },
  },
});
