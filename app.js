const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

// Runs the Express server
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})