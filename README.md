# Bun API - Domain Driven Design

Uma API REST moderna construída com **Bun** e **Hono**, seguindo os princípios de **Domain-Driven Design (DDD)** e utilizando arquitetura em camadas para garantir separação de responsabilidades, testabilidade e manutenibilidade.

## 🏗️ Arquitetura

Este projeto implementa os conceitos fundamentais do DDD organizados nas seguintes camadas:

### **Domain (Domínio)**

- **Entities**: Objetos de negócio com identidade única (`Account`)
- **Repositories**: Contratos/interfaces para persistência de dados
- **Contracts**: Definições de contratos para casos de uso

### **Application (Aplicação)**

- **Use Cases**: Implementação das regras de negócio e orquestração de operações
- Utiliza injeção de dependência com **TSyringe**

### **Infrastructure (Infraestrutura)**

- **Database**: Configuração do Prisma ORM e implementação dos repositórios
- **Repositories**: Implementações concretas dos contratos de repositório

### **Presentation (Apresentação)**

- **Routes**: Definição de endpoints da API com validação
- **Factories**: Factory patterns para criação de instâncias
- **Container**: Configuração de injeção de dependência

## 🚀 Tecnologias

- **[Bun](https://bun.sh/)**: Runtime JavaScript ultra-rápido
- **[Hono](https://hono.dev/)**: Framework web minimalista e performático
- **[Zod](https://zod.dev/)**: Validação de schema TypeScript-first
- **[Prisma](https://www.prisma.io/)**: ORM moderno para TypeScript
- **[TSyringe](https://github.com/microsoft/tsyringe)**: Container de injeção de dependência
- **SQLite**: Banco de dados para desenvolvimento
- **OpenAPI/Swagger**: Documentação automática da API

## 📋 Funcionalidades

- ✅ CRUD de contas (Accounts)
- ✅ Documentação automática com OpenAPI/Swagger
- ✅ Validação de dados com Zod
- ✅ Injeção de dependência
- ✅ Arquitetura DDD
- ✅ TypeScript

## 🛠️ Instalação e Execução

### Pré-requisitos

- Bun v1.2.19 ou superior

### Instalação das dependências

```bash
bun install
```

### Configuração do banco de dados

```bash
# Gerar o cliente Prisma
bunx prisma generate

# Executar migrações
bunx prisma migrate dev
```

### Execução

```bash
# Desenvolvimento
bun run index.ts

# Ou usando o arquivo principal
bun run src/main.ts
```

A API estará disponível em `http://localhost:3000`

## 📖 Documentação

Acesse a documentação interativa da API em:

- **Swagger UI**: `http://localhost:3000/`
- **OpenAPI Spec**: `http://localhost:3000/openapi`

## 🗂️ Estrutura do Projeto

```
src/
├── domain/                 # Camada de Domínio
│   ├── entities/          # Entidades de negócio
│   ├── repositories/      # Contratos de repositório
│   └── contracts/         # Contratos de casos de uso
├── application/           # Camada de Aplicação
│   └── usecases/         # Casos de uso/regras de negócio
├── infra/                # Camada de Infraestrutura
│   └── database/         # Configurações de banco e repositórios
├── presentation/         # Camada de Apresentação
│   ├── hono/            # Configuração do framework web
│   ├── routes/          # Definição de rotas
│   ├── factories/       # Factories para casos de uso
│   └── container/       # Configuração de DI
└── main.ts              # Ponto de entrada da aplicação
```

## 🔄 Endpoints Disponíveis

### Accounts

- `GET /accounts` - Listar todas as contas
- `POST /accounts` - Criar nova conta

### Exemplo de requisição:

```bash
# Criar conta
curl -X POST http://localhost:3000/accounts \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva"}'

# Listar contas
curl http://localhost:3000/accounts
```

## 🧪 Desenvolvimento

### Scripts disponíveis

```bash
# Executar em modo de desenvolvimento
bun run index.ts

# Gerar cliente Prisma
bunx prisma generate

# Executar migrações
bunx prisma migrate dev

# Visualizar banco de dados
bunx prisma studio
```

## 📝 Padrões Implementados

- **Repository Pattern**: Abstração da camada de dados
- **Use Case Pattern**: Encapsulamento de regras de negócio
- **Dependency Injection**: Inversão de controle e baixo acoplamento
- **Factory Pattern**: Criação centralizada de instâncias
- **Clean Architecture**: Separação clara de responsabilidades

---

**Criado com ❤️ usando Bun v1.2.19**
