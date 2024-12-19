// Import the user model
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const userModel = require('../models/user.model');
const BlacklistedToken = require('../models/blacklistToken');

module.exports.authUser = async (req, res, next) => {
    try {
        // Extract token from cookies or authorization header
        const token = req.cookies?.token || req.headers.authorization;

        console.log("Token:", token);

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Check if the token is blacklisted
        const isBlacklisted = await BlacklistedToken.findOne({ token: token });

        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized: Token is blacklisted' });
        }

        // Verify the token with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user based on the decoded token payload
        const user = await userModel.findById(decoded._id).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        // Attach the user to the request object for further use
        req.user = user;

        // Pass control to the next middleware
        next();
    } catch (err) {
        console.error("Error verifying token:", err.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};
