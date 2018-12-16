const documentRegisterSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Register a document",
  "description": "Register a document sproof event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["DOCUMENT_REGISTER"]
    },
    data:  {
      type : 'object',
      properties: {
        validFrom: {
          description: "Unix timestamp",
          type: "number",
        },
        validUntil: {
          description: "Unix timestamp",
          type: "number",
        },
        documentHash : {
          description: "Hash of document to register",
          type: "string",
        },
        data: {
          type:'object',
        },
        dependencies: {
          type: 'array',
          items: {
            type: 'string',
            description: 'Hashes of registration or receivers'
          },
        },
        receivers : {
          type: 'array',
          items: {
            type: 'string',
            description: 'Hashes of registration or receivers'
          }
        }
      },
      required: ['documentHash']
    }
  },
  "required" : ['eventType', 'data']
};

module.exports = documentRegisterSchema;