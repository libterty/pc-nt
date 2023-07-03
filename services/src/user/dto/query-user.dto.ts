import { ApiProperty } from '@nestjs/swagger'
import { IsString, MaxLength, MinLength, IsOptional } from 'class-validator'

export class QueryUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(1, {
    message: 'Keyword cannot be empty',
  })
  @MaxLength(255, {
    message: 'Keyword too long',
  })
  public keyword?: string
}
