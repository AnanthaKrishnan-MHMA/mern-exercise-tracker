const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_ATLAS_URI;
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('database connected successfuly')
});

const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');
app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})