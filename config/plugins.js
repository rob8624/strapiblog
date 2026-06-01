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
 'tiptap-editor': {
  config: {
      presets: {
        // A minimal preset for short-form content like titles or captions
        minimal: {
          bold: true,
          italic: true,
          underline: true,
        },

        // A standard preset for blog posts and articles
        standard: {
          bold: true,
          italic: true,
          underline: true,
          strike: true,
          heading: true,
          bulletList: true,
          orderedList: true,
          blockquote: true,
          link: true,
        },

        // A full preset with every feature enabled
        full: {
          bold: true,
          italic: true,
          underline: true,
          strike: true,
          code: true,
          codeBlock: true,
          heading: true,
          blockquote: true,
          bulletList: true,
          orderedList: true,
          link: true,
          table: true,
          textAlign: true,
          superscript: true,
          subscript: true,
          mediaLibrary: true,
        },
      },
},
},

});
