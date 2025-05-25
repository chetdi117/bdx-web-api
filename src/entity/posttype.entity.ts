import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Post, User } from '.';

@Entity('posttype')
export class PostType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ nullable: true })
  createDate!: Date;

  @Column()
  updateDate!: Date;

  @ManyToOne(() => User, (user) => user.postTypes)
  user!: User;

  @OneToMany(() => Post, (post) => post.postType)
  posts!: Post[];
}
