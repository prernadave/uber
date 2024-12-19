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
