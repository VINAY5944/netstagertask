const express=require('express');

const dotenv=require('dotenv')
const cors=require('cors');
const connection = require('./connection');
const router = require('./Route/routes');






connection()
const app=express()
app.use(express.json());
app.use(cors())
////cors should be before router
app.use("/",router)


dotenv.config()
const port=process.env.port||5000
app.listen(port,console.log(`server is running on port ${port}`));
