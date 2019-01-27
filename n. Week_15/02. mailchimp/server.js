let express = require('express');
let bodyParser = require('body-parser');
let request = require('request');

const apiKey = '0577b3570e1a4c1b2cc67062078407f2-us20';
const listId = '7de7d15be4';

let app = express();
app.use(express.urlencoded());
app.use(bodyParser.json());


app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// TESTE
// app.get('/lists', (req, res) => {

//     request('https://us20.api.mailchimp.com/3.0/lists', {
//         'auth': {
//             'user': 'mario',
//             'pass': apiKey,
//             'sendImmediately': true
//         }
//     }, function (error, response, body) {
//         console.log(body);
//         res.send(body);
//     });
// });

// Get users list
app.get('/members', (req, res) => {
    request('https://us20.api.mailchimp.com/3.0/lists/' + listId + '/members', {
        'auth': {
            'user': 'mario',
            'pass': apiKey,
            'sendImmediately': true
        }
    }, (error, response, body) => {
        console.log(body);
        res.send(body);
    })
})

// POST new user
app.post('/adduser', (req, res) => {
    console.log(req.body.data);
    request.post('https://us20.api.mailchimp.com/3.0/lists/' + listId + '/members', {
        'auth': {
            'user': 'mario',
            'pass': apiKey,
            'sendImmediately': true
        },
        body: req.body,
        json: true
    }, function (error, response, body) {
        console.log(body);
        res.send(body);
    });
});



app.listen(3000, function () {
    console.log("server started on localhost 3000");
});