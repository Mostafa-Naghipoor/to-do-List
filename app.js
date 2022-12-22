const express = require("express");
const morgan = require("morgan")
const bodyParser = require("body-parser");

const app = express();
app.use(morgan("combined"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html" );
});

app.listen(3000, function(){
    console.log("server started on port 3000 😎");
})
