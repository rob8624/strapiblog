import type { Schema, Struct } from '@strapi/strapi';

export interface UiFooter extends Struct.ComponentSchema {
  collectionName: 'components_ui_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface UiHeader extends Struct.ComponentSchema {
  collectionName: 'components_ui_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Links: Schema.Attribute.Blocks;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.footer': UiFooter;
      'ui.header': UiHeader;
      'ui.hero': UiHero;
    }
  }
}
