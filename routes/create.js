const express = require('express');
const router = express.Router();
let Ship = require('../models/Ship');

router.post('/create/', function (req, res) {
    //let data = req.body;
    
    let ship = new Ship(req.body);
    ship.save((error, document) => {
        if(error){
            console.log("Error saving a new ship",error);
            res.sendStatus(500);
        }
        else{
            res.send(document);
        }
    });
    //res.send(req.body.name);
});

module.exports = router;