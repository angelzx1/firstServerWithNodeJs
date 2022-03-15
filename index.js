var express = require('express');
var app = express();


app.get("/", (req, res)=>{ req.set('The server is running')})

app.listen(4000, ()=>{
console.log('Server on port 4000 is running');
}) 