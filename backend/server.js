const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("Hello Okay");
});

app.listen(5000, () => console.log("Server is running in port 5000"));