const express=require('express')
const router=express.Router()
const Contact=require('../models/Contact')
const _=require('lodash')

router.post('/addcontact',function(req,res){
    const body=req.body
    const contact=new Contact(body)
    //contact.user = req.user._id 
    contact.save()
    .then(function(contact){
        res.send(contact)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.get('/',function(req,res){
    Contact.find()
    .then(function(contact){
        res.send(contact)
    })
    .catch(function(err){
        res.send(err)
    })
})

// router.delete('/:id', function (req, res) {
//     const id = req.params.id
//     console.log(id)
//     Contact.findOneAndDelete({
//         _id: id ,
//         user: req.user._id
        
//     })
//         .then(function (contact) {
//             if(!contact)
//             {
//                 res.json({})
//             }
//             res.send(contact)
//         })
//         .catch(function (err) {
//             res.json({ })
//         })
// })
router.delete('/:id',function(req,res){
    const id=req.params.id

    Contact.findOneAndDelete({
        _id:id,
        // user:req.user._id
    })
        .then(function(contact){
            if(contact){
                res.send({
                    contact,
                    notice:'succesfully removed the contact'
                })
            }
            else{
                res.send('404').send({})
            }
        })
        .catch(function(err){
            res.send(err)
        })
           
        



})
router.get('/:id',function(req,res){
    const id=req.params.id
    console.log(id)
    Contact.findOne({
        // user:req.user.id,
    //  
        
        _id:id
    
    }).then(function(contact){
        if(contact)
        {
            res.send(contact)
        }
        else{
            res.send('404').send({})
        }
    })
    .catch(function(err){
        res.send(err)
    })

})

router.put('/:name',function (req, res) {
    // const id = req.body.id
    // console.log(id)
    const body = _.pick(req.body, ['name', 'email', 'mobile'])
    // const body=reqbody
    Contact.findOneAndUpdate({ 'name':req.params.name}, body, { new: true, runValidators: true })
    // console.log(_id)
        .then(function (contact) {
            if (contact) {
                res.send({
                    contact,
                    notice: 'successfully updated the contact'
                })
            } else {
                res.status('404').send({})
            }
        })
        .catch(function (err) {
            res.send(err)
        })
    })

module.exports={
    contactsRouter:router
}