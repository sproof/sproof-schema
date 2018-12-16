const documentStoreSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Document store",
  "description": "Revoke a sproof document event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["DOCUMENT_STORE"]
    },
    data: {
      type : 'object',
      properties: {
        documentHash: {
          description: "Hash of the registered document",
          type: "string"
        },

        data: {
          description : 'JSON representation of document must match with document hash',
          type : 'object'
        },

        locationHash: {
          description: "Location hash",
          type: "string",
          maxLength: 100,
        }
      }
    },
    required : ['documentId', 'locationHash']
  },
  required : ['eventType', 'data']
};

module.exports = documentStoreSchema;