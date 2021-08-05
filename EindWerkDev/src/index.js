const express = require('express');
const app = express();
app.get("/", (_, res) => res.send("hello World"));
const port = 3001;
app.listen(port, () =>{
    console.log("up and running")
});