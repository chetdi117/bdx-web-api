import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Category, PostType, User } from '.';

@Entity('post') // Maps to the "post" table in the database
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  title!: string;

  @Column({ length: 1000, nullable: true })
  content!: string;

  @Column({ length: 500, nullable: true })
  description!: string;

  @Column({ nullable: true })
  images!: string;

  @Column({ nullable: true })
  settings!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn({ nullable: true })
  updateDate!: Date;

  @Column({ nullable: true })
  image!: string;

  @Column({ nullable: true })
  location!: string;

  @Column({ nullable: true })
  price!: string;

  @Column({ nullable: true })
  address!: string;

  @Column({ nullable: true })
  district!: string;

  @Column({ nullable: true })
  ward!: string;

  @Column({ nullable: true })
  city!: string;

  @Column({ nullable: true })
  endDate!: Date;

  @Column({ nullable: true })
  postTypeId!: number | null;

  @Column({ nullable: true })
  slug!: string;

  @ManyToOne(() => Category, (category) => category.posts, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  category!: Category | null;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  user!: User | null;

  @ManyToOne(() => PostType, (postType) => postType.posts, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  postType!: PostType | null;
}
