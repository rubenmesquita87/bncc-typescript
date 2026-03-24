import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Usuarios } from 'src/database/entities/usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    JwtModule.register({
      secret: String(process.env.JWT_SECRET),
      signOptions: { expiresIn: '7 days' },
    }),
    TypeOrmModule.forFeature([Usuarios]),
    UsuariosModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
