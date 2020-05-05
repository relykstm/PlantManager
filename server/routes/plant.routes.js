const PlantController = require("../controllers/plant.controller")
const { authenticate } = require('../config/jwt.config');


module.exports = app =>{
    app.get("/api/plants", PlantController.findAllPlants);
    app.post("/api/plants/add", PlantController.addOnePlant);
    app.delete("/api/plants/delete/:id", PlantController.deleteOnePlant);
    app.get("/api/plants/:id", PlantController.getOnePlant);
    app.put("/api/plants/edit/:id", PlantController.updateOnePlant);
    app.post("/api/getsearch", PlantController.searchForPlants);
    app.post("/api/getoneresult", PlantController.searchForOnePlant)
}