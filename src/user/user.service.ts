import { Injectable,Inject  } from '@nestjs/common';
import { In, Like, Raw, MongoRepository ,Repository,} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from './user.mongo.entity'
import { FeishuUserInfo } from './feishu/feishu.dto';
@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')private userRepository:Repository<User>
    // @InjectRepository(User) private userRepository:Repository<User>
    // @InjectRepository(User)
    // private userRepository: Repository<User>,
  ){}
  
  createOrSave(user) {
    console.log(1111111111) 
    return this.userRepository.save(user)
   }

   async createOrUpdateByFeishu(feishuUserInfo: FeishuUserInfo) {
    return await this.userRepository.save(feishuUserInfo);
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
