# 🚀 Guia Completo - API BNCC com Postman

## ✅ Status da API
- ✅ **JWT implementado** - Autenticação completa
- ✅ **Todas as rotas criadas** - 12 módulos BNCC
- ✅ **Collection Postman** - Arquivo completo criado
- ✅ **Build passando** - Projeto compilando sem erros

---

## 📥 Importando no Postman

### Passo 1: Abra o Postman
- Baixe e instale o Postman se não tiver

### Passo 2: Importe a Collection
1. Clique em **"File"** → **"Import"**
2. Selecione **"File"**
3. Navegue até: `c:\Users\ruben\bncc-typescript\BNCC_API.postman_collection.json`
4. Clique em **"Open"** → **"Import"**

### Passo 3: Configure as Variáveis
1. Na Collection **"BNCC API Completa - NestJS"**, clique nos **3 pontos** → **"Edit"**
2. Vá na aba **"Variables"**
3. Configure:
   - `base_url` = `http://localhost:3000`
   - `token` = deixe vazio (será preenchido automaticamente)

---

## 🔐 Fluxo de Autenticação

### 1️⃣ Registrar Usuário
```
POST {{base_url}}/auth/register
```
**Body:**
```json
{
  "id_usuario": 1,
  "usuario": "admin",
  "email": "admin@bncc.com",
  "senha": "senha123"
}
```

### 2️⃣ Fazer Login
```
POST {{base_url}}/auth/login
```
**Body:**
```json
{
  "email": "admin@bncc.com",
  "senha": "senha123"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3️⃣ Copiar Token
- Copie o `accessToken` do response
- Na Collection, clique nos **3 pontos** → **"Edit"** → **"Variables"**
- Cole o token na variável `token`

### 4️⃣ Testar Autenticação
```
GET {{base_url}}/auth/me
```
**Headers:** `Authorization: Bearer {{token}}`

**Response esperado:**
```json
{
  "id_usuario": 1,
  "usuario": "admin",
  "email": "admin@bncc.com"
}
```

---

## 📚 Todas as Rotas Disponíveis

### 🔐 **Autenticação** (`/auth`)
- `POST /auth/register` - Registrar usuário
- `POST /auth/login` - Fazer login
- `POST /auth/forget` - Esqueci senha
- `POST /auth/reset` - Resetar senha
- `GET /auth/me` - Dados do usuário (protegido)

### 👥 **Usuários** (`/usuarios`) - *Protegido*
- `GET /usuarios` - Listar todos
- `GET /usuarios/:id` - Obter por ID
- `POST /usuarios` - Criar
- `PATCH /usuarios/:id` - Atualizar
- `DELETE /usuarios/:id` - Deletar

### 📚 **Cursos** (`/cursos`) - *Público*
- `GET /cursos` - Listar todos
- `GET /cursos/:id` - Obter por ID
- `POST /cursos` - Criar
- `PATCH /cursos/:id` - Atualizar
- `DELETE /cursos/:id` - Deletar

### 🧩 **Componentes** (`/componentes`) - *Público*
- `GET /componentes` - Listar todos
- `GET /componentes/:id` - Obter por ID
- `POST /componentes` - Criar
- `PATCH /componentes/:id` - Atualizar
- `DELETE /componentes/:id` - Deletar

### 📈 **Etapas** (`/etapas`) - *Público*
- `GET /etapas` - Listar todas
- `GET /etapas/:id` - Obter por ID
- `POST /etapas` - Criar
- `PATCH /etapas/:id` - Atualizar
- `DELETE /etapas/:id` - Deletar

### 🎯 **Área de Conhecimentos** (`/area-conhecimentos`) - *Público*
- `GET /area-conhecimentos` - Listar todas
- `GET /area-conhecimentos/:id` - Obter por ID
- `POST /area-conhecimentos` - Criar
- `PATCH /area-conhecimentos/:id` - Atualizar
- `DELETE /area-conhecimentos/:id` - Deletar

### 🌍 **Campos de Experiência** (`/campos-experiencia`) - *Público*
- `GET /campos-experiencia` - Listar todos
- `GET /campos-experiencia/:id` - Obter por ID
- `POST /campos-experiencia` - Criar
- `PATCH /campos-experiencia/:id` - Atualizar
- `DELETE /campos-experiencia/:id` - Deletar

### ⚖️ **Direitos de Aprendizagem** (`/direitos-aprendizagem`) - *Público*
- `GET /direitos-aprendizagem` - Listar todos
- `GET /direitos-aprendizagem/:id` - Obter por ID
- `POST /direitos-aprendizagem` - Criar
- `PATCH /direitos-aprendizagem/:id` - Atualizar
- `DELETE /direitos-aprendizagem/:id` - Deletar

### 🎯 **Competências Gerais** (`/competencia-geral`) - *Público*
- `GET /competencia-geral` - Listar todas
- `GET /competencia-geral/:id` - Obter por ID
- `POST /competencia-geral` - Criar
- `PATCH /competencia-geral/:id` - Atualizar
- `DELETE /competencia-geral/:id` - Deletar

### 🔧 **Competências de Componente** (`/competencia-componente`) - *Público*
- `GET /competencia-componente` - Listar todas
- `GET /competencia-componente/:id` - Obter por ID
- `POST /competencia-componente` - Criar
- `PATCH /competencia-componente/:id` - Atualizar
- `DELETE /competencia-componente/:id` - Deletar

### 🎨 **Competências de Área** (`/competencia-area`) - *Público*
- `GET /competencia-area` - Listar todas
- `GET /competencia-area/:id` - Obter por ID
- `POST /competencia-area` - Criar
- `PATCH /competencia-area/:id` - Atualizar
- `DELETE /competencia-area/:id` - Deletar

### 📖 **BNCC Fundamental** (`/bncc-fundamental`) - *Público*
- `GET /bncc-fundamental` - Listar todos
- `GET /bncc-fundamental/:id` - Obter por ID
- `POST /bncc-fundamental` - Criar
- `PATCH /bncc-fundamental/:id` - Atualizar
- `DELETE /bncc-fundamental/:id` - Deletar

### 👶 **BNCC Infantil** (`/bncc-infantil`) - *Público*
- `GET /bncc-infantil` - Listar todos
- `GET /bncc-infantil/:id` - Obter por ID
- `POST /bncc-infantil` - Criar
- `PATCH /bncc-infantil/:id` - Atualizar
- `DELETE /bncc-infantil/:id` - Deletar

### 🎓 **BNCC Médio** (`/bncc-medio`) - *Público*
- `GET /bncc-medio` - Listar todos
- `GET /bncc-medio/:id` - Obter por ID
- `POST /bncc-medio` - Criar
- `PATCH /bncc-medio/:id` - Atualizar
- `DELETE /bncc-medio/:id` - Deletar

---

## 🎯 Como Usar

### 1️⃣ Inicie o Servidor
```bash
npm run start:dev
```

### 2️⃣ Configure o Banco
Certifique-se que o MySQL está rodando com a database `bncc`.

### 3️⃣ Teste no Postman
1. Importe a collection
2. Configure as variáveis
3. Comece pelos endpoints de autenticação
4. Teste os demais módulos

---

## 🔑 Sobre Autenticação

- **Público**: Endpoints que não precisam de token
- **Protegido**: Endpoints que precisam do header `Authorization: Bearer {{token}}`
- **Token**: Válido por 7 dias (configurado no JWT)

---

## 📝 Exemplos de Dados

### Criar um Curso
```json
{
  "id_curso": 1,
  "nome": "Ensino Fundamental",
  "codigo_censo": "EF01",
  "idade_regular": "6-10 anos",
  "acronimo": "EF",
  "tem_retencao": 1
}
```

### Criar um Componente
```json
{
  "id_componente": 1,
  "nome": "Língua Portuguesa",
  "codigo_censo": "LP01",
  "serie": "1ª Série",
  "carga_horaria": 120
}
```

---

## ✅ Checklist Final

- ✅ Collection Postman criada
- ✅ Todas as rotas incluídas
- ✅ Autenticação JWT configurada
- ✅ Exemplos de requests
- ✅ Variáveis configuradas
- ✅ Documentação completa

**Sua API está 100% pronta para testes!** 🎉