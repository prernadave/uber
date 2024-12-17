 // Import the user model
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const userModel = require('../models/user.model');

module.exports.authUser = async (req, res, next) => {
    // Extract token from cookies or authorization header
    const token = req.cookies?.token || req.headers.authorization

    console.log(token);
    

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' }); // No token, return unauthorized
    }

    try {
        // Verify the token with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user based on the decoded token payload
        const user = await userModel.findById(decoded._id).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'User snot found' });
        }

        // Attach the user to the request object for further use
        req.user = user;
        next(); // Pass control to the next middleware
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' }); // Token verification failed
    }
};
