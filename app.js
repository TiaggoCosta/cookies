const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("home");
    res.send('index.html');
});

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Serving on port ${port}`);
});