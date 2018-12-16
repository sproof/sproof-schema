const profileSchema = require('../objects/profile');

const profileRegisterSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Profile register",
  "description": "Register sproof profile event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["PROFILE_REGISTER"]
    },
    data: profileSchema
  },
  "required" : ['eventType', 'data']
};

module.exports = profileRegisterSchema;