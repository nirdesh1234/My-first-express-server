const express = require("express");
const app = express();
app.get("/",function (req , res){
    // console.log(request);
    res.send("hello");
} );

app.get("/about", function(req ,res){
    res.send("This is my brief intro");
});

app.listen(3000 , function(){
    console.log("server started on port 3000");
} );

