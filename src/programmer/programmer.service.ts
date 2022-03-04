import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Programmer } from './programmer.entity';
import { CreateProgrammerDTO } from './dto/createProgrammer.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateProgrammerDTO } from './dto/updateProgrammer.dto';

@Injectable()
export class ProgrammerService {
  constructor(
    @InjectRepository(Programmer)
    private programmerRepository: Repository<Programmer>,
  ) {}

  async findAllProgrammers(): Promise<Programmer[]> {
    const programmers = await this.programmerRepository.find();
    return programmers;
  }

  async findProgrammerById(id: string): Promise<Programmer> {
    const programmer = await this.programmerRepository.findOne(id);
    if (!programmer) {
      throw new NotFoundException('Programador não encontrado, contrate um!');
    }

    return programmer;
  }

  async createProgrammer(data: CreateProgrammerDTO): Promise<Programmer> {
    const programmer = await this.programmerRepository.create(data);
    const programmerSaved = await this.programmerRepository.save(programmer);

    if (!programmerSaved) {
      throw new InternalServerErrorException('Falha ao cadastrar programador');
    }
    return programmerSaved;
  }

  async updateProgrammer(
    id: string,
    data: UpdateProgrammerDTO,
  ): Promise<Programmer> {
    const programmer = await this.findProgrammerById(id);

    if (!programmer) {
      throw new NotFoundException('Este usuário não existe');
    }
    await this.programmerRepository.update(programmer, { ...data });
    const programmerUpdated = await this.programmerRepository.create({
      ...programmer,
      ...data,
    });

    return programmerUpdated;
  }
}
