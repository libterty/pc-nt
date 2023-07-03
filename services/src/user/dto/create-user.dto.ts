import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator'

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
  @IsString()
  @IsEmail()
  public email: string

  @ApiProperty()
  @IsString()
  public password: string
}
