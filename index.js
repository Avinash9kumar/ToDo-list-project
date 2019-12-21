const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/',require('./routes'));
 
//set up the view engine
app.set('view engin','ejs');
app.set('views','./views');


app.listen(port,function(err){

if(err){
    
    console.log(`Error in running the server: ${err}`);
             return;
       }
console.log(`server is running on port : ${port}`);


});