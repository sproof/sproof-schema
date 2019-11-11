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

        locationHash: {
          description: "IPFS hash of document",
          type:'string',
        },
        documentType: {
          description: "Type of document",
          type: 'string'
        },
        tags : {
          type: 'array',
          items: {
            type: 'string',
            description: 'Tags to find the file'
          },
        },
        name: {
          type: 'string',
          description: 'The name of the registration'
        },
        dependencies: {
          type: 'array',
          items: {
            type: 'string',
            description: 'Hashes of registration or receivers'
          },
        },
        receiverAttributes : {
          type: 'array',
          items: {
            type : 'string',
            description: 'The attributes which are linked to an receiver, e.g., name, email, dateOfBirth,...'
          }
        },
        tags : {
          type: 'array',
          items: {
            type : 'string',
            description: 'Tags of the document'
          }
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