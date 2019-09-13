const  express = require('express');
const app = express();
const bodyparser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const index = require('./routes/index');
const path = require('path');


app.set('view engine',"ejs");

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

app.use(expressValidator());

app.use(expressSession({
    secret:"A keyboard ,cat,rat",
    saveUninitialized:false,
    resave:false
}));



app.use(express.static(path.join(__dirname , '/public')));

app.use('/',index);


const port = process.env.PORT ||  3000;

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`);
})
