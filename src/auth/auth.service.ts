import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { Usuarios } from 'src/database/entities/usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuariosService: UsuariosService,
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  createToken(usuario: Usuarios) {
    return {
      accessToken: this.jwtService.sign(
        {
          id_usuario: usuario.id_usuario,
          usuario: usuario.usuario,
          email: usuario.email,
        },
        {
          expiresIn: '7 days',
          subject: String(usuario.id_usuario),
          issuer: 'login',
          audience: 'usuarios',
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: 'login',
        audience: 'usuarios',
      });

      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }

  async login(email: string, senha: string) {
    try {
      const usuario = await this.usuariosRepository.findOne({
        where: {
          email,
          senha,
        },
      });

      if (!usuario) {
        console.error(`Usuário não encontrado: ${email}`);
        throw new UnauthorizedException('Email/senha incorretos!');
      }

      console.log(`Login bem-sucedido para: ${email}`);
      return this.createToken(usuario);
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      console.error('Erro ao fazer login:', error);
      throw new UnauthorizedException('Erro ao fazer login');
    }
  }

  async forget(email: string) {
    const usuario = await this.usuariosRepository.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException('Email incorreto!');
    }

    const token = this.jwtService.sign(
      {
        id_usuario: usuario.id_usuario,
      },
      {
        expiresIn: '60 minutes',
        subject: String(usuario.id_usuario),
        issuer: 'forget',
        audience: 'usuarios',
      },
    );

    return token;
  }

  async reset(senha: string, token: string) {
    try {
      const data: any = await this.jwtService.verify(token, {
        issuer: 'forget',
        audience: 'usuarios',
      });

      if (isNaN(Number(data.id_usuario))) {
        throw new BadRequestException('Token está inválido.');
      }

      const usuario = await this.usuariosRepository.findOne(data.id_usuario);
      if (!usuario) {
        throw new UnauthorizedException('Token inválido!');
      }

      usuario.senha = senha;
      await this.usuariosRepository.save(usuario);

      return this.createToken(usuario);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async register(data: AuthRegisterDto) {
    const user = await this.usuariosService.create(data);

    return this.createToken(user);
  }
}
