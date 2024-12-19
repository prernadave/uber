const express = require('express');
const userRouter = require('./routes/user.routes');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const captainRouter = require('./routes/captainroutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser());


app.get('/', (req, res) => {
    res.json("hi I am running")
})

app.use('/user',userRouter);
app.use('/captain',captainRouter)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;