## Learning MongoDB using MVC architecture

Creating a CRUD API for a blog

#### Tips Nodejs 20.6

Créer son fichier .env à la racine comme avant

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
