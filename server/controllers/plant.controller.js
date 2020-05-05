const Plant = require("../models/plant.model")
const Axios = require('axios')

module.exports.findAllPlants = (req, res) =>{
    Plant.find()
        .then(allPlants => res.json({plants: allPlants}))
        .catch(err => err.json({message: "Tried to get all the plants, but failed.", error: err}))
}

module.exports.addOnePlant = (req, res) => {
    const {nickname, location, apid, waterhistory } = req.body;
    Plant.create({nickname, location, apid, waterhistory})
        .then(newlyCreatedPlant => res.json({plant: newlyCreatedPlant}))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOnePlant = (req, res) => {
    Plant.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err=> res.json({message:"tried to delete a plant, but failed.", error: err}))
}

module.exports.getOnePlant = (req,res) => {
    Plant.findOne({_id: req.params.id})
        .then(OneSingPlant => res.json({plant: OneSingPlant}))
        .catch(err => res.json({message: "Tried to grab one plant, but failed.", error: err}))
}

module.exports.updateOnePlant= (req, res) => {
    const {id, newwaterhistory} = req.body
    Plant.findOneAndUpdate({_id: id},
        {$set:
            {'waterhistory': newwaterhistory}
        })
        .then(updatedPlant => res.json(updatedPlant))
        .catch(err => res.status(400).json(err))
}

module.exports.searchForPlants = (req, res) => {
    const {plant} = req.body
    Axios.get(`https://trefle.io/api/plants?q=${plant}&complete_data=true&token=OEcrNGtuSExseGhhdWduK3JqQ1VtQT09`)
        .then(plantsresults => res.json(plantsresults.data))
        .catch(err => console.log(err))
}

module.exports.searchForOnePlant = (req, res) => {
    const {id} = req.body
    Axios.get(`https://trefle.io/api/plants/${id}?token=OEcrNGtuSExseGhhdWduK3JqQ1VtQT09`)
        .then(plantresults => res.json(plantresults.data))
        .catch(err => console.log(err))
}