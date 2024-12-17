const http = require('http')
const app = require('./app');
const connectToDb = require('./db/db');

const server = http.createServer(app);
const port = process.env.PORT || 3000


connectToDb()

console.log(port);


server.listen(port, ()=>{
    console.log(`server running on ${port}`)
})





