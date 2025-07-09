import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContentMedia extends Struct.ComponentSchema {
  collectionName: 'components_content_content_medias';
  info: {
    displayName: 'Content-Media';
    icon: 'landscape';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'audios' | 'videos'>;
  };
}

export interface ContentContentText extends Struct.ComponentSchema {
  collectionName: 'components_content_content_texts';
  info: {
    displayName: 'Content-Text';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content-media': ContentContentMedia;
      'content.content-text': ContentContentText;
    }
  }
}
