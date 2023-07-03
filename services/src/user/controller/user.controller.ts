import { Controller, Get, Inject, Query, ValidationPipe, Param, Post, Body } from '@nestjs/common'
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from '@server/user/service/user.service'
import { QueryUserDto } from '@server/user/dto/query-user.dto'
import { CreateUserDto } from '@server/user/dto/create-user.dto'
import { UserRODTO } from '@server/user/dto/user-ro.dto'
import { config } from '@server/config/general'
import { USER_SERVICE } from '@server/constaint'

@ApiTags('users'.toUpperCase())
@ApiHeader({
  name: `${config.NAME}-User`,
  description: 'User Service',
})
@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: UserService,
  ) {}

  @Get('/')
  @ApiResponse({ status: 200, description: 'Get user success' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findUsersByQuery(@Query(ValidationPipe) dto: QueryUserDto): Promise<UserRODTO[]> {
    return this.userService.findUsersByQuery(dto)
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Get user success' })
  @ApiResponse({ status: 200, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findUserById(@Param('id') id: string): Promise<UserRODTO> {
    return this.userService.findUserById(id)
  }

  @Post('/')
  @ApiResponse({ status: 200, description: 'Get user success' })
  @ApiResponse({ status: 200, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  createUser(@Body(ValidationPipe) dto: CreateUserDto): Promise<UserRODTO> {
    return this.userService.createUser(dto)
  }
}
