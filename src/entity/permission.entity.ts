import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Role } from '.';

@Entity('permission')
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ default: new Date() })
  createDate!: Date;

  @Column({ nullable: true })
  updateDate!: Date;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles!: Role[];
}
