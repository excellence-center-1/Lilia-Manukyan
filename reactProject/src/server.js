const express = require('express')
const fs = require('fs')

const app = express()
const port = 3001

app.get('/listUsers', (req, res) => {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) => {
    console.log( data );
    res.end( data );
 });
})

const newUsers = user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4"
        
    }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})