const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"

  };
  var day = today.toLocaleDateString("en-us", options);

 res.render("list", {kindOfDay: day, newListItems: items});
});  

app.post("/", function(req,res){
 let item = req.body.newItem;
 items.push(item);
  res.redirect("/");
});

app.listen(3000, function(){
    console.log("server started on port 3000 😎");
})
