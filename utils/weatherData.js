 const request = require('request');
 const constants = require('../config');

 const weatherData=(address,callback)=>{
     const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
     request({url,json:true},(error,{body})=>{
        if(error){
            callback("Can't Generate data from open weather app api ", undefined)
        }else{
            callback(undefined,{
                temprature: body.main.temp,
                description: body.weather[0].description,
                cityName:body.name
            })
        }
     })
 }
    module.exports = weatherData;