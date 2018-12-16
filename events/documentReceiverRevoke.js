const documentRevokeSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Document receiver revoke",
  "description": "Revoke a sproof document receiver event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["DOCUMENT_RECEIVER_REVOKE"]
    },
    data: {
      type : 'object',
      properties: {
        receiverId: {
          description: "Id of the receivers hash",
          type: "string"
        },
        reason: {
          description: "Description for revokation",
          type: "string",
          maxLength: 512,
        }
      }
    },
    required : ['receiverId']
  },
  required : ['eventType', 'data']
};

module.exports = documentRevokeSchema;