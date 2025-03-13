import express from "express"   
import dotenv from "dotenv"
import cors from "cors"
import db from "./utlis/db.js"  // so many times we want to write a .js filels also

// import all routes

import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()

app.use(
    cors({
    // here we can write a configriation
    origin:process.env.BASE_URL,
    credentials: true,
    methods : ['GET', 'POST' , 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
})
);

app.use(express.json()) // accept the json from the client

//  remove space from url 
app.use(express.urlencoded({extended:true}))





const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello kunal what up ')
})

app.get('/kunal', (req, res) => {
    res.send('chai and code cohort!')
  })

app.get("/hitesh", (req, res) => {
    res.send("Hitesh is available !")
})

// connect to db

db();

// User routes

app.use("/apiv1/users",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})