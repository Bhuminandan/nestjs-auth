import { Role } from 'src/role/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mobile_number: string;

  @Column()
  username: string;

  @Column({ nullable: true, unique: true })
  email: string | null;

  @Column()
  password: string;

  @Column({ nullable: true })
  password_reset_token: string | null;

  @Column({ nullable: true })
  last_login: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Role, (role) => role.user)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
