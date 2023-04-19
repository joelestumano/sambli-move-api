import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { UserCreateDto } from './dtos/user-create.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  private logger = new Logger(UserService.name);

  async create(userCreateDto: UserCreateDto): Promise<User> {
    const { email } = userCreateDto;
    const userFind = await this.userModel.findOne({ email }).exec();
    if (userFind) {
      throw new BadRequestException(`The email ${email} cannot be used`);
    }
    //userCreateDto.password = bcrypt.hashSync(userCreateDto.password, 10)
    const user = await new this.userModel(userCreateDto).save();
    return user;
  }
}
