const mongoose=require('mongoose')
const config=require('config')
const db=config.get('mongoURI')

mongoose.connect(db,{ useNewUrlParser: true ,useUnifiedTopology: true })
.then(function(){
    console.log('connected to db')
})
.catch(function(){
    console.log('error in connecting to db')
})
module.exprots={
    mongoose
}