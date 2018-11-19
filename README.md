# The Society

## Required software

1. Docker 
2. pgAdmin

## Installation 

1. Clone this repository to your local machine
2. Run "Docker Quickstart Terminal"
3. In your Terminal or Command Line, change the directory to 

```
/RootDir/server/prisma
```

4. Run the following command
```
docker-compose up -d
```
Wait until your http://localhost:4466 (on Mac) or http://192.168.99.100:4466 (on Windows) is up, then run the following command
```
prisma deploy
```

## Start the server and client
1. In your Terminal or Command Line, change the directory to 

```
/RootDir/server/
```
2. Run
```
npm run dev
```
3. Then, change the directory to 

```
/RootDir/client/
```
4. Run
```
npm run dev
```
5. Server is up on http://localhost:1234/
6. GraphQL Playground is up on http://localhost:4000/
7. GraphQL Prisma Playground Server is up on http://localhost:4466 (on Mac) or http://192.168.99.100:4466 (on Windows)
