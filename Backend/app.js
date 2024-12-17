const express = require('express');
const userRouter = require('./routes/user.routes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/', (req, res) => {
    res.json("hi I am running")
})

app.use('/user',userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;