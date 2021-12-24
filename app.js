var express = require('express')
var app = express()

const jsonStr = '{ "name" : { "Name": "Burhan Aditya", "firstName": "Burhan", "lastName" : "Aditya"} }'
const jsObj = JSON.parse(jsonStr)

let name = jsObj["name"]["Name"]
let firstName = jsObj["name"]["firstName"]
let lastName = jsObj["name"]["lastName"]



app.get('/home', function(req, res){
    console.log("Burhan Aditya")
})

app.get('/name', function(req, res){
    console.log(name)
})

app.get('/name/first', function(req, res){
    console.log(firstName)
})

app.get('/name/last', function(req, res){
    console.log(lastName)
})

app.listen(3000)
console.log("port is listening ...")

