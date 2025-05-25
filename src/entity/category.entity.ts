import {
  Column,
  Entity,
  JoinColumn,
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

  @Column({ name: 'createdate' })
  createDate!: Date;

  @Column({ name: 'userid' })
  userId: number;

  @Column({ name: 'updatedate', nullable: true })
  updateDate!: Date;

  @OneToMany(() => Post, (post) => post.category) // One category can have many posts
  posts!: Post[];

  @ManyToOne(() => User, (user) => user.categories)
  @JoinColumn({ name: 'userid' })
  user!: User;
}
