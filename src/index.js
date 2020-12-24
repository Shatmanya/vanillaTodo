const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname,"../public" );

app.use(express.static(staticPath));

app.get('/',(req,res) => {
    res.send('welcome to my page');
})
app.get('/about',(req,res) => {
    res.send('welcome to my About page');
})
app.get('/home',(req,res) => {
    res.send('welcome to my Home page');
})

app.listen(port,() => {
    console.log(`listening to the port no ${port}`);
})