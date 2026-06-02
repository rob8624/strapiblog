import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDoubleImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_double_images';
  info: {
    displayName: 'double-image';
  };
  attributes: {
    images: Schema.Attribute.Component<'blocks.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    settings: Schema.Attribute.Component<'settings.image-settings', false>;
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
    content: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::tiptap-editor.RichText',
        {
          preset: 'full';
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

export interface SettingsImageSettings extends Struct.ComponentSchema {
  collectionName: 'components_settings_image_settings';
  info: {
    displayName: 'image settings';
  };
  attributes: {
    border: Schema.Attribute.Boolean;
    captionbrackets: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    captiontextposition: Schema.Attribute.Enumeration<
      ['top', 'bottom', 'left', 'right']
    >;
    credit: Schema.Attribute.String;
    offset: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rounded: Schema.Attribute.Enumeration<['small', 'medium', 'large']>;
  };
}

export interface SettingsSeo extends Struct.ComponentSchema {
  collectionName: 'components_settings_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalurl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    noindex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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
    social_links: Schema.Attribute.Component<'ui.socials', true>;
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
    text: Schema.Attribute.Text &
      Schema.Attribute.CustomField<'plugin::tiptap-editor.RichText'>;
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

export interface UiNews extends Struct.ComponentSchema {
  collectionName: 'components_ui_news';
  info: {
    displayName: 'news';
  };
  attributes: {
    content: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::tiptap-editor.RichText',
        {
          preset: 'full';
        }
      >;
  };
}

export interface UiSocials extends Struct.ComponentSchema {
  collectionName: 'components_ui_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'github', 'instagram']
    >;
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
      'settings.image-settings': SettingsImageSettings;
      'settings.seo': SettingsSeo;
      'ui.footer': UiFooter;
      'ui.header': UiHeader;
      'ui.hero': UiHero;
      'ui.infocard': UiInfocard;
      'ui.link': UiLink;
      'ui.news': UiNews;
      'ui.socials': UiSocials;
    }
  }
}
