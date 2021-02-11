const express =  require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData');

const publicStaticDirPath = path.join(__dirname,'../public'); 
const partialsPath = path.join(__dirname,'../templates/partials');
const viewPath = path.join(__dirname,'../templates/views');

app.set('view engine',hbs);
app.set('views',viewPath);
app.use(express.static(publicStaticDirPath));


const port = process.env.PORT || 3000;

app.get('',(req,res)=>{
    res.send("HI THIS IS AN WHEATHER APP");
})
app.get('/weather',(req,res)=>{
    const address = req.query.address;

    weatherData(address,(result)=>{
        console.log(result);
    
    })
});
app.get('*',(req,res)=>{
    res.send("Page not found");
})

app.listen(port,()=>{
    console.log("Server is Running  on port",port);
})               