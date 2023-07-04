import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsEmail, MaxLength, MinLength, IsOptional } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(1, {
    message: 'User name cannot be empty',
  })
  @MaxLength(255, {
    message: 'User name too long',
  })
  public name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(1, {
    message: 'User nick name cannot be empty',
  })
  @MaxLength(255, {
    message: 'User nick name too long',
  })
  public nickName: string

  @ApiProperty()
  @IsString()
  @IsEmail()
  public email: string

  @ApiProperty()
  @IsString()
  public password: string
}
