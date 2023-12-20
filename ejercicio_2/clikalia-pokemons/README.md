<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This application is for [Clikalia](https://clikalia.com/) Nodejs Backend Developer job position. I choose using [Nest](https://github.com/nestjs/nest) framework with TypeScript because it has a CLI to quickly start programming with a nice scaffold project starter.

## Installation

```bash
$ npm install
```

## Commands

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Comments about decisions during development

## NestJs Framework & Typescript

- I don't have any real work experience with NestJs framework but It was fun to start quickly with programming. I think its a very strong framework to build scalable y mantenable server side applications using typescript. I took **NPM** and **Express** to be more familiar but you can also use **YARN** and **Fastify**, so I think it's compatible with all Nodejs developers.
- Use of Decorators to give logic to the Controller, Service and other classes only putting the decorator function. Very useful.
- It gaves you prettier for formatting the code and you can modified the rules with file **'.prettierrc'** so merge would be easy.
- Also esLint configuration to identify and fix problems with Typescript during the build. Best practices are important to prevent errors and get better code quality. You can modify the esLint configuration with file **'.eslintrc.js'**
- Finally Nestjs put in this new version the **Strict mode with Typescript** so we can't use **ANY** type.

## Modularization and Decoupled architechture

- I generate 2 module to each Payment Gateway. Each one has it's own service layer so we can be decoupled from the controller. The controller has a factory to know which service it's required to execute the request.
- Use of Interfaces and Clasess provided by using Typescript to enhance code quality.
- If in the future we want to add another way of payment we can generate another module, each service, dto, entity class and we only have to add to the Enum class in order to get in done.
- The Core module of the app it's Global, so we can access it cross the entire application. This is useful to make core classes and Domain definitions.

## Swagger

- OpenApi documentation with Swagger that you can access by http://localhost:3000/doc
- All the endpoints with example to execute the request with the information about responses and request body if needed.
- Schema information about DTO with detail information about each property

## Testing

- Under the folder **"test"** it will execute every file with **"spec.ts"** ending name.
- I'm using **Jest** and **Supertest** to make all the tests, E2E, Unit Test and Integration Test.

## Exception

Using Nest we are catching all the exception and with a Global Excepction Class which is default, but if we want we can create a custom exception filter class and make the response the shape we want, with error information, error code, status code and everything we want. So if any request the response it's a 401, nestjs will catch this with a UnauthorizedException class.

## Docker

- I made **Dockerfile** to generate an image and run in a container. This makes it easy to deploy and scale. In the future we can also integrate with **Kubernates** and **Pipelines** to generate **CI/CD** in **AWS** or any **cloud services**.
- I put a **.dockerignore** file to ignore files and folders during image creation.

```bash
# Command to build the docker image
$ docker build -t clikalia .

# Command to run the container from image in a port we want
$ docker run -p80:3000
```

## Postman

- In order to test the application I put **json file "Clikalia.postman_collection.json" to import the collection** with the request and test json body. The file is in the root project.
