const userModel = require("../models/user.model")

module.exports.createUser= async({firstname,lastname,password,email})=>{
    if(!firstname || !lastname || !password || !email){
        throw new Error('All fields are required.')
    }

    const user = await userModel.create({
        fullname:{
            firstname,lastname
        },
        email,
        password
    })

    return user
}