const express = require('express');
const app = express();
const port = 3000;

app.get("",(req,res) => {
    res.send("welcome to my list");
})
app.listen(port,() => {
    console.log('listening to the port $(port)')
})