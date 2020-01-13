const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:5

    }
})

userSchema.statics.findByCredentials = function (email, password) {
    const User = this
    return User.findOne({ email })
        .then(function (user) {
            if (!user) {
                return Promise.reject({ errors: 'invalid email / password' })
            }

            return bcryptjs.compare(password, user.password)
                .then(function (result) {
                    if (result) {
                        return Promise.resolve(user)
                        
                    } else {
                        return Promise.reject({ errors: 'invalid email / password' })
                    }
                })
        })
        .catch(function (err) {
            return Promise.reject(err)
            
        })
}




const User=mongoose.model('User',userSchema)
module.exports=User
