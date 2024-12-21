const { validationResult } = require("express-validator");
const captainModel = require("../models/captainModel");
const { createCaptain } = require("../services/captain.service");



module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { fullname, email, password, vehicle } = req.body;

        const isCaptainAlreadyExists = await captainModel.findOne({email:email})

        if(isCaptainAlreadyExists){
         return   res.status(400).json({message:'Captain already exists'})
        }

        console.log(fullname);
        

        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await createCaptain({
            firstname: fullname.firstname, // Match the expected key in createCaptain
            lastName: fullname.lastname,   // Match the expected key in createCaptain
            email,
            password: hashedPassword,
            color: vehicle.color,
            type: vehicle.type,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
        });
        

        const token = captain.generateAuthToken();
        console.log(token, captain);


        res.status(201).json({ token, captain })
    } catch (error) {
        next(error);
    }
}



module.exports.loginCaptain = async (req,res,next)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        const {email,password}= req.body;

        const captain = await captainModel.findOne({email}).select('+password');

        if(!captain){
            return res.json(401).json({message:'Invalid email or password'})
        }

        const isMatch = await captain.comparePassword(password);

        if(!isMatch){
            return res.json(401).json({message:'Invalid email or password'})
        }

        const token = captain.generateAuthToken();

        res.cookie('token', token, {
            httpOnly: true, // Ensures cookie is not accessible via client-side scripts
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            maxAge: 3600000, // 1 hour
        });

        res.status(200).json({token,captain,message:"login successfull"})
    
    } catch (error) {
        next(error);
    }
}



module.exports.getCaptainProfile = async (req,res,next)=>{
    res.status(200).json(req.catain);
    
}


module.exports.logoutCaptain = async(req,res,next)=>{
    res.clearCookie('token')
    const token = req.cookies?.token || req.headers.authorization
await BlacklistedToken.create({token})
    res.status('200').json({message:'logged out'})
}
