const express = require('express');
const app = express();
var hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS View
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

require('./hbs/helpers/helpers')



app.get('/',(req,res)=>{

   

    res.render('home',{name:'Javi'})
})

app.get('/about',(req,res)=>{

   

    res.render('about')
})

app.listen(port, ()=>{
    console.log(`Listening port ${port}`)
})