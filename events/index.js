const events = require('../events/events');

//const profileUpdateKey = require('profileUpdateKey');

const eventsSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Events",
  "description": "sproof events",
  "type": "object",
  properties: {
    "chain": {
      "type": "string",
      "enum": ["ethereum"]
    },
    "chainId": {
      "type": "string",
    },
    "version": {
      "type": "string"
    },
    "nonce": {
      "type": "number"
    },
    "from": {
      "type": "string"
    },
    "events": events,
  },
  required : ['chainId', 'chain', 'nonce', 'events', 'version', 'from']

};

module.exports = eventsSchema;