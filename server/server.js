const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const locationsRouter = require('./routes/locations');
var cors = require('cors')


const app = express();
const port = process.env.PORT || 4001;
app.use(cors())

app.use(bodyParser.json())
app.use('/locationList', locationsRouter)

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", function(req, res) {
  console.log('console.log inside my server.js')
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// app.get('/', (req, res) => {
//   res.send('Welcome to our server!')
// })

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});




// 'use strict'; 

// var express = require('express');

// var app = express();

// app.get("/", function(req, res){
//     res.status(200).send("Hello from PawzDown");
// });

// var server = app.listen(process.env.PORT || '5000', function(){
//     console.log('App listening on port %s', server.address().port);
//     console.log('Press Ctrl+C to quit');
// })