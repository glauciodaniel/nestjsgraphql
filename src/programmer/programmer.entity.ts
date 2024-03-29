import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Programmer {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
