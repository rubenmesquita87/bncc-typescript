import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursosDto } from './dto/create-cursos.dto';
import { UpdateCursosDto } from './dto/update-cursos.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  async create(@Body() createCursosDto: CreateCursosDto) {
    return this.cursosService.create(createCursosDto);
  }

  @Get()
  async findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id_curso')
  async findOne(@Param('id_curso') id_curso: number) {
    return this.cursosService.findOne(id_curso);
  }

  @Patch(':id_curso')
  async update(
    @Param('id_curso') id_curso: number,
    @Body() updateCursosDto: UpdateCursosDto,
  ) {
    return this.cursosService.update(id_curso, updateCursosDto);
  }

  @Delete(':id_curso')
  async delete(@Param('id_curso') id_curso: number) {
    return this.cursosService.delete(id_curso);
  }
}
