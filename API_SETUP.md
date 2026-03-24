# 🚀 Guia de Setup da API BNCC

## ✅ Status Atual
- ✅ Dependências instaladas
- ✅ Arquivo `.env` configurado
- ✅ Projecto pronto para rodar

## 📋 Configuração do Banco de Dados

Suas variáveis de ambiente estão configuradas em `.env`:
```
JWT_SECRET=JWT_SECRET=8fK$2pL9@vQ7xZ!mR4tYgcN6uA1bW0eD
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=admin
DB_DATABASE=bncc
```

### ⚠️ Importante: Configure o Banco de Dados MySQL

Você precisa ter MySQL rodando em sua máquina. Opções:

**Opção 1: MySQL Local**
- Baixe em: https://dev.mysql.com/downloads/mysql/
- Crie a database: `bncc_db`
- Use username: `root` e password: `root`

**Opção 2: Docker**
```bash
docker run --name mysql-bncc -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=bncc_db -p 3306:3306 -d mysql:8.0
```

**Opção 3: Ajustar credenciais**
Se seus dados MySQL são diferentes, edite o arquivo `.env` com suas credenciais reais.

---

## 🎯 Rodar a API

### Desenvolvimento (com watch)
```bash
npm run start:dev
```

### Produção
```bash
npm run build
npm run start:prod
```

### Debug
```bash
npm run start:debug
```

A API estará disponível em: **http://localhost:3000**

---

## 📡 Endpoints Disponíveis

Sua API tem os seguintes módulos:

### 1. **Autenticação** (`/auth`)
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login
- `GET /auth/me` - Dados do usuário autenticado
- `POST /auth/forget` - Recuperar senha

### 2. **Usuários** (`/usuarios`)
- `GET /usuarios` - Listar todos
- `GET /usuarios/:id` - Obter um
- `POST /usuarios` - Criar
- `PATCH /usuarios/:id` - Atualizar
- `DELETE /usuarios/:id` - Deletar

### 3. **Cursos** (`/cursos`)
- `GET /cursos`
- `GET /cursos/:id`
- `POST /cursos`
- `PATCH /cursos/:id`
- `DELETE /cursos/:id`

### 4. **Componentes** (`/componentes`)
- `GET /componentes`
- `GET /componentes/:id`
- `POST /componentes`
- `PATCH /componentes/:id`
- `DELETE /componentes/:id`

### 5. **Etapas** (`/etapas`)
- `GET /etapas`
- `GET /etapas/:id`
- `POST /etapas`
- `PATCH /etapas/:id`
- `DELETE /etapas/:id`

### 6. **Outros Módulos**
- `/area-conhecimentos` - Áreas de conhecimento
- `/campos-experiencia` - Campos de experiência
- `/direitos-aprendizagem` - Direitos de aprendizagem
- `/competencia-geral` - Competências gerais
- `/competencia-componente` - Competências de componentes
- `/competencia-area` - Competências de área
- `/bncc-infantil` - BNCC Infantil
- `/bncc-fundamental` - BNCC Fundamental
- `/bncc-medio` - BNCC Médio

---

## 🧪 Testando no Postman/Insomnia

### 1. Criar nova Collection
- Abra **Postman** ou **Insomnia**
- Clique em "Create New Collection" → "BNCC API"

### 2. Exemplos de Requisições

#### Registrar novo usuário
```http
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "email": "teste@example.com",
  "password": "senha123",
  "nome": "Teste"
}
```

#### Fazer Login
```http
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "teste@example.com",
  "password": "senha123"
}
```

#### Obter dados do usuário autenticado
```http
GET http://localhost:3000/auth/me
Authorization: Bearer {seu-token-aqui}
```

#### Listar todos os cursos
```http
GET http://localhost:3000/cursos
```

#### Criar novo curso
```http
POST http://localhost:3000/cursos
Content-Type: application/json

{
  "nome": "Curso PHP",
  "descricao": "Aprenda PHP"
}
```

---

## 🔑 Autenticação com JWT

Após fazer login, você receberá um token JWT no response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Para usar em outros endpoints:
- **Postman**: Vá para "Authorization" → Tipo "Bearer Token" → Cole o token
- **Insomnia**: Vá para a aba "Auth" → Tipo "Bearer Token" → Cole o token

---

## 📊 Estrutura do Projeto

```
src/
├── main.ts                 # Entrada da aplicação
├── app.module.ts           # Módulo principal
├── app.controller.ts       # Controller principal
├── app.service.ts          # Service principal
├── auth/                   # Módulo de autenticação
├── usuarios/               # Módulo de usuários
├── cursos/                 # Módulo de cursos
├── componentes/            # Módulo de componentes
├── etapas/                 # Módulo de etapas
├── database/               # Configuração do banco de dados
│   ├── entities/           # Entidades TypeORM
│   └── migrations/         # Migrations
└── [outros módulos]        # Demais módulos BNCC
```

---

## ✨ Próximas Etapas

1. Configure o MySQL conforme instruções acima
2. Execute: `npm run start:dev`
3. Teste os endpoints no Postman/Insomnia
4. Use os exemplos acima como base

---

## 🆘 Troubleshooting

**Erro: "connect ECONNREFUSED 127.0.0.1:3306"**
- MySQL não está rodando
- Verifique se MySQL está iniciado
- Confirme host, porta e credenciais no `.env`

**Erro: "database bncc_db does not exist"**
- Crie manualmente com: `CREATE DATABASE bncc_db;`

**Erro de validação**
- Confirme que os dados enviados correspondem aos DTOs

---

Boa sorte com sua API! 🎉
