const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    // res.send("Hello");


    let today = new Date();
    let currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.write("<h1>Yay, it's the weekend!</h1>")
    } else {
        res.sendFile(`${__dirname}/index.html`);
    }

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});