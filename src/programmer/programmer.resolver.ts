import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProgrammerService } from './programmer.service';
import { Programmer } from './programmer.entity';
import { CreateProgrammerDTO } from './dto/createProgrammer.dto';
import { UpdateProgrammerDTO } from './dto/updateProgrammer.dto';

@Resolver('Programmer')
export class ProgrammerResolver {
  constructor(private programmerService: ProgrammerService) {}

  @Query(() => [Programmer])
  async programmers(): Promise<Programmer[]> {
    const programmers = await this.programmerService.findAllProgrammers();
    return programmers;
  }
  @Query(() => Programmer)
  async programmer(@Args('id') id: string): Promise<Programmer> {
    const programmer = await this.programmerService.findProgrammerById(id);
    return programmer;
  }

  @Mutation(() => Programmer)
  async createProgrammer(
    @Args('data') data: CreateProgrammerDTO,
  ): Promise<Programmer> {
    const programmer = await this.programmerService.createProgrammer(data);
    return programmer;
  }

  @Mutation(() => Programmer)
  async updateProgrammer(
    @Args('id') id: string,
    @Args('data') data: UpdateProgrammerDTO,
  ): Promise<Programmer> {
    const programmer = this.programmerService.updateProgrammer(id, data);
    return programmer;
  }
}
