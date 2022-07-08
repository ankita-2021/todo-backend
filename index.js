const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
// use express.json() to get data into json format
app.use(express.json());

const PORT = process.env.PORT || 5500;

// use cors
app.use(cors());

// Lets import routes
const TodoItemRoute = require('./routes/todoItems.Js');

// Lets connected to mongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);

const port =process.env.PORT || 5500;

// for deployment
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}


// Add Port and connect to server
app.listen(PORT, ()=> console.log("Server connected"));
