import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rolepermission')
export class RolePermission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  rolePermission!: number;

  @Column({ nullable: true })
  roleId!: number;
}
