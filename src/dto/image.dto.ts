export class ImageDTO {
  id!: string;
  title!: string;
  src!: string;
}

export enum EntityType {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  DATE = 'date',
  TIME = 'time',
  DATETIME = 'datetime',
  FILE = 'file',
  IMAGE = 'image',
  COLOR = 'color',
  Price = 'price',
  URL = 'url',
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
}

export class PostSetting {
  key!: string;
  value!: string | number;
  title!: string;
  type!: EntityType;
}
