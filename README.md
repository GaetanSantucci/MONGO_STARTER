## Learning MongoDB using MVC architecture

Creating a CRUD API for a blog

### Techno

MongoDB 6.1
Nodejs 20.6
Express 4.19

You need install mongodb to use local database for this example, if you don't have it, you can follow the instructions here:
https://www.mongodb.com/docs/v3.0/introduction/

or install chocolatey and install these packages:

`choco install mongodb`
`choco install mongodb-shell`
`choco install mongodb-compass`

after mongo is ok, you can dl this repo and launch it 🚀

`npm init -y`

add you `.env` file to set your connexion string and your port

`npm run dev`

Enjoy !

#### Tips Nodejs 20.6

Create your .env file at the root as before

Example of my .env file
==> `MONGO_URL="mongodb://localhost:27017/"`

Example of my index.js file:
`const url = process.env.MONGO_URL` same writing as with the dotenv package

==> for Node to take the env file into account, you must execute the script like this:

`node --env-file .env index.js`

with nodemon :
`nodemon --env-file .env src/index.js`

This will support env file 🚀🚀🚀
