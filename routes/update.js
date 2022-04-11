const express = require('express');
const router = express.Router();
let Ship = require('../models/Ship.js');

router.patch('/tons/:ship/:newWeight', function(req,res){
    Ship.findOne({"name":req.params.ship}, (err, document)=> {
        if (err) {
            console.log("Error finding a ship",error);
            res.sendStatus(500);
        }
        document.tonnage = req.params.newWeight;
        newShip = Ship(document);
        newShip.save((error, document) => {
            if(error){
                console.log("Error saving an updated ship",error);
                res.sendStatus(500);
            }
            else{
                res.send(document);
            }    
        })
    })
});

module.exports = router;