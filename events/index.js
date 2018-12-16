const documentReceiverAdd = require('./documentReceiverAdd');
const documentReceiverRevoke = require('./documentReceiverRevoke');
const documentRegister = require('./documentRegister');
const documentRevoke = require('./documentRevoke');
const documentStore = require('./documentStore');

const profileConfirm = require('./profileConfirm');
const profileRegister = require('./profileRegister');
const profileRevoke = require('./profileRevoke');
const profileUpdate = require('./profileUpdate');
//const profileUpdateKey = require('profileUpdateKey');

const eventsSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Events",
  "description": "Sproof events",
  "type": "array",
  "items" : {
    oneOf: [
      documentReceiverAdd,
      documentReceiverRevoke,
      documentRegister,
      documentRevoke,
      documentStore,
      profileConfirm,
      profileRegister,
      profileRevoke,
      profileUpdate
    ],
  },

  uniqueItems: true,
  maxItems : 100,
  minItems: 1
};

module.exports = eventsSchema;