# Bun API - Clean Architecture

Uma API REST moderna construída com **Bun** e **Hono**, seguindo os princípios de **Clean Architecture** e utilizando arquitetura em camadas para garantir separação de responsabilidades, independência de frameworks, testabilidade e manutenibilidade.

## 🏗️ Arquitetura

Este projeto implementa os conceitos fundamentais da **Clean Architecture** organizados nas seguintes camadas, seguindo a regra de dependência onde camadas internas não dependem de camadas externas:

### **🔵 Domain (Camada de Domínio - Mais Interna)**

- **Entities**: Objetos de negócio que encapsulam as regras de negócio mais críticas (`Account`)
- **Contracts**: Definições de contratos para casos de uso (interfaces)
- **Repositories**: Contratos/interfaces para persistência de dados
- ✅ **Independente de frameworks e tecnologias externas**

### **🟢 Application (Camada de Aplicação)**

- **Use Cases**: Implementação das regras de negócio específicas da aplicação
- **Orquestração**: Coordenação entre entidades e repositórios
- ✅ **Depende apenas da camada Domain**
- ✅ **Utiliza injeção de dependência com TSyringe**

### **🟡 Infrastructure (Camada de Infraestrutura - Externa)**

- **Database**: Configuração do Prisma ORM e implementação dos repositórios
- **Repositories**: Implementações concretas dos contratos definidos no Domain
- **External Services**: Integração com APIs externas e serviços
- ✅ **Implementa as interfaces definidas nas camadas internas**

### **🔴 Presentation (Camada de Interface - Mais Externa)**

- **Routes**: Definição de endpoints da API com validação
- **Controllers**: Adapters que convertem dados HTTP para casos de uso
- **Factories**: Factory patterns para criação de instâncias
- **Container**: Configuração de injeção de dependência
- ✅ **Responsável por entregar dados para as camadas internas**

## 🎯 Princípios da Clean Architecture Implementados

- **🔄 Dependency Inversion**: Camadas externas dependem de abstrações das internas
- **🧩 Separation of Concerns**: Cada camada tem uma responsabilidade específica
- **🔒 Independence**: Domain não conhece detalhes de implementação externa
- **🧪 Testability**: Facilita testes unitários e de integração
- **🔧 Framework Independence**: Pode trocar frameworks sem afetar regras de negócio

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
- ✅ Clean Architecture
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
├── domain/                 # 🔵 Camada de Domínio (Mais Interna)
│   ├── entities/          # Entidades de negócio
│   ├── repositories/      # Contratos de repositório
│   └── contracts/         # Contratos de casos de uso
├── application/           # 🟢 Camada de Aplicação
│   └── usecases/         # Casos de uso/regras de negócio
├── infra/                # 🟡 Camada de Infraestrutura (Externa)
│   └── database/         # Configurações de banco e repositórios
├── presentation/         # 🔴 Camada de Interface (Mais Externa)
│   ├── hono/            # Configuração do framework web
│   ├── routes/          # Definição de rotas
│   ├── factories/       # Factories para casos de uso
│   └── container/       # Configuração de DI
└── main.ts              # Ponto de entrada da aplicação
```

### **Fluxo de Dependências (Clean Architecture):**

```
Presentation → Application → Domain
     ↓              ↓          ↑
Infrastructure ────────────────┘
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
- **Clean Architecture**: Separação clara de responsabilidades e independência de frameworks
- **Interface Segregation**: Interfaces específicas e focadas
- **Single Responsibility**: Cada classe tem uma única responsabilidade

---

**Criado com ❤️ usando Bun v1.2.19**
