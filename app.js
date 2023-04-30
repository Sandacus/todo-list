
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let listItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public/"))


app.get("/", function(req, res){
    let today = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    let day = today.toLocaleDateString("en-GB", options)
    res.render("index", { kindOfDay: day, newItems: listItems });
});

app.post("/", function(req, res){
    listItem = req.body.newItem;
    listItems.push(listItem);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});