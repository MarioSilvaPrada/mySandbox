let express = require("express");

let app = express();

app.get("/", function (req, res) {
    console.log(req.originalUrl);
    res.send("Welcome to the Homepage!");
});

app.get("/download/myphotos", function (req, res) {
    res.send("Welcome to the Homepage!");
});

app.get("*", function(req, res) {
    res.send("404 not found");
})

const port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
})