import { MongoClient } from "mongodb";

//~connexion to mongodb
const url = process.env.CONNEXION_STRING;

const client = new MongoClient(url);

client.connect()
  .then(() => {
    console.log("mongodb connect successfull")
  })
  .catch(() => { console.log("mongodb connect error") })

export { client };