const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const { createUser } = require("../services/user.service");
const BlacklistedToken = require("../models/blacklistToken");


module.exports.registerUser = async(req,res,next)=>{
   try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    console.log(req.body);
    

    const {fullname,email,password} = req.body;

 

    const hashedPassword = await userModel.hashPassword(password);

    const user = await createUser({
        firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
    })

    const token = user.generateToken();


    console.log(token,user);
    

    res.status(201).json({token,user})
   } catch (error) {
    next(error);
   }


}


module.exports.loginUser = async (req,res,next)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        const {email,password}= req.body;

        const user = await userModel.findOne({email}).select('+password');

        if(!user){
            return res.json(401).json({message:'Invalid email or password'})
        }

        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.json(401).json({message:'Invalid email or password'})
        }

        const token = user.generateToken();

        res.cookie('token', token, {
            httpOnly: true, // Ensures cookie is not accessible via client-side scripts
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            maxAge: 3600000, // 1 hour
        });

        res.status(200).json({token,user,message:"login successfull"})
    
    } catch (error) {
        next(error);
    }
}

module.exports.getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user);
    
}


module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token')
    const token = req.cookies?.token || req.headers.authorization
await BlacklistedToken.create({token})
    res.status('200').json({message:'logged out'})
}



// {
//     "email": "johndoe@example.com",
//     "password": "Password123"
//   }