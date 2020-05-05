const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}), cors({credentials: true, origin: 'http://localhost:3000'}), cookieParser())


require("./server/routes/plant.routes")(app);
require("./server/routes/user.routes")(app);

const server = app.listen(8000, () => console.log(`The server is running on ${server.address().port}!`))


