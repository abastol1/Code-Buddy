var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("Inside publish post");

    var projectInfo = {
        "fullName" : req.body.fullName,
        "email": req.body.email,
        "projectName": req.body.projectName,
        "projectCategory": req.body.projectCategory,
        "projectDescription": req.body.projectDescription,
        "languages": req.body.languages,
        "frameworks": req.body.frameworks
    }
    console.log("Inside publish post");
    console.log(projectInfo);
    res.send("Sucess");
});

module.exports = router;
