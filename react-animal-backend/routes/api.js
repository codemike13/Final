var express = require('express');
var router = express.Router();



router.get('/getallanimals', function (req, res, next) {

});

router.post('/createanimal', function (req, res, next) {
    res.send("animal")
});

router.put('/update-animal-by-id', function (req, res, next) {

});

router.delete('/delete-animal-by-id', function (req, res, next) {

});


module.exports = router;
