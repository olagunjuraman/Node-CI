const express = require('express');

const app = express();

app.get('/', (req, res)=>{
<<<<<<< HEAD
    res.send('hello-world, welcome to the complete website, i dey master branch')
=======
    res.send('hello-world, welcome to the complete website, i deleted the deploy key i am in the dev branches')
>>>>>>> 190f821ed24fdc5ba501f8212e8ea1cc6f3d2447
});



app.listen(3000)