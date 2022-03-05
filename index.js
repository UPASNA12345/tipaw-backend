const express = require('express');
var cors = require('cors');
const  bodyParser = require('body-parser') ;
require('dotenv/config');
const mongoose= require('mongoose');

const userRoutes = require('./route/users')

const app = express()
const PORT = process.env.PORT || 4000;
//CONNECTION_URL = "mongodb://localhost:27017/tipawData?readPreference=primary&appname=MongoDB%20Compass&ssl=false"



app.use(express.json()) ;
app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes);

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, ()=> console.log(`App is running on ${PORT}`)))
  .catch((err) => console.log(err.message));


