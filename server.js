const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hello-world, welcome to the complete website, i dey master branch working, not test master master')
});



app.listen(3000)


