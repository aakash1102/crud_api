const axios = require('axios')

exports.homeRoute = (req,res)=>{
    axios.get('https://crud-api-js.herokuapp.com/api/user')
    .then(function(response){
        //console.log(response.data[0])
        res.render('index',{users : response.data})
    })
    .catch(err =>{
        res.send(err)
    })
    
}

exports.add_user = (req,res)=>{
    res.render('add_user')
}

exports.update_user = (req, res) =>{
    axios.get('https://crud-api-js.herokuapp.com/api/user', { params : { id : req.query.id }})
    .then(function(userdata){
        //console.log(params);
        res.render("update_user", { user : userdata.data})
    })
        .catch(err =>{
            // res.send(err);
            console.log("error hai...")
        })
}

