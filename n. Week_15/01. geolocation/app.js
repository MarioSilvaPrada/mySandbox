let express = require('express');
let request = require('request');

let app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/geolocation', (req, res) => {
    let location = req.query['location']
    let url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;
   
    const options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    }

    console.log(url);
    request(options, function (error, response, body) {
        res.send(response.body)
    });
})



app.listen(3000, function () {
    console.log("server started on localhost 3000");
});