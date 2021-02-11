const express =  require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData');

const publicStaticDirPath = path.join(__dirname,'../public'); 
const partialsPath = path.join(__dirname,'../templates/partials');
const viewPaths = path.join(__dirname,'../templates/views');

app.set('view engine','hbs');
app.set('views',viewPaths);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));


const port = process.env.PORT || 3000;

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App'
    })
})
//localhost:3000/weather?address=itarsi
app.get('/weather',(req,res)=>{
    const address = req.query.address;
    if(!address){
        return res.send({
            error : "You must enter the address in search box "
        })
    }

    weatherData(address,(error,{temprature,description,cityName})=>{
        if(error){
            return res.send({
                error
            })
        }
        console.log(temprature,description,cityName);
        res.send({
            temprature,
            description,
            cityName
        })
    
    })
});
app.get('*',(req,res)=>{
    res.send("Page not found");
})

app.listen(port,()=>{
    console.log("Server is Running  on port",port);
})               