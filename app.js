
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

let weekDays = {
    0: "Sunday", 
    1: "Monday", 
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"};

app.get("/", function(req, res){

    let today = new Date();
    let currentDay = today.getDay();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    let day = today.toLocaleDateString("en-GB", options)

    res.render("index", {kindOfDay: day});  // weekDays[currentDay]

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});