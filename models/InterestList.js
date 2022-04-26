'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var interestSchema = Schema( {
  userId: ObjectId,
  locationId: ObjectId,
} );

module.exports = mongoose.model( 'InterestList', interestSchema );
