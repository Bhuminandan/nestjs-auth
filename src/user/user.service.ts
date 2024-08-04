import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOneUser(_options: FindOneOptions<User>) {
    return this.userRepository.findOne(_options);
  }

  async findUsers(_options: FindManyOptions<User>) {
    return this.userRepository.find(_options);
  }

  async validateUser(_email: string, _password: string): Promise<User> | null {
    const user = await this.userRepository.findOne({
      relations: { role: true },
      where: { email: _email },
    });

    if (!user) {
      throw new BadRequestException({
        is_success: false,
        message: 'User not found',
      });
    }

    const isPasswordMatch = await bcrypt.compare(_password, user.password);

    if (user && isPasswordMatch) {
      return user;
    }

    return null;
  }

  async updateLastLogin(_userid: number) {
    const lastLogin = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    await this.userRepository.update(
      { id: _userid },
      { last_login: lastLogin },
    );
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
