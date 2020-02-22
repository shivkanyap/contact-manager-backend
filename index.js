const express=require('express')
const {mongoose}=require('./config/database')
const {usersRouter}=require('./app/controllers/UsersController')
const{ contactsRouter}=require('./app/controllers/ContactsController')
const port=5000;

const app=express()

app.use(express.json())
app.get('/', function(req, res){
    res.send('<h2>Welcome to contact manager</h2>')
})

app.use('/users',usersRouter)
app.use('/contacts',contactsRouter)




app.listen(port,function(){
    console.log(`server running on port ${port}`)
})