import { ApiProperty } from '@nestjs/swagger';

export class CategoryForm {
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  name!: string;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  description!: string;
}

export class CategoryDto {
  @ApiProperty({
    type: Number, // Kiểu dữ liệu
  })
  id!: number;
  @ApiProperty({
    type: String, // Kiểu dữ liệu
  })
  name!: string;
  @ApiProperty({
    type: Date, // Kiểu dữ liệu
  })
  createDate!: Date;
}
