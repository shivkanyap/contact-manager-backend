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


router.get('/',function(req,res){
    
    User.find()
        .then(function(user){
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post('/login', function (req, res) {
    const body = req.body
    User.findByCredentials(body
        
        .email, body.password)
        .then(function (user) {
            return user.generateToken()
        })
        .then(function (token) {
            res.send({ token })
        })
        .catch(function (err) {
            res.send(err)
        })

})
// router.delete('/delete',function(req,res){
//      User.findOneAndRemove({username:"kanya1"})
//      .then(function (user) {
//         return user    
//     })
//     .catch(function (err) {
//         res.send(err)
//     })

// })


module.exports={
    usersRouter:router
}
