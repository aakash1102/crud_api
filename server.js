const express = require('express');
const dotenv =require('dotenv');
const morgon =require('morgan');
const path =require('path');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//this middleware for HTTP request logger.
app.use(morgon('tiny'));

//mongodb connectin
connectDB();

//parse request to body pars
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs");

//load assets
app.use('/css',express.static(__dirname + '/assets/css'));
app.use('/img', express.static(__dirname + '/assets/img'));
app.use('/js', express.static(__dirname + '/assets/js'));

// app.get('/',(req,res)=>{
//     res.render('index');
// })
// app.get('/add-user',(req,res)=>{
//     res.render('add_user.ejs');
// })

app.use('/', require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("value is", express.static(resolve(__dirname,'/assets/csss')));
});