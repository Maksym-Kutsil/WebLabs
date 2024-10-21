const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const cards = require('./routes/cards')

const app = express();
const PORT = process.env.PORT || 8080;


// ...
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/cards', cards)



app.get('/', (req, res) => {
    res.send("cards");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
