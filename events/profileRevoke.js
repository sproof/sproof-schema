const profileRevokeSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Profile revoke",
  "description": "Revoke a profile sproof event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["PROFILE_REVOKE"]
    },
    data: {
      type : 'object',
      properties: {
        reason: {
          description: "Description for revokation",
          type: "string",
          maxLength: 512,
        }
      }
    }
  },
  "required" : ['eventType', 'data']
};

module.exports = profileRevokeSchema;