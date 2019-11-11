const documentReceiverAdd = require('./documentReceiverAdd');
const documentReceiverRevoke = require('./documentReceiverRevoke');
const documentRegister = require('./documentRegister');
const documentRegisterBulk = require('./documentRegisterBulk');

const documentRevoke = require('./documentRevoke');
const documentStore = require('./documentStore');

const profileConfirm = require('./profileConfirm');
const profileRegister = require('./profileRegister');
const profileRevoke = require('./profileRevoke');
const profileUpdate = require('./profileUpdate');

const eventSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Events",
  "description": "sproof events",
  "type": "array",
    "items": {
      oneOf: [
        profileRegister,
        documentRegisterBulk,
        documentRegister,
        documentReceiverAdd,
        documentReceiverRevoke,
        documentRevoke,
        documentStore,
        profileConfirm,
        profileRevoke,
        profileUpdate,
      ],
  },
  maxItems: 100,
    minItems: 1
};

module.exports = eventSchema;