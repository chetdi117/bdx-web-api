import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserFrm {
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  email!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  password!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  fullName!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  phone!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  address!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  district!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  ward!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  city!: string;
}

export class LoginUserFrm {
  @ApiProperty({
    type: String,
    description: 'quocvu@1235.com',
  })
  email!: string;
  @ApiProperty({
    type: String,
  })
  password!: string;
}
export class UserDto {
  @ApiProperty({
    type: String,
  })
  id!: number;

  @ApiProperty({
    type: String,
  })
  fullName!: string;

  @ApiProperty({
    type: String,
  })
  email!: string;

  @ApiProperty({
    type: Date,
  })
  createDate!: Date;

  @ApiProperty({
    type: Date,
  })
  updateDate!: Date;

  @ApiProperty({
    type: String,
  })
  avatar!: string;

  @ApiProperty({
    type: String,
  })
  password!: string;

  @ApiProperty({
    type: String,
  })
  phone!: string;

  @ApiProperty({
    type: String,
  })
  address!: string;

  @ApiProperty({
    type: String,
  })
  district!: string;

  @ApiProperty({
    type: String,
  })
  ward!: string;

  @ApiProperty({
    type: String,
  })
  city!: string;

  @ApiProperty({
    type: Date,
  })
  birthdate!: Date;
}

export class UserAuth {
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  email!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  fullName!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  role: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  permissions: string;
}
