    const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcryptjs=require('bcryptjs')
const _ = require('lodash')
const {authenticateUser} = require('../middleware/authentication')


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

router.get('/:username',function(req,res){
    
    //    console.log(req.params.username)
        User.findOne({'username':req.params.username})
        .then(function(users){
            res.send(users)
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
router.get('/account', authenticateUser, function (req, res) {
    const { user } = req
    res.send(user)
})

router.delete('/logout', authenticateUser, function (req, res) {
    //    console.log('request')
        const { user, token } = req
        User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
            .then(function () {
                res.send({ notice: 'successfully logged out' })
            })
            .catch(function (err) {
                res.send(err)
            })
    })
    
router.delete('/delete',function(req,res){
     User.findOneAndRemove({username:"kanya1"})
     .then(function (user) {
        // return user 
        res.send({user,notice:'this user deleted'})   
    })
    .catch(function (err) {
        res.send(err)
    })

})
router.put('/update/:username',function(req,res){
    
    //    console.log(req.params.username)
    const body = _.pick(req.body, ['username', 'email', 'password'])
        User.findOneAndUpdate({'username':req.params.username},body,{ new: true, runValidators: true })
        .then(function(users){
            res.send({users,notice:'this user got updated successfully'})
        })
        .catch(function(err){
            res.send(err)
        })
        
})
    


module.exports={
    usersRouter:router
}
