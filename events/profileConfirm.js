eiver : {
      type: 'object',
      properties: {
        publicKey : { type: 'string', description : 'PublicKey of receiver'},
        identificationHash : {type: 'string', description : 'Hash of identification data'}
      },
      required : ['publicKey']
    },
    data : {
      type: 'object',
      description: 'Data of the document'
    }
  },
  required : ['receiver']
};

module.exports = documentSchema;const profileConfirmSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Profile Confirm",
  "description": "Confirm a profile sproof event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["PROFILE_CONFIRM"]
    },
    data: {
      type : 'object',
      properties: {
        to: {
          description: "Account address to confirm",
          type: "string",
          maxLength: 42,
          minLength: 42,
        },
        value: {
          description: "A confirmation can ether be positive or negative",
          type: "boolean"
        }
      },
      'required' : ['to', 'value']
    }
  },
  "required" : ['eventType', 'data']
};

module.exports = profileConfirmSchema;