const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express App
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Public Static Route
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});
