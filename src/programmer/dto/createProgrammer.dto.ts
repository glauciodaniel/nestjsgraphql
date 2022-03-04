import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class CreateProgrammerDTO {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @Field()
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @Field()
  email: string;
}
