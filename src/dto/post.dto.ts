import { ImageDTO, PostSetting } from '.';
import { Category, PostType, User } from '../entity';

export class PostDto {
  id!: number;

  title!: string;

  content!: string;

  description!: string;

  createDate!: Date;

  updateDate!: Date;

  location!: string;

  price!: string;

  address!: string;

  district!: string;

  ward!: string;

  city!: string;

  endDate!: Date;

  postTypeId!: number;

  categoryId!: number;

  userId!: number;

  slug!: string;

  category!: Category;

  user!: User;

  postType!: PostType;

  images!: ImageDTO[];
  image!: ImageDTO;

  settings!: PostSetting[];
}
