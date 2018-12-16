const profileSchema = require('../objects/profile');

let profileSchemaNonRequired = JSON.parse(JSON.stringify(profileSchema));
profileSchemaNonRequired.required = [];

const profileUpdateSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Update Profile",
  "description": "Update profile sproof event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["PROFILE_UPDATE"]
    },
    data: profileSchemaNonRequired
  },
  "required" : ['eventType', 'data']
};

module.exports = profileUpdateSchema;