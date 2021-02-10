const express =  require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.get('',(req,res)=>{
    res.send("HI THIS IS AN WHEATHER APP");
})
app.get('/weather',(req,res)=>{
    res.send("this is wheather end");
})
app.get('*',(req,res)=>{
    res.send("Page not found");
})

app.listen(port,()=>{
    console.log("Server is Running  on port",port);
})               