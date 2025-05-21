var express = require('express');
var app = express();
var path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set views directory

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', { message: "Hello From Baha" });
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": "Great!, It works!" }');
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
