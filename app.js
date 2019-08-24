var express = require("express");
var app = express();
var path= require('path');
app.use('/static',express.static('Public'))

app.get("/",function(req,res){
   res.sendfile(path.join(__dirname,'/Colorgame.html'));
 
});


const port =process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
  });

 