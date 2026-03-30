import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsuariosService } from './usuarios.service';
import { CreateUsuariosDto } from './dto/create.usuarios.dto';
import { UpdateUsuariosDto } from './dto/update.usuarios.dto';

@UseGuards(JwtAuthGuard)
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUsuariosDto: CreateUsuariosDto) {
    return this.usuariosService.create(createUsuariosDto);
  }

  @Get()
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id_usuario')
  async findOne(@Param('id_usuario') id_usuario: number) {
    return this.usuariosService.findOne(id_usuario);
  }

  @Patch(':id_usuario')
  async update(
    @Param() id_usuario: number,
    @Body() updateUsuariosDto: UpdateUsuariosDto,
  ) {
    return this.usuariosService.update(id_usuario, updateUsuariosDto);
  }

  @Delete(':id_usuario')
  async delete(@Param() id_usuario: number) {
    return this.usuariosService.delete(id_usuario);
  }
}
