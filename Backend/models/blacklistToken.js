const mongoose = require('mongoose');

// Define the schema for blacklisting JWT tokens
const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true, // Token is required
        unique: true,   // Ensure no duplicate blacklisted tokens
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the current date
        expires: 86400,    // TTL: 24 hours (in seconds)
    }
});

// Create the model
const BlacklistedToken = mongoose.model('BlacklistedToken', blacklistedTokenSchema);

module.exports = BlacklistedToken;
