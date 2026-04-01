import type { Schema, Struct } from '@strapi/strapi';

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
    displayName: 'Hero';
  };
  attributes: {
    Text: Schema.Attribute.Text;
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
      'ui.footer': UiFooter;
      'ui.header': UiHeader;
      'ui.hero': UiHero;
      'ui.link': UiLink;
    }
  }
}
