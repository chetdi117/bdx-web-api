import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 255, nullable: true })
  icon!: string;

  @Column()
  parentId!: number;

  @Column({ default: 0, nullable: true })
  order!: number;

  @Column({ default: '', nullable: true })
  permission!: string;

  @Column({ default: true, nullable: true })
  display!: boolean;

  @Column({ default: '', nullable: true })
  url!: string;

  @Column()
  createDate!: Date;

  @Column({ nullable: true })
  updateDate!: Date;
}
