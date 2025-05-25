import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity';
import { Repository } from 'typeorm';
import { HashString, StringHelper } from '../helpers';
import { LoginUserFrm, RegisterUserFrm } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly hashString: HashString,
  ) {}

  async loginUser(loginUserFrm: LoginUserFrm): Promise<User> {
    const { email, password } = loginUserFrm;
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await this.hashString.comparePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    return user;
  }

  async registerUser(userFrm: RegisterUserFrm): Promise<User> {
    const checkUser = await this.userRepository.findOne({
      where: { email: userFrm.email },
    });
    if (checkUser) {
      throw new Error('Email already exists');
    }
    const user = new User();
    user.email = userFrm.email;
    user.fullName = userFrm.fullName;
    user.password = await this.hashString.hashPassword(userFrm.password);
    user.phone = userFrm.phone;
    user.address = userFrm.address;
    user.district = userFrm.district;
    user.ward = userFrm.ward;
    user.city = userFrm.city;
    user.createDate = new Date();
    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async getAllUsers(query: string = ''): Promise<User[]> {
    if (query) {
      query = StringHelper.removePunctuation(query);
      return this.userRepository
        .createQueryBuilder('user')
        .where('user.fullname LIKE :query', { query: `%${query}%` })
        .orWhere('user.email LIKE :query', { query: `%${query}%` })
        .getMany();
    }
    return this.userRepository.find();
  }

  async updateUser(
    id: number,
    userFrm: Partial<RegisterUserFrm>,
  ): Promise<User> {
    const existingUser = await this.userRepository.findOneBy({ id });
    if (!existingUser) {
      throw new Error('User not found');
    }
    let passWord = existingUser.password;
    if (userFrm.password) {
      passWord = await this.hashString.hashPassword(userFrm.password);
    }
    const updateUser: User = {
      ...existingUser,
      email: userFrm.email || existingUser.email,
      password: passWord,
      fullName: userFrm.fullName || existingUser.fullName,
      phone: userFrm?.phone || existingUser.phone,
      address: userFrm?.address || existingUser.address,
      district: userFrm.district || existingUser.district,
      ward: userFrm.ward || existingUser.ward,
      city: userFrm.city || existingUser.city,
      updateDate: new Date(),
    };

    return this.userRepository.save(updateUser);
  }

  async deleteUser(id: number): Promise<number> {
    const existingUser = await this.userRepository.findOneBy({ id });
    if (!existingUser) {
      throw new Error('User not found');
    }
    await this.userRepository.delete(id);
    return id;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const existingUser = await this.userRepository.findOneBy({ email });
    if (!existingUser) {
      throw new Error('User not found');
    }
    return existingUser;
  }
}
