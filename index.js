const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', function(req,res){
     //res.send('<h1>Hello Manoj Kumar!</h1> ');
    res.sendFile(__dirname +'/index.html');
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
