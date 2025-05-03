import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post, User } from '.';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column()
  createDate!: Date;

  @Column({ nullable: true })
  updateDate!: Date;

  @OneToMany(() => Post, (post) => post.category) // One category can have many posts
  posts!: Post[];

  @ManyToOne(() => User, (user) => user.categories)
  user!: User;
}
