import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaConhecimentosModule } from './area-conhecimentos/area-conhecimentos.module';
import { ComponentesModule } from './componentes/componentes.module';
import { CursosModule } from './cursos/cursos.module';
import { EtapasModule } from './etapas/etapas.module';
import { CamposExperienciaModule } from './campos-experiencia/campos-experiencia.module';
import { DireitosAprendizagemModule } from './direitos-aprendizagem/direitos-aprendizagem.module';
import { CompetenciaGeralModule } from './competencia-geral/competencia-geral.module';
import { CompetenciaComponenteModule } from './competencia-componente/competencia-componente.module';
import { CompetenciaAreaModule } from './competencia-area/competencia-area.module';
import { BnccFundamentalModule } from './bncc-fundamental/bncc-fundamental.module';
import { BnccInfantilModule } from './bncc-infantil/bncc-infantil.module';
import { BnccMedioModule } from './bncc-medio/bncc-medio.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaConhecimentos } from './database/entities/area-conhecimentos.entity';
import { BnccFundamental } from './database/entities/bncc-fundamental.entity';
import { BnccInfantil } from './database/entities/bncc-infantil.entity';
import { BnccMedio } from './database/entities/bncc-medio.entity';
import { CamposExperiencia } from './database/entities/campos-experiencia.entity';
import { CompetenciaArea } from './database/entities/competencia-area.entity';
import { CompetenciaComponente } from './database/entities/competencia-componente.entity';
import { CompetenciaGeral } from './database/entities/competencia-geral.entity';
import { Componentes } from './database/entities/componentes.entity';
import { Cursos } from './database/entities/cursos.entity';
import { DireitosAprendizagem } from './database/entities/direitos-aprendizagem.entity';
import { Etapas } from './database/entities/etapas.entity';
import { Usuarios } from './database/entities/usuarios.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        AreaConhecimentos,
        BnccFundamental,
        BnccInfantil,
        BnccMedio,
        CamposExperiencia,
        CompetenciaArea,
        CompetenciaComponente,
        CompetenciaGeral,
        Componentes,
        Cursos,
        DireitosAprendizagem,
        Etapas,
        Usuarios,
      ],
      synchronize: false,
      migrations: [`${__dirname}/database/migrations/{.ts,*.js}`],
      migrationsRun: true,
    }),
    DatabaseModule,
    AreaConhecimentosModule,
    ComponentesModule,
    CursosModule,
    EtapasModule,
    CamposExperienciaModule,
    DireitosAprendizagemModule,
    CompetenciaGeralModule,
    CompetenciaComponenteModule,
    CompetenciaAreaModule,
    BnccFundamentalModule,
    BnccInfantilModule,
    BnccMedioModule,
    AuthModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
