import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import * as uuid from 'uuid';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @BeforeInsert()
  addId() {
    this.id = uuid();
    console.log('*************************', this.id);
  }
}
