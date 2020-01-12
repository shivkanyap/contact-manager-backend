const express=require('express')
const router=express.Router()
const {Contact}=require('../models/Contact')

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
router.delete('/:id',  function (req, res) {
    const id = req.params.id
    Contact.findOneAndDelete({
        user: req.user._id, 
        _id: id 
    })
        .then(function (contact) {
            res.send(contact)
        })
        .catch(function (err) {
            res.send(err)
        })
})

module.exports={
    contactsRouter:router
}