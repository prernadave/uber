const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/user.controller');
const { authUser } = require('../middleware/auth.middleware');
const router = express.Router();


router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters.'),
    body('fullname.lastname').optional().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters.'),
    body('email').isEmail().withMessage('Invalid email address.'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters.')
], registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email address.'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters.')
],loginUser);

router.get('/profile',authUser, getUserProfile)

router.get('/logout',logoutUser);


module.exports = router;
