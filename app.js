const fs = require("fs")
const moment = require('moment')
const time = new Date()
const printTime = moment(time).format('hh:mm:ss') 
const http = require('http')
console.log(printTime)
fs.writeFileSync("intro.txt","hello world")
fs.appendFileSync("intro.txt", " i'm dipak")
const express = require("express");
const path = require("path")
const app = new express();
app.use(express.static(path.join(__dirname, "/public")));

app.listen(8081, () => {  
    console.log("Server running on 8081");
});
