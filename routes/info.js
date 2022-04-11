const express = require('express');
const router = express.Router();
let Ship = require('../models/Ship.js');

router.get('/info/:ship', function (req, res) {
        
    Ship.findOne({name: req.params.ship}, (error, document) => {
        if(error){
            console.log("Error finding a ship",error);
            res.sendStatus(500);
        }
        else{
            res.send(document);
        }
    });
    //res.send(req.params.ship);
});

module.exports = router;