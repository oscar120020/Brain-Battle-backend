import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryColumn('text')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  imgUrl: string;
  @Column('int', {
    default: 1,
    nullable: true,
  })
  level?: number;
  @Column('int', {
    nullable: true,
    default: 0,
  })
  expToNextLevel?: number;
  @Column('int', {
    default: 100,
    nullable: true,
  })
  exp?: number;
}