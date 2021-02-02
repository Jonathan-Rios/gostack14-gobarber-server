# COMANDOS UTILIZADOS

  yarn init  -y
  yarn add express
  yarn add typescript -D
  yarn tsc --init
  yarn add @types/express -D
  yarn add ts-node-dev -D
  yarn add uuidv4
  yarn add date-fns ( Ferramenta que controla data e horários dentro do JavaScript Front/Back-end )
  yarn add typeorm pg
  yarn add reflect-metadata
  yarn add bcryptjs
  yarn add @types/bcryptjs -D
  yarn add jsonwebtoken
  yarn add -D @types/jsonwebtoken
  yarn add multer
  yarn add -D @types/multer
  yarn add express-async-errors
  yarn add cors
  yarn add tsconfig-paths -D // permite ler os @modules, configurado no tsconfig.json
  yarn add tsyringe // Injeção de dependências

  yarn add jest -D
  yarn add ts-jest -D
  yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript // Remove os Erros de Import Modules

  yarn add nodemailer // Ferramenta de envio de emails
  yarn add @types/nodemailer -D

  yarn add handlebars // Template de E-mails

  yarn add mongodb

  yarn add @types/mongodb -D

  yarn add celebrate // Validação de Rotas
  yarn add -D @types/hapi__joi // O celebrate utiliza internamente o Joi

  yarn add class-transformer // Realiza tratativas para impedir que campos como Password sejam visíveis ( substitui o mapping improvisado que eu tinha feito )

  yarn add aws-sdk // Envio de E-mail

  yarn add mime

  yarn add ioredis// Driver que suporta Promises do Redis
  yarn add @types/ioredis -D

  yarn add rate-limiter-flexible //Prevenir Contra Brute-Force
  yarn add redis // vamos utilizar o core do Redis, para auxiliar no rate-limiter
  yarn add  @types/redis -D

## Migrations Criadas
    yarn typeorm migration:create -n CreateAppointments // Criando a migration
    yarn typeorm migration:create -n CreateUsers // Criando a migration
    yarn typeorm migration:create -n AddAvatarFieldToUsers
    yarn typeorm migration:create -n CreateUserTokens
    yarn typeorm migration:create -n AddUserIdToAppointments

    yarn typeorm migration:run // Executar as migrations
    yarn typeorm migration:revert // reverter ultima migration

## Instalando PostGres no Docker
    docker run --name gostack-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
## Instalando MongoDB no Docker
    docker run --name mongodb -p 27017:27017 -d -t mongo
