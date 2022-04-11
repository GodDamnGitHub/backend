const express = require('express');
const router = express.Router();
let Ship = require('../models/Ship.js');

router.delete('/delete/:ship', function(req,res){
    let name = req.params.ship;
    Ship.findOneAndDelete({name:name}, function(error,doc){
        if(error){
            res.status(500);
            console.log("Error deleting",name,error);
        }
        else if(!doc){
            console.log("No documents with name",name,"exist to delete.");
            res.sendStatus(404);
        }
        else{
            console.log("Deleted",name);
            res.send(doc);
        }
    });
});

module.exports = router;