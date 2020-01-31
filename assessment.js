const express = require('express')

const app = express();
const port = 3000;

// Where we will keep products
let products = [];

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/product', (req, res) => {
    // We will be coding here
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));