![1667125615708](image/README/1667125615708.png)

## About

Application in Node.js using the sequelize package to make a CRUD of posts.

Endpoints are connected to a database following Rest principles.

The relationship between user and post is worked, so user and login are required. each post belongs to one or more categories, thus working the relationship between post and category.

Route protection with jwt token is also worked.

## Learnings

* Structuring an application in layer
* Delegate specific responsibilities to this layer
* Understand and apply REST standards
* Write signatures for intuitive and easily understandable APIs.
* work with user authentication with jwt
* validations of data received through joi

## Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)&nbsp;
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)&nbsp;
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)&nbsp;
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)&nbsp;
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)&nbsp;
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)&nbsp;
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## Installation

* *Clone the repository*

```
git@github.com:SamuelS00/Blogs-Api.git
```

* *After cloning the repository, install the dependencies:*

```
yarn install
```

or

```
npm install
```

* *Then proceed with the creation of your .Env file to store your environment variables, just like:*

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=blogs_api
PORT=3000
```

### Docker

* *Before you start, your docker-compose needs to be at version 1.29 or higher. See here or in the documentation how to install it. In the first article, you can replace where you are with 1.26.0 with 1.29.2.*
* to run the application containers use the command below:

```
docker exec -it store_manager bash
```

* From here you can run the blogs_api container via CLI or open it in VS Code:

```
docker exec -it blogs_api bash
```

### Usage

* run prestart command to populate the tables in the database:

```
npm run prestart
```

* to run the application use the command below:

```
npm start
```

or

```
yarn test
```

* to run all tests use the command below:

```
npm test
```

### Documentation

* To access the API documentation go to https://localhost:3000/api-docs;

![1667127216928](image/README/1667127216928.png)
