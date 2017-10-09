const express = require('express');
const http= require('http');
const app = express();

app.use('/', function(req,res){

});
http.createServer(app).listen();