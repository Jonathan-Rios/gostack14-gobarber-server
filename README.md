# Para executar o projeto do zero
    Rode o comando yarn, para instalar todas as dependências.

    Instale os bancos no Docker, e 

## Instalando PostGres no Docker
    docker run --name gostack-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
## Instalando MongoDB no Docker
    docker run --name mongodb -p 27017:27017 -d -t mongo
## Instalando Redis no Docker
    docker run --name redis -p 6379:6379 -d -t redis:alpine

## Migrations
    - Crie (DBeaver) o banco no postgres chamado "gostack_gobarber"

    - Execute as migrations
        yarn typeorm migration:run // Executar as migrations