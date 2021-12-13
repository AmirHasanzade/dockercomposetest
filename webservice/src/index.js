const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

app.post("/getdata", (req, res) => {
    res.json({
        name: "Amir",
        age: 35
    });
    res.end();
});

app.listen(4000, () => console.log("Listening on port 4000"));