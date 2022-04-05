const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index.ejs',);
})

app.get('/about', function(req, res){
  res.render('about.ejs',);
})

app.get('/portfolio', function(req, res){
  res.render('portfolio.ejs',);
})

app.get('/contact', function(req, res){
  res.render('contact.ejs',);
})


let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully Listening to port 3000");
  }
})
