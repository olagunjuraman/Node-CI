const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hello-world, welcome to the complete website, i deleted the deploy key i am in the dev branches')
});



app.listen(3000)