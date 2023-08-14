const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const categories = require('./Data/categories.json');

app.get('/', (req, res) => {
    res.send('Dragon is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`the dragon is running on ${port}`);
})