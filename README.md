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

Migrations Criadas
    yarn typeorm migration:create -n CreateAppointments // Criando a migration
    yarn typeorm migration:create -n CreateUsers // Criando a migration
    yarn typeorm migration:create -n AddAvatarFieldToUsers

    yarn typeorm migration:run // Executar as migrations

    docker run --name gostack-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
