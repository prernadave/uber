const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Define the Captain Schema
const captainSchema = new mongoose.Schema({
    // Full Name Object with First and Last Name
    fullname: {
        firstname: {
            type: String,
            required: [true, 'First name is required'],
            minlength: [3, 'First name must be at least 3 characters long'],
            trim: true
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
            trim: true
        }
    },

    // Email Field
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minlength: [5, 'Email must be at least 5 characters long'],
        match: [/.+\@.+\..+/, 'Please use a valid email address'] // Regex validation for email
    },

    // Password Field (Stored securely with select: false)
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false // Password will not be sent in queries by default
    },

    // Socket ID for Realtime Connections
    socketid: {
        type: String,
        trim: true,
        default: null
    },

    // Status Field: Active or Inactive
    status: {
        type: String,
        enum: ['active', 'inactive'], // Allowed values
        default: 'inactive'
    },

  

    // Vehicle Information
    vehicle: {
        
            type: {
                type: String,
                enum: ['car', 'auto', 'bike'], // Vehicle types
                required: [true, 'Vehicle type is required']
            },
         
           
            color: {
                type: String,
                required: [true, 'Vehicle color is required'],
                trim: true
            },
            plate: {
                type: String,
                required: [true, 'Vehicle plate is required'],
                unique: true,
                match: [/^[A-Z0-9-]+$/, 'Invalid plate format'] // Regex for alphanumeric plates
            },
            capacity: {
                type: Number,
                required: [true, 'Vehicle capacity is required'],
                min: [1, 'Capacity must be at least 1']
            }
       
    },

    // Location (Latitude and Longitude)
    location: {
        type: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        },
        required: false
    },

    // Timestamp for Creation and Update
}, { timestamps: true });


captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id:this._id}, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model('captain', captainSchema)
module.exports = captainModel;
