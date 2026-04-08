import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDoubleImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_double_images';
  info: {
    displayName: 'double-image';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzY0NzAzOTksImp0aSI6IjY5NzdmNGE3LWY1NTEtNGRmNS05Njk4LTcyMmIxYjJiNzcyMiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjA1YmVjMmI2In0.Z-xQnA3qRH61IKVHEEXzquNJ1v6hgpPTOz6jZeWUZSj2EdF_N-1fjeHMTdnfoopmB9V2wZKhMsMhthwxcUkurw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface BlocksVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    url: Schema.Attribute.String;
  };
}

export interface UiFooter extends Struct.ComponentSchema {
  collectionName: 'components_ui_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface UiHeader extends Struct.ComponentSchema {
  collectionName: 'components_ui_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    link: Schema.Attribute.Component<'ui.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface UiHero extends Struct.ComponentSchema {
  collectionName: 'components_ui_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface UiInfocard extends Struct.ComponentSchema {
  collectionName: 'components_ui_infocards';
  info: {
    displayName: 'infocard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.String;
    quoteAuthor: Schema.Attribute.String;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzY0NzAzOTksImp0aSI6IjY5NzdmNGE3LWY1NTEtNGRmNS05Njk4LTcyMmIxYjJiNzcyMiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjA1YmVjMmI2In0.Z-xQnA3qRH61IKVHEEXzquNJ1v6hgpPTOz6jZeWUZSj2EdF_N-1fjeHMTdnfoopmB9V2wZKhMsMhthwxcUkurw';
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.double-image': BlocksDoubleImage;
      'blocks.gallery': BlocksGallery;
      'blocks.image': BlocksImage;
      'blocks.quote': BlocksQuote;
      'blocks.rich-text': BlocksRichText;
      'blocks.video': BlocksVideo;
      'ui.footer': UiFooter;
      'ui.header': UiHeader;
      'ui.hero': UiHero;
      'ui.infocard': UiInfocard;
      'ui.link': UiLink;
    }
  }
}
