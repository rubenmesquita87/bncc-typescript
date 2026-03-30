import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    console.log('JWT Strategy validando payload:', payload);
    
    if (!payload || !payload.id_usuario) {
      console.error('Payload inválido:', payload);
      throw new UnauthorizedException('Token inválido');
    }
    
    try {
      const user = await this.usuariosService.findOne(payload.id_usuario);
      
      if (!user) {
        console.error(`Usuário não encontrado: ${payload.id_usuario}`);
        throw new UnauthorizedException('Usuário não encontrado');
      }
      
      console.log('Usuário autenticado:', user.id_usuario);
      return user;
    } catch (error) {
      console.error('Erro ao validar token:', error);
      throw new UnauthorizedException('Erro ao validar token');
    }
  }
}