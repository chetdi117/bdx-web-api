import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Permission, User } from '.';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ default: new Date() })
  createDate!: Date;

  @Column({ nullable: true })
  updateDate!: Date;

  @ManyToMany(() => Permission, (permission) => permission.roles) // Many-to-Many with Role
  permissions!: Permission[];

  @ManyToMany(() => User, (user) => user.roles) // Many-to-Many with Role
  users!: User[];
}
