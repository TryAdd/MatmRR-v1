const express = require('expresss');
const mongoose = require('mongoose');

const port = 4000
const app = express();


app.listen(port, () =>{
    console.log(`listening on ${port}`);
    mongoose.connect("connected to mongodb")
});