import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { Category, PostType, Role } from '.';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'fullname', length: 255 })
  fullName!: string;

  @Column({ name: 'email' })
  email!: string;

  @Column({ name: 'createdate' })
  createDate!: Date;

  @Column({ name: 'updatedate', nullable: true })
  updateDate!: Date;

  @Column({ nullable: true })
  avatar!: string;

  @Column()
  password!: string;

  @Column({ nullable: true, length: 10 })
  phone!: string;

  @Column({ nullable: true })
  address!: string;

  @Column({ nullable: true })
  district!: string;

  @Column({ nullable: true })
  ward!: string;

  @Column({ nullable: true })
  city!: string;

  @Column({ nullable: true })
  birthdate!: Date;

  @OneToMany(() => Post, (post) => post.user) // One category can have many posts
  posts!: Post[];

  @OneToMany(() => Category, (category) => category.user) // One category can have many posts
  categories!: Category[];

  @OneToMany(() => PostType, (postType) => postType.user) // One category can have many posts
  postTypes!: PostType[];

  @ManyToMany(() => Role, (role) => role.users)
  roles!: Role[];
}
