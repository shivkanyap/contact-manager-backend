const express=require('express')
const {mongoose}=require('./config/database')
const {usersRouter}=require('./app/controllers/UsersController')
const port=5000

const app=express()

app.use(express.json())

app.use('/users',usersRouter)



app.listen(port,function(){
    console.log(`server running on port ${port}`)
})