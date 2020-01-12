const express=require('express')
const router=express.Router()
const User=require('../models/User')


router.post('/register',function(req,res){

    const body=req.body
    const user=new User(body)

    user.save()
        .then(function(user){
            res.send(user)
        })
        .catch(function(err){

            res.send(err)
        })
})


module.exports={
    usersRouter:router
}
