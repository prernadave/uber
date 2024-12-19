const captainModel = require("../models/captainModel");

module.exports.createCaptain = async function ({ firstname, lastName, email, password, color, plate, capacity, type }) {
    if (!firstname || !lastName || !email || !password || !color || !plate || !capacity || !type) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: { firstname, lastName },
        email,
        password,
        vehicle: { color, plate, type, capacity },
    });

    return captain;
};
