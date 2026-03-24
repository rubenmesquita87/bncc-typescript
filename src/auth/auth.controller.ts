import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { AuthService } from './auth.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtGuard } from './jwt.guard';
import { AuthUser } from './auth-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuariosService: UsuariosService,
  ) {}

  @Post('login')
  async login(@Body() { email, senha }: AuthLoginDto) {
    return await this.authService.login(email, senha);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return await this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDto) {
    return await this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { senha, token }: AuthResetDto) {
    return await this.authService.reset(senha, token);
  }

  @Get('me')
  @UseGuards(JwtGuard)
  async me(@AuthUser() user: any) {
    return user;
  }
}
