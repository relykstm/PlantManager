const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/all_plants", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You are now connected to a database containing the BEST HOUSEPLANTS EVER"))
    .catch(() => console.log("Something went wrond connecting to the database."))