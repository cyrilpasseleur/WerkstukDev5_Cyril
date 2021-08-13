# Dev5_Werkstuk_cyrilpasseleur

# Getting started

1. Download this repository
2. Install Node using npm install
3. Install docker and start docker-compose
4. Create container and images using --> docker-compose up --build -d
- or
5. Create image in docker --> docker pull IMAGENAME:TAG
6. Start server using --> nodemon server.js

# Terminal Database setup
1. Enter container root by using --> docker exec -it IMAGENAME psql -U root 
2. From here you can 
    - create database DATABASENAME
    - create table TABLENAME(VALUES...)
    - alter table TABLENAME drop/add..


# Endpoints in this project

Activities: GET, POST, DELETE, PUT, PATCH., GET:uuid
Category: GET, POST, DELETE, PUT, PATCH, GET:uuid

- Easy testing using Postman

# Tests 

To test: end-to-end.test, integration.test, unit.test --> npm test

# Integrated frontend 
- In visual studio code, open the 'index.html' with the live browser addon while the server is running. From there you can easely test it 
- out yourself. All created logs from the database will be visible.

# Created With

* [VisualStudioCode](https://code.visualstudio.com/)
* [JEST](https://jestjs.io/en/)
* [Docker](https://docs.docker.com/)
* [Knex](http://knexjs.org/)
* [NPM](https://www.npmjs.com/)
* [Tabelplus](https://tableplus.com/)
* [GithubDesktop](https://desktop.github.com/)
* [Postman](https://www.postman.com/)
* [circleCI](https://circleci.com/)


# Author

* [Cyril Passeleur](https://github.com/cyrilpasseleur)
* Help from [Kevin Shi Ji](https://github.com/KevinJi98)