const express=require('express')
const port=5000

const app=express()

app.listen(port,function(){
    console.log(`server running on port ${port}`)
})