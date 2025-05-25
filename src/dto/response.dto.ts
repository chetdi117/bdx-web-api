import { ApiProperty } from '@nestjs/swagger';

export class ApiResponse<T> {
  @ApiProperty({
    type: Number, // Kiểu dữ liệu
  })
  statusCode: number;
  @ApiProperty({
    type: String,
  })
  message: string;
  @ApiProperty({
    type: Object,
  })
  data: T;
  success: boolean;
  errorCode: number;
  constructor(
    statusCode: number,
    message: string,
    data: T,
    success: boolean = true,
    errorCode: number = 0,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = success;
    this.errorCode = errorCode;
  }
}

export class BaseAPiResponse<T> {
  @ApiProperty({
    type: Number, // Kiểu dữ liệu
  })
  statusCode: number;
  @ApiProperty({
    type: String,
  })
  message: string;
  @ApiProperty({
    type: Object,
  })
  data: T;
  success: boolean;
  errorCode: number;
}
