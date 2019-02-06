let express = require("express");

let app = express();

const posts = {
    post1: 'cats',
    post2: 'dogs',
    post3: 'birds'
}

app.get("/", function (req, res) {

    console.log(req.originalUrl);
    res.send("Welcome to the Homepage!");
});

app.get("/posts", function(req, res) {
    res.send(posts);
});

app.get("*", function(req, res) {
    res.send("404 not found");
})

const port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
})