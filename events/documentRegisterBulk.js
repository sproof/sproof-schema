
const documentRegister = require('./documentRegister');

const documentRegisterBulkSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Register multiple documents",
  "description": "Register multiple documents sproof event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["DOCUMENT_REGISTER_BULK"]
    },
    data:  {
      "type": "array",
      "items": {
        "type": 'object',
        'properties' : documentRegister.properties.data.properties
        },
      maxItems: 5000,
      minItems: 1
    }
  },
  "required" : ['eventType', 'data']
};
module.exports = documentRegisterBulkSchema;