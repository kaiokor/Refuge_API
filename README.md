# Refuge_API 🌏💙

> API criada para fornecer dados ao projeto [Refuge](https://github.com/kaiokor/Refuge)

## 🔎 Descrição

API criada para conectar o Front-End do Refuge e oferecer os dados para serem consumidos por ele. 
Essa API se comunica com um banco de dados MongoDb Atlas, sendo o responsável por fornecer, inserir, excluir e atualizar dados por meio de requisições!

---

## 📋 Sumário

- [Demo](#-demo)  
- [Tecnologias](#-tecnologias)
- [Endpoints](#-endpoints)
- [Funcionalidades](#-funcionalidades)  
- [Como usar](#-como-usar)  
- [Autor](#-autor)

---

## 💻 Demo

> Em desenvolvimento — por enquanto, veja uma prévia em:

> 🔗 Usuários: https://refuge-api.vercel.app/usuarios

> 🔗 Histórico de compras: https://refuge-api.vercel.app/historico

## 🌐 Endpoints
### Usuários
| Método | Rota                                | Descrição                                |
| ------ | ----------------------------------- | ---------------------------------------- |
| GET    | `refuge-api.vercel.app/usuario`     | Listar todos os usuários                 |
| GET    | `refuge-api.vercel.app/usuario/:id` | Obter detalhes de um usuário             |
| POST   | `refuge-api.vercel.app/usuario`     | Criar novo usuário                       |
| PUT    | `refuge-api.vercel.app/usuario/:id` | Atualizar um usuário existente           |
| DELETE | `refuge-api.vercel.app/usuario/:id` | Remover um usuário                       |

### Histórico de compra
| Método | Rota                                  | Descrição                                |
| ------ | ------------------------------------- | ---------------------------------------- |
| GET    | `refuge-api.vercel.app/historico`     | Listar todas históricos de compra        |
| POST   | `refuge-api.vercel.app/historico`     | Criar novo históricos de compra          |
| DELETE | `refuge-api.vercel.app/historico/:id` | Remover um históricos de compra          |

---

## 🛠️ Tecnologias

- **Banco de dados**: MongoDb Atlas
- **Bibliotecas**: Cors, Dotenv, Express, MongoDb, Mongoose, Nodemon
- **Deploy**: Vercel  

---

## ✨ Funcionalidades
- Cadastrar, listar, listar por id, atualizar e excluir usuários do banco no MongoDb
- Cadastrar, listar e excluir históricos de doações efetuadas pelo usuário do banco MongoDb


> **Em construção:** Criptografia de dados para maior segurança

---

## 🚀 Como usar

### Pré-requisitos

- Node.js ≥ 16  
- npm  
- Endereço da API (arquivo `.env` com variável DB_CONNECTION_STRING = LINK_DO_MONGODB_ATLAS)

### Instalação

```bash
# clone o repositório
git clone https://github.com/kaiokor/Refuge_API.git
cd Refuge

# instale dependências
npm install

# rode em modo de desenvolvimento
npm run dev
```

## 👤 Autor
Nome: Kaio Gomes do Nascimento Araújo

GitHub: [Meu GitHub](https://github.com/kaiokor)

LinkedIn: [Meu Perfil](https://www.linkedin.com/in/kaio-gomes-805253282/)

E-mail: [Meu E-mail](mailto:kaiogomes.kor@gmail.com)
