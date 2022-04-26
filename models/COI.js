'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var coiSchema = Schema( {
     num: Number,
     zip: String,
     msaname15: String,
     stateusps:  String,
     pop: Number, // are these numbers when it is 0.41830131
     z_coi_nat: Number, // are these numbers when it is 0.41830131
     c5_coi_nat:  String ,
     r_coi_nat: Number
});

module.exports = mongoose.model( 'COI', coiSchema );
