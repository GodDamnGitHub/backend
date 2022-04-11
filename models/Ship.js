const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a ship.
 */
let ShipSchema = new Schema({
  name: {
    type: String
  },
  launched: {
    type: Date
  },
  tonnage: {
    type: Number
  },
  speed: {
    type: Number
  },
  meme: {
    type: Boolean
  }
});

let Ship = mongoose.model("Ship", ShipSchema);
module.exports = Ship;