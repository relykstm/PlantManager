const UserController = require("../controllers/user.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = app =>{
    app.post("/api/users/new", UserController.registerOneUser);
    app.post("/api/users/login", UserController.loginOneUser);
    app.delete("/api/users/delete/:id", UserController.deleteOneUser);
    app.get("/api/users",authenticate, UserController.findAllUsers);
    app.post("/api/userlogin", authenticate, UserController.getOneUser);
    app.put("/api/addplanttouser", UserController.updateOneUser)
}