const documentRevokeSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Document revoke",
  "description": "Revoke a sproof document event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["DOCUMENT_REVOKE"]
    },
    data: {
      type : 'object',
      properties: {
        documentHash: {
          description: "Hash of the registered document",
          type: "string"
        },
        reason: {
          description: "Revocation code",
          type: "number",
        }
      },
      required : ['documentHash']
    },

  },
  required : ['eventType', 'data']
};

module.exports = documentRevokeSchema;