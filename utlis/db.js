import mongoose from "mongoose"

import dotenv from 'dotenv';
dotenv.config()


const db = () => {
    mongoose
   .connect(process.env.MONGO_URL) //precastionry
   .then(() => {
    console.log("database connected  to mongo db")
   })
   .catch((error) => {
    console.log("Error connecting to MongoDb", error);
    
   })
}
export default db;
