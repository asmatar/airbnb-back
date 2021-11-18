
// initialize express
const express = require('express')
// using express for our app
const app = express()
// import dotenv from 'dotenv/config';
// initialize dotenv package to use env variable
require('dotenv').config();
const cors = require('cors');
app.use(cors());
// require project modules
const router = require('./server/app/routers');
// when we'll send a request, it will take the information of the body resquest an attached it to the body request
app.use(express.json())
// initialize the router
app.use(router);
// when we'll send a request, it will take the information of the body resquest an attached it to the body request
app.use(express.json())
//initialize the port and the server
const port = process.env.PORT || 3001
app.listen(port, ()=> {
    console.log(`server is up on port ${port}`)
})
