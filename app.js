
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let listItems = [];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public/"))


app.get("/", function(req, res){
    let today = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    let day = today.toLocaleDateString("en-GB", options)
    res.render("list", { listTitle: day, newItems: listItems });
});

app.post("/", function(req, res){
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }

    listItems.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res) {
    res.render("about");
});