import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';
@InputType()
export class UpdateProgrammerDTO {
  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  name: string;

  @IsEmail()
  @IsOptional()
  @Field({ nullable: true })
  email: string;
}
