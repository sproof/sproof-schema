const documentReceiverAddSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Document receiver add",
  "description": "Add a receiver to a sproof document event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["DOCUMENT_RECEIVER_ADD"]
    },
    data: {
      type : 'object',
      properties: {
        receiverId: {
          description: "Id of the receivers hash",
          type: "string"
        },
        documentHash: {
          description: "Hash of the registered document",
          type: "string"
        }
      }
    },
    required : ['receiverId', 'documentHash'],
  },
  required : ['eventType', 'data']
};

module.exports = documentReceiverAddSchema;