- Anotações e dicas

docker container run --name anr_saas -e POSTGRES_PASSWORD=anr_saas_pwd -e POSTGRES_USER=anr_saas_user -e POSTGRES_DB=anr_saas -d -p 5432:5432 postgres

docker container ls -a
docker container stop anr_saas
docker container rm anr_saas
docker container rm -f anr_saas

docker container prune
docker container exec -it /bin/bash anr_saas

=============================

npm i express
npm i typescript @types/express prisma tsx -D
mkdir src
touch src/server.ts
npx tsc --init
npx prisma init

# .env

DATABASE_URL="postgresql://anr_saas_user:anr_saas_pwd@localhost:5432/anr_saas?schema=public"

# schema.prisma

model Organization {
id String @id @default(uuid())
name String
email String
password String
phone String

@@map("organizations")
}

npx prisma migrate dev --name create-organizations
npx prisma studio
ou
dbeaver
