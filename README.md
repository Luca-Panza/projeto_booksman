# <p align = "center"> Books Man</p>

<p align="center">
   <img width=176px; src="https://cdn.icon-icons.com/icons2/1465/PNG/512/713openbook_100531.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/authors-Luca_Panza_&_Jefti_Meira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/Luca-Panza/projeto_booksman?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

This project is a back-end book management API built using the Express framework in Node.js, with TypeScript, and Prisma for database operations. The API enables users to track the books they've read and, upon completing a book, allows them to provide ratings and reviews. In the context of this project, the application is intended for use by a single user, providing them with the means to organize their readings and document their opinions on the books they've read.
***

## :computer:	 Technologies and Concepts

- REST APIs
- JavaScript
- Node.js
- Express.js
- Prisma
- Typescript
- Postgres SQL

***

## :rocket: Endpoints

```yml
POST /books
    - Endpoint to create a book
    - headers: {}
    - body:{
      "title": "Lorem ipsum",
      "author": "Lorem ipsum",
      "publisher": "Lorem ipsum",
      "purchaseDate": "DD-MM-YYYY"
    }
```
    
```yml 
POST /books/reviews
    - Endpoint for submitting a book review
    - headers: {}
    - body: {
      "bookId": number,
      "grade": number,
      "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
```
    
```yml 
GET /books 
    - Endpoint to list all the books
    - headers: {}
```

```yml 
GET /books/:id 
    - Endpoint to get a by id
    - params: {
      "id": number
      }
    - headers: {}
    - body: {}
```

***

## 🏁 Running the application

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/), [npm](https://www.npmjs.com/) and [postgresql](https://www.postgresql.org/) running locally.

First, clone this repository on your machine:

```

git clone https://github.com/Luca-Panza/projeto_booksman

```

Then, navigate to the project folder and install the dependencies with the following command:

```

npm install

```

In the terminal, run the Prisma commands to create the PostgreSQL database on your machine.

```

npx prisma generate && npx prisma migrate dev

```

Once the process is finished, just start the server.

```

npm start

```

Or to test on a production server.

```

npm run dev

```
