const { 
    getAllLaunches,
    addNewLaunch,
 } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {

    addNewLaunch(launch);
}

module.exports = {
    httpGetAllLaunches,
};