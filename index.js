//importam modulul express
const express = require('express');
//initializam o noua aplicatie de tip express
const app = express();

app.set("view engine" , "ejs");

// cream ruta radacina
app.get('/', (req, res)=>{
    //generam cate pagini html vrem
    res.send("hey sand worm!"); //poate trimite atat text cat si continut json
})

app.get('/hello', (req, res)=>{
    res.render('hello', {
        nume:"Alex Teodor",
        varsta:"30"
    });
})

//finalizam aplicatia.pornim serverul
app.listen(3000, ()=>{
    console.log("server started on port 3000");
})