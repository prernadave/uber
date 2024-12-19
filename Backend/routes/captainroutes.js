const express = require('express');
const { body, validationResult } = require('express-validator');
const { registerCaptain } = require('../controllers/captain.controller');
const captainRouter = express.Router();

captainRouter.post(
    '/register',
    [
        // Email validation
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email address')
            .normalizeEmail() // Converts email to lowercase and removes unnecessary spaces
            .isLength({ min: 5 })
            .withMessage('Email must be at least 5 characters long'),

        // Password validation
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long')
            .matches(/\d/)
            .withMessage('Password must contain at least one number')
            .matches(/[A-Z]/)
            .withMessage('Password must contain at least one uppercase letter')
            .matches(/[a-z]/)
            .withMessage('Password must contain at least one lowercase letter')
            .matches(/[@$!%*?&]/)
            .withMessage('Password must contain at least one special character'),

        // Fullname validation
        body('fullname.firstname')
            .isLength({ min: 3 })
            .withMessage('First name must be at least 3 characters long')
            .isAlpha()
            .withMessage('First name must contain only alphabets')
            .trim(),

        // Vehicle validation
        body('vehicle.type')
            .isIn(['car', 'auto', 'bike'])
            .withMessage('Vehicle type must be one of the following: car, auto, bike'),

        body('vehicle.color')
            .isLength({ min: 1 })
            .withMessage('Vehicle color is required')
            .isAlpha()
            .withMessage('Vehicle color must contain only alphabets')
            .trim(),

        body('vehicle.plate')
            .matches(/^[A-Z0-9-]+$/)
            .withMessage('Invalid vehicle plate format (alphanumeric and hyphens allowed)')
            .isLength({ min: 1 })
            .withMessage('Vehicle plate is required'),

        body('vehicle.capacity')
            .isInt({ min: 1, max: 10 })
            .withMessage('Vehicle capacity must be between 1 and 10'),



     
    ],
registerCaptain
);

module.exports = captainRouter;
