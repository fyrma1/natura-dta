var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/html/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.listen(3000);
console.log('Listening on port 3000');
